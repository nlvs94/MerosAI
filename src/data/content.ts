export type NavDropdownItem = {
  label: string
}

export type NavItem = {
  label: string
  href: string
  active?: boolean
  icon?: 'home'
  dropdown?: NavDropdownItem[]
}

export const navItems: NavItem[] = [
  { label: 'Bosh sahifa', href: '#home', active: true, icon: 'home' },
  {
    label: 'Xizmatlar',
    href: '#xizmatlar',
    dropdown: [
      { label: 'AI Xizmatlar' },
      { label: 'Local Xizmatlar' },
      { label: 'Online Xizmatlar' },
    ],
  },
  {
    label: 'AI Agentlar',
    href: '#agentlar',
    dropdown: [
      { label: 'Chatbot agentlar' },
      { label: 'Avtomatlashtirish agentlari' },
      { label: 'Tahliliy agentlar' },
    ],
  },
  {
    label: 'Mahsulotlar',
    href: '#mahsulotlar',
    dropdown: [
      { label: 'Meros Chat' },
      { label: 'Meros Vision' },
      { label: 'Meros Cloud' },
    ],
  },
  { label: 'Biz haqimizda', href: '#about' },
  { label: 'Yangiliklar', href: '#news' },
  { label: 'Bog‘lanish', href: '#contact' },
]

export const languages = ['UZ', 'RU', 'EN']

export const hero = {
  badge: 'O‘zbekistonda sun\'iy intellektning yangi bosqichi 🚀',
  titleLines: [
    { text: 'Meros AI —', highlight: false },
    { text: 'biznesingiz uchun', highlight: false },
    { text: 'aqlli imkoniyatlar!', highlight: true, highlightWord: 'aqlli' },
  ],
  description:
    'Biz AI xizmatlari, AI agentlar va zamonaviy texnologiyalar yordamida biznesingizni avtomatlashtiramiz, samaradorlikni oshiramiz va kelajak sari birga qadam qo‘yamiz.',
  primaryCta: 'Boshlash',
  secondaryCta: 'Video ko‘rish',
}

export const speechBubble = {
  greeting: 'Salom!',
  lineOne: 'Men — Meros AI.',
  lineTwo: 'Sizga qanday yordam bera olaman?',
}

export type ServiceCard = {
  icon: 'cpu' | 'bot' | 'monitor' | 'cloud' | 'trending'
  title: string
  description: string
}

export const serviceCards: ServiceCard[] = [
  {
    icon: 'cpu',
    title: 'AI Xizmatlar',
    description: 'Matn, rasm, ovoz va boshqa AI imkoniyatlari',
  },
  {
    icon: 'bot',
    title: 'AI Agentlar',
    description: 'Biznes jarayonlaringiz uchun aqlli agentlar',
  },
  {
    icon: 'monitor',
    title: 'Local Xizmatlar',
    description: 'Shaxsiy serverlarda ishlovchi yechimlar',
  },
  {
    icon: 'cloud',
    title: 'Online Xizmatlar',
    description: 'Bulutli AI xizmatlari va platformalar',
  },
  {
    icon: 'trending',
    title: 'Biznes uchun',
    description: 'Samaradorlik va o‘sish kafolati',
  },
]

export type FeatureCard = {
  dotColor: 'green' | 'violet'
  title: string
  subtitle: string
  bullets: string[]
  image: string
  imageAlt: string
  ctaColor: 'blue' | 'violet'
}

export const featureCards: FeatureCard[] = [
  {
    dotColor: 'green',
    title: 'Local xizmatlar',
    subtitle: 'Sizning infratuzilmangizda, to‘liq nazorat bilan',
    bullets: [
      'O‘z serveringizda AI modellari',
      'Offline rejimda ishlash',
      "Maxfiy ma'lumotlar himoyasi",
    ],
    image: '/images/servers.png',
    imageAlt: 'Server infratuzilmasi',
    ctaColor: 'blue',
  },
  {
    dotColor: 'violet',
    title: 'Online xizmatlar',
    subtitle: 'Bulutda, istalgan joydan foydalanish',
    bullets: [
      'AI agentlar va chatbotlar',
      'Onlayn tarjima va tahlil',
      'Web-servislar va API',
    ],
    image: '/images/cloud.png',
    imageAlt: 'Bulutli xizmatlar',
    ctaColor: 'violet',
  },
]

export type StatItem = {
  icon: 'users' | 'rocket' | 'zap' | 'shield'
  value: string
  label: string
}

export const stats: StatItem[] = [
  { icon: 'users', value: '1000+', label: 'Foydalanuvchilar' },
  { icon: 'rocket', value: '99.9%', label: 'Uptime' },
  { icon: 'zap', value: '< 1s', label: 'Javob vaqti' },
  { icon: 'shield', value: '100%', label: 'Xavfsizlik' },
]

export const statsTagline = 'Meros AI – Kelajak texnologiyalari endilikda siz bilan!'
