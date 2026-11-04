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

## Papka tuzilishi

```
src/
  components/   Navbar, Hero, ServiceCards, FeatureCards, StatsBar, Logo,
                ChartPanel, SpeechBubble, PlaceholderImage, ImageWithFallback
  data/         content.ts — barcha matnlar, menyu bandlari, kartalar
  App.tsx, main.tsx, index.css
public/images/  registan-bg.jpg, servers.png, cloud.png
design/         reference.png — asl dizayn namunasi
```
