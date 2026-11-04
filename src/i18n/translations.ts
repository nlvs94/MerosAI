export type Lang = 'UZ' | 'RU' | 'EN'

export type NavDropdownItem = { label: string }

export type NavItem = {
  label: string
  href: string
  active?: boolean
  icon?: 'home'
  dropdown?: NavDropdownItem[]
}

export type ServiceCard = {
  icon: 'cpu' | 'bot' | 'monitor' | 'cloud' | 'trending' | 'phone'
  title: string
  description: string
}

export type FeatureCard = {
  dotColor: 'green' | 'violet'
  title: string
  subtitle: string
  bullets: string[]
  image: string
  imageAlt: string
  ctaColor: 'blue' | 'violet'
  cta: string
}

export type StatItem = {
  icon: 'users' | 'rocket' | 'zap' | 'shield'
  value: string
  label: string
}

export type Translation = {
  meta: { title: string; description: string }
  brand: { tagline: string }
  nav: { items: NavItem[]; kirish: string }
  hero: {
    badge: string
    titleLines: { text: string; highlight: boolean; highlightWord?: string }[]
    description: string
    primaryCta: string
    secondaryCta: string
  }
  speechBubble: { greeting: string; lineOne: string; lineTwo: string }
  serviceCards: ServiceCard[]
  featureCards: FeatureCard[]
  stats: StatItem[]
  statsTagline: string
  modals: {
    kirish: { title: string; body: string; close: string }
    video: { title: string; missing: string; close: string }
  }
  contact: {
    title: string
    subtitle: string
    firstName: string
    lastName: string
    phone: string
    telegram: string
    note: string
    notePlaceholder: string
    submit: string
    sending: string
    success: string
    error: string
    requiredError: string
  }
  footer: string
}

export const languages: Lang[] = ['UZ', 'RU', 'EN']

const uz: Translation = {
  meta: {
    title: 'Meros AI — Intellekt. Biznes. Rivojlanish.',
    description:
      "Meros AI — sun'iy intellekt xizmatlari, AI agentlar va zamonaviy texnologiyalar yordamida biznesingizni rivojlantiring.",
  },
  brand: { tagline: 'Intellekt. Biznes. Rivojlanish.' },
  nav: {
    kirish: 'Kirish',
    items: [
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
        href: '#xizmatlar',
        dropdown: [
          { label: 'Chatbot agentlar' },
          { label: 'Avtomatlashtirish agentlari' },
          { label: 'Tahliliy agentlar' },
        ],
      },
      {
        label: 'Mahsulotlar',
        href: '#xizmatlar',
        dropdown: [
          { label: 'Meros Chat' },
          { label: 'Meros Vision' },
          { label: 'Meros Cloud' },
        ],
      },
      { label: 'Biz haqimizda', href: '#contact' },
      { label: 'Yangiliklar', href: '#contact' },
      { label: 'Bog‘lanish', href: '#contact' },
    ],
  },
  hero: {
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
  },
  speechBubble: {
    greeting: 'Salom!',
    lineOne: 'Men — Meros AI.',
    lineTwo: 'Sizga qanday yordam bera olaman?',
  },
  serviceCards: [
    { icon: 'cpu', title: 'AI Xizmatlar', description: 'Matn, rasm, ovoz va boshqa AI imkoniyatlari' },
    { icon: 'bot', title: 'AI Agentlar', description: 'Biznes jarayonlaringiz uchun aqlli agentlar' },
    { icon: 'monitor', title: 'Local Xizmatlar', description: 'Shaxsiy serverlarda ishlovchi yechimlar' },
    { icon: 'cloud', title: 'Online Xizmatlar', description: 'Bulutli AI xizmatlari va platformalar' },
    { icon: 'trending', title: 'Biznes uchun', description: 'Samaradorlik va o‘sish kafolati' },
    { icon: 'phone', title: 'AI Call-markaz', description: 'Avtomatik ovozli qo‘ng‘iroqlar va mijozlarga xizmat' },
  ],
  featureCards: [
    {
      dotColor: 'green',
      title: 'Local xizmatlar',
      subtitle: 'Sizning infratuzilmangizda, to‘liq nazorat bilan',
      bullets: ['O‘z serveringizda AI modellari', 'Offline rejimda ishlash', "Maxfiy ma'lumotlar himoyasi"],
      image: '/images/servers.png',
      imageAlt: 'Server infratuzilmasi',
      ctaColor: 'blue',
      cta: 'Batafsil',
    },
    {
      dotColor: 'violet',
      title: 'Online xizmatlar',
      subtitle: 'Bulutda, istalgan joydan foydalanish',
      bullets: ['AI agentlar va chatbotlar', 'Onlayn tarjima va tahlil', 'Web-servislar va API'],
      image: '/images/cloud.png',
      imageAlt: 'Bulutli xizmatlar',
      ctaColor: 'violet',
      cta: 'Batafsil',
    },
  ],
  stats: [
    { icon: 'users', value: '1000+', label: 'Foydalanuvchilar' },
    { icon: 'rocket', value: '99.9%', label: 'Uptime' },
    { icon: 'zap', value: '< 1s', label: 'Javob vaqti' },
    { icon: 'shield', value: '100%', label: 'Xavfsizlik' },
  ],
  statsTagline: 'Meros AI – Kelajak texnologiyalari endilikda siz bilan!',
  modals: {
    kirish: {
      title: 'Kirish',
      body: 'Bu funksiya tez orada qo‘shiladi. Hozircha Meros AI xizmatlari bilan tanishib chiqishingiz mumkin.',
      close: 'Yopish',
    },
    video: {
      title: 'Video ko‘rish',
      missing: 'Video hali qo‘shilmagan. Uni public/videos/intro.mp4 sifatida joylashtiring.',
      close: 'Yopish',
    },
  },
  contact: {
    title: 'Buyurtma qoldiring',
    subtitle:
      'Ismingiz va telefon raqamingizni qoldiring — mutaxassislarimiz tez orada siz bilan bog‘lanadi.',
    firstName: 'Ismingiz',
    lastName: 'Familiyangiz',
    phone: 'Telefon raqamingiz',
    telegram: 'Telegram foydalanuvchi nomi',
    note: 'Izoh',
    notePlaceholder: 'Qaysi xizmat qiziqtiradi? (ixtiyoriy)',
    submit: 'Yuborish',
    sending: 'Yuborilmoqda...',
    success: 'Rahmat! So‘rovingiz qabul qilindi, tez orada siz bilan bog‘lanamiz.',
    error: 'Xatolik yuz berdi. Birozdan so‘ng qayta urinib ko‘ring.',
    requiredError: 'Ism va telefon raqamini kiriting.',
  },
  footer: 'Meros AI. Barcha huquqlar himoyalangan.',
}

const ru: Translation = {
  meta: {
    title: 'Meros AI — Интеллект. Бизнес. Развитие.',
    description:
      'Meros AI — развивайте свой бизнес с помощью услуг искусственного интеллекта, ИИ-агентов и современных технологий.',
  },
  brand: { tagline: 'Интеллект. Бизнес. Развитие.' },
  nav: {
    kirish: 'Войти',
    items: [
      { label: 'Главная', href: '#home', active: true, icon: 'home' },
      {
        label: 'Услуги',
        href: '#xizmatlar',
        dropdown: [
          { label: 'ИИ-услуги' },
          { label: 'Локальные услуги' },
          { label: 'Онлайн-услуги' },
        ],
      },
      {
        label: 'ИИ-агенты',
        href: '#xizmatlar',
        dropdown: [
          { label: 'Чат-боты' },
          { label: 'Агенты автоматизации' },
          { label: 'Аналитические агенты' },
        ],
      },
      {
        label: 'Продукты',
        href: '#xizmatlar',
        dropdown: [
          { label: 'Meros Chat' },
          { label: 'Meros Vision' },
          { label: 'Meros Cloud' },
        ],
      },
      { label: 'О нас', href: '#contact' },
      { label: 'Новости', href: '#contact' },
      { label: 'Контакты', href: '#contact' },
    ],
  },
  hero: {
    badge: 'Новый этап искусственного интеллекта в Узбекистане 🚀',
    titleLines: [
      { text: 'Meros AI —', highlight: false },
      { text: 'для вашего бизнеса', highlight: false },
      { text: 'умные возможности!', highlight: true, highlightWord: 'умные' },
    ],
    description:
      'С помощью ИИ-услуг, ИИ-агентов и современных технологий мы автоматизируем ваш бизнес, повышаем эффективность и вместе шагаем в будущее.',
    primaryCta: 'Начать',
    secondaryCta: 'Смотреть видео',
  },
  speechBubble: {
    greeting: 'Привет!',
    lineOne: 'Я — Meros AI.',
    lineTwo: 'Чем могу вам помочь?',
  },
  serviceCards: [
    { icon: 'cpu', title: 'ИИ-услуги', description: 'Текст, изображения, голос и другие возможности ИИ' },
    { icon: 'bot', title: 'ИИ-агенты', description: 'Умные агенты для ваших бизнес-процессов' },
    { icon: 'monitor', title: 'Локальные услуги', description: 'Решения, работающие на собственных серверах' },
    { icon: 'cloud', title: 'Онлайн-услуги', description: 'Облачные ИИ-сервисы и платформы' },
    { icon: 'trending', title: 'Для бизнеса', description: 'Гарантия эффективности и роста' },
    { icon: 'phone', title: 'ИИ Колл-центр', description: 'Автоматические голосовые звонки и поддержка клиентов' },
  ],
  featureCards: [
    {
      dotColor: 'green',
      title: 'Локальные услуги',
      subtitle: 'В вашей инфраструктуре, под полным контролем',
      bullets: ['ИИ-модели на вашем сервере', 'Работа в офлайн-режиме', 'Защита конфиденциальных данных'],
      image: '/images/servers.png',
      imageAlt: 'Серверная инфраструктура',
      ctaColor: 'blue',
      cta: 'Подробнее',
    },
    {
      dotColor: 'violet',
      title: 'Онлайн-услуги',
      subtitle: 'В облаке, доступ из любой точки',
      bullets: ['ИИ-агенты и чат-боты', 'Онлайн-перевод и анализ', 'Веб-сервисы и API'],
      image: '/images/cloud.png',
      imageAlt: 'Облачные сервисы',
      ctaColor: 'violet',
      cta: 'Подробнее',
    },
  ],
  stats: [
    { icon: 'users', value: '1000+', label: 'Пользователи' },
    { icon: 'rocket', value: '99.9%', label: 'Аптайм' },
    { icon: 'zap', value: '< 1с', label: 'Время ответа' },
    { icon: 'shield', value: '100%', label: 'Безопасность' },
  ],
  statsTagline: 'Meros AI – технологии будущего теперь с вами!',
  modals: {
    kirish: {
      title: 'Вход',
      body: 'Эта функция скоро появится. А пока вы можете ознакомиться с услугами Meros AI.',
      close: 'Закрыть',
    },
    video: {
      title: 'Смотреть видео',
      missing: 'Видео пока не добавлено. Поместите его как public/videos/intro.mp4.',
      close: 'Закрыть',
    },
  },
  contact: {
    title: 'Оставьте заявку',
    subtitle:
      'Оставьте имя и номер телефона — наши специалисты свяжутся с вами в ближайшее время.',
    firstName: 'Ваше имя',
    lastName: 'Ваша фамилия',
    phone: 'Номер телефона',
    telegram: 'Telegram-username',
    note: 'Комментарий',
    notePlaceholder: 'Какая услуга вас интересует? (необязательно)',
    submit: 'Отправить',
    sending: 'Отправка...',
    success: 'Спасибо! Ваша заявка принята, мы скоро свяжемся с вами.',
    error: 'Произошла ошибка. Попробуйте ещё раз чуть позже.',
    requiredError: 'Укажите имя и номер телефона.',
  },
  footer: 'Meros AI. Все права защищены.',
}

const en: Translation = {
  meta: {
    title: 'Meros AI — Intelligence. Business. Growth.',
    description:
      'Meros AI — grow your business with AI services, AI agents, and modern technology.',
  },
  brand: { tagline: 'Intelligence. Business. Growth.' },
  nav: {
    kirish: 'Sign In',
    items: [
      { label: 'Home', href: '#home', active: true, icon: 'home' },
      {
        label: 'Services',
        href: '#xizmatlar',
        dropdown: [
          { label: 'AI Services' },
          { label: 'Local Services' },
          { label: 'Online Services' },
        ],
      },
      {
        label: 'AI Agents',
        href: '#xizmatlar',
        dropdown: [
          { label: 'Chatbot Agents' },
          { label: 'Automation Agents' },
          { label: 'Analytical Agents' },
        ],
      },
      {
        label: 'Products',
        href: '#xizmatlar',
        dropdown: [
          { label: 'Meros Chat' },
          { label: 'Meros Vision' },
          { label: 'Meros Cloud' },
        ],
      },
      { label: 'About Us', href: '#contact' },
      { label: 'News', href: '#contact' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  hero: {
    badge: 'A new stage of artificial intelligence in Uzbekistan 🚀',
    titleLines: [
      { text: 'Meros AI —', highlight: false },
      { text: 'for your business', highlight: false },
      { text: 'smart opportunities!', highlight: true, highlightWord: 'smart' },
    ],
    description:
      'Using AI services, AI agents, and modern technology, we automate your business, boost efficiency, and step into the future together.',
    primaryCta: 'Get Started',
    secondaryCta: 'Watch Video',
  },
  speechBubble: {
    greeting: 'Hello!',
    lineOne: "I'm Meros AI.",
    lineTwo: 'How can I help you?',
  },
  serviceCards: [
    { icon: 'cpu', title: 'AI Services', description: 'Text, image, voice and other AI capabilities' },
    { icon: 'bot', title: 'AI Agents', description: 'Smart agents for your business processes' },
    { icon: 'monitor', title: 'Local Services', description: 'Solutions running on your own servers' },
    { icon: 'cloud', title: 'Online Services', description: 'Cloud AI services and platforms' },
    { icon: 'trending', title: 'For Business', description: 'Guaranteed efficiency and growth' },
    { icon: 'phone', title: 'AI Call Center', description: 'Automated voice calls and customer support' },
  ],
  featureCards: [
    {
      dotColor: 'green',
      title: 'Local Services',
      subtitle: 'In your infrastructure, with full control',
      bullets: ['AI models on your own server', 'Offline mode', 'Protection of confidential data'],
      image: '/images/servers.png',
      imageAlt: 'Server infrastructure',
      ctaColor: 'blue',
      cta: 'Learn more',
    },
    {
      dotColor: 'violet',
      title: 'Online Services',
      subtitle: 'In the cloud, accessible from anywhere',
      bullets: ['AI agents and chatbots', 'Online translation and analysis', 'Web services and API'],
      image: '/images/cloud.png',
      imageAlt: 'Cloud services',
      ctaColor: 'violet',
      cta: 'Learn more',
    },
  ],
  stats: [
    { icon: 'users', value: '1000+', label: 'Users' },
    { icon: 'rocket', value: '99.9%', label: 'Uptime' },
    { icon: 'zap', value: '< 1s', label: 'Response time' },
    { icon: 'shield', value: '100%', label: 'Security' },
  ],
  statsTagline: 'Meros AI – the technology of the future is with you now!',
  modals: {
    kirish: {
      title: 'Sign In',
      body: 'This feature is coming soon. In the meantime, feel free to explore Meros AI services.',
      close: 'Close',
    },
    video: {
      title: 'Watch Video',
      missing: "Video hasn't been added yet. Place it at public/videos/intro.mp4.",
      close: 'Close',
    },
  },
  contact: {
    title: 'Leave a request',
    subtitle: 'Leave your name and phone number — our team will contact you shortly.',
    firstName: 'First name',
    lastName: 'Last name',
    phone: 'Phone number',
    telegram: 'Telegram username',
    note: 'Note',
    notePlaceholder: 'Which service interests you? (optional)',
    submit: 'Send',
    sending: 'Sending...',
    success: "Thank you! Your request has been received — we'll contact you soon.",
    error: 'Something went wrong. Please try again shortly.',
    requiredError: 'Please enter your name and phone number.',
  },
  footer: 'Meros AI. All rights reserved.',
}

export const translations: Record<Lang, Translation> = { UZ: uz, RU: ru, EN: en }
