import type { VercelRequest, VercelResponse } from '@vercel/node'
import Anthropic from '@anthropic-ai/sdk'
import { getAnthropic } from '../lib/anthropic.js'

type Lang = 'UZ' | 'RU' | 'EN'
type ChatMessage = { role: 'user' | 'assistant'; content: string }

const MAX_MESSAGES = 16
const MAX_MESSAGE_LENGTH = 1500

const SYSTEM_PROMPTS: Record<Lang, string> = {
  UZ: `Siz "Meros AI" kompaniyasining saytidagi virtual suhbat yordamchisisiz. Meros AI — O'zbekistondagi sun'iy intellekt xizmatlari kompaniyasi: AI agentlar va chatbotlar, local (mijozning o'z serverida ishlaydigan, offline) AI yechimlar, onlayn/bulutli AI xizmatlar, biznes jarayonlarini avtomatlashtirish va AI call-markaz (avtomatik ovozli qo'ng'iroqlar) xizmatlarini taqdim etadi.
Vazifangiz: sayt tashrif buyuruvchilarining savollariga qisqa (odatda 2-4 gap), aniq va do'stona javob berish, xizmatlar haqida tushuntirish va agar kishi qiziqish bildirsa, sahifa pastidagi "Buyurtma qoldiring" shaklini to'ldirishni taklif qilish. Narxlar haqida aniq raqam bilmaysiz — buyurtma formasi orqali bog'lanishni tavsiya qiling. Meros AI'ga aloqasi bo'lmagan mavzularda muloyimlik bilan rad eting va suhbatni kompaniya mavzusiga qaytaring. Faqat o'zbek tilida javob bering.`,
  RU: `Вы — виртуальный помощник на сайте компании "Meros AI". Meros AI — компания в Узбекистане, предоставляющая услуги искусственного интеллекта: ИИ-агенты и чат-боты, локальные (офлайн, на сервере клиента) ИИ-решения, облачные ИИ-сервисы, автоматизацию бизнес-процессов и ИИ колл-центр (автоматические голосовые звонки).
Ваша задача: кратко (обычно 2-4 предложения), точно и дружелюбно отвечать на вопросы посетителей сайта, рассказывать об услугах и предлагать заполнить форму заявки внизу страницы, если человек заинтересован. Точных цен вы не знаете — рекомендуйте связаться через форму заявки. На темы, не связанные с Meros AI, вежливо отказывайтесь отвечать и возвращайте разговор к теме компании. Отвечайте только на русском языке.`,
  EN: `You are the virtual chat assistant on the "Meros AI" company website. Meros AI is a company in Uzbekistan providing AI services: AI agents and chatbots, local (offline, running on the client's own server) AI solutions, cloud-based AI services, business process automation, and an AI call center (automated voice calls).
Your job: answer visitors' questions briefly (usually 2-4 sentences), accurately, and in a friendly tone, explain the services, and suggest filling out the order form at the bottom of the page if someone is interested. You don't know exact prices — recommend contacting through the order form. Politely decline topics unrelated to Meros AI and steer the conversation back. Respond only in English.`,
}

function isLang(value: unknown): value is Lang {
  return value === 'UZ' || value === 'RU' || value === 'EN'
}

function sanitizeMessages(raw: unknown): ChatMessage[] | null {
  if (!Array.isArray(raw) || raw.length === 0 || raw.length > MAX_MESSAGES) return null
  const result: ChatMessage[] = []
  for (const item of raw) {
    if (!item || typeof item !== 'object') return null
    const role = (item as Record<string, unknown>).role
    const content = (item as Record<string, unknown>).content
    if (role !== 'user' && role !== 'assistant') return null
    if (typeof content !== 'string' || !content.trim()) return null
    result.push({ role, content: content.slice(0, MAX_MESSAGE_LENGTH) })
  }
  if (result[result.length - 1].role !== 'user') return null
  return result
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const body = req.body as Record<string, unknown>
  const lang: Lang = isLang(body?.lang) ? body.lang : 'UZ'
  const messages = sanitizeMessages(body?.messages)
  if (!messages) {
    return res.status(400).json({ error: 'Invalid messages' })
  }

  const anthropic = getAnthropic()
  if (!anthropic) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY Vercel sozlamalarida o\'rnatilmagan' })
  }

  try {
    const response = await anthropic.messages.create({
      model: 'claude-opus-5',
      max_tokens: 1024,
      output_config: { effort: 'low' },
      system: SYSTEM_PROMPTS[lang],
      messages,
    })

    const reply = response.content
      .filter((block): block is Anthropic.TextBlock => block.type === 'text')
      .map((block) => block.text)
      .join('\n')
      .trim()

    return res.status(200).json({ reply: reply || '...' })
  } catch (err) {
    if (err instanceof Anthropic.AuthenticationError) {
      return res.status(500).json({ error: 'ANTHROPIC_API_KEY noto\'g\'ri' })
    }
    if (err instanceof Anthropic.RateLimitError) {
      return res.status(429).json({ error: 'Hozir band, birozdan so\'ng qayta urinib ko\'ring' })
    }
    return res.status(500).json({ error: 'Server xatosi', detail: err instanceof Error ? err.message : String(err) })
  }
}
