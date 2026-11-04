# Meros AI — landing sahifa

"Meros AI" uchun `design/reference.png` dizayni asosida yasalgan landing
sahifa. React 18 + Vite + TypeScript + Tailwind CSS yordamida qurilgan.

## Texnologiyalar

- React 18, TypeScript, Vite
- Tailwind CSS (ranglar, shriftlar va effektlar `tailwind.config.js`'da
  token sifatida saqlangan)
- [lucide-react](https://lucide.dev/) — ikonkalar
- Shriftlar: **Manrope** (matn va sarlavhalar), **Dancing Script**
  (qo'lyozma yozuv) — Google Fonts orqali ulangan

## O'rnatish

```bash
npm install
```

## Ishga tushirish (development)

```bash
npm run dev
```

Brauzerda `http://localhost:5173` manzilini oching.

## Build (production)

```bash
npm run build
```

Natija `dist/` papkasida hosil bo'ladi. Oldindan ko'rish uchun:

```bash
npm run preview
```

## Rasmlar

`public/images/` papkasida quyidagi rasmlar bor — ular `design/reference.png`
dan to'g'ridan-to'g'ri kesib olingan (baked matnli HUD elementlar xiralashtirib
tozalangan, "Meros AI" nutq pufakchasi esa kodda alohida chizilgan):

- `registan-bg.jpg` — hero bo'limidagi robot + Registon fon tasviri
- `servers.png` — "Local xizmatlar" kartasidagi tasvir
- `cloud.png` — "Online xizmatlar" kartasidagi tasvir

Boshqa rasm bilan almashtirmoqchi bo'lsangiz, shu fayl nomlarini saqlab,
`public/images/` ichidagi faylni almashtiring. Agar rasm topilmasa, sahifa
xato bermaydi — o'rniga avtomatik ravishda ko'k-binafsha gradientli
`PlaceholderImage` komponenti ko'rsatiladi.

## Tillar (UZ / RU / EN)

Navbar'dagi til tanlagich orqali sayt matnlari to'liq o'zbek, rus va ingliz
tillariga almashadi (haqiqiy davlat bayroqlari bilan: 🇺🇿 / 🇷🇺 / 🇬🇧).
Tanlangan til brauzerning `localStorage`'ida saqlanadi. Barcha tarjimalar
`src/i18n/translations.ts` faylida — yangi til qo'shish yoki matnlarni
tahrirlash uchun shu faylga murojaat qiling.

## "Kirish" va "Video ko'rish" tugmalari

Ikkalasi ham ishlaydigan modal oyna ochadi:

- **Video ko'rish** — `public/videos/intro.mp4` faylini qidiradi va
  ko'rsatadi; fayl topilmasa, "video hali qo'shilmagan" degan xabar chiqadi.
- **Kirish** — hozircha "tez orada" xabarini ko'rsatadi (autentifikatsiya
  tizimi ulanmagan).

## Keyingi bosqich: jonli AI xizmatlar (Gemini)

Hozirgi versiyada Gemini API integratsiyasi **ataylab kiritilmagan** — API
kalitini brauzer kodiga to'g'ridan-to'g'ri yozish xavfsiz emas (har kim
sahifa manbasidan uni ko'rib, suiiste'mol qilishi mumkin). Jonli AI chat,
ovozli yordamchi yoki video imkoniyatlarini qo'shish uchun avval kichik
backend/serverless proksi qo'shilishi kerak — bu alohida bosqich sifatida
rejalashtirilgan.

## Papka tuzilishi

```
src/
  components/   Navbar, Hero, ServiceCards, FeatureCards, StatsBar, Logo,
                ChartPanel, SpeechBubble, PlaceholderImage, ImageWithFallback,
                Modal, Flags (UZ/RU/GB bayroqlari)
  i18n/         translations.ts (UZ/RU/EN matnlari), LanguageContext.tsx
  App.tsx, main.tsx, index.css
public/images/  registan-bg.jpg, servers.png, cloud.png
public/videos/  intro.mp4 (ixtiyoriy — "Video ko'rish" tugmasi uchun)
design/         reference.png — asl dizayn namunasi
```
