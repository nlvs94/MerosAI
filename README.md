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

## Rasmlarni qayerga qo'yish

Quyidagi fayllarni `public/images/` papkasiga joylashtiring:

- `robot.png` — hero bo'limidagi AI robot tasviri
- `registan-bg.jpg` — hero bo'limining fon rasmi (Registon)
- `servers.png` — "Local xizmatlar" kartasidagi tasvir
- `cloud.png` — "Online xizmatlar" kartasidagi tasvir

Agar rasm topilmasa, sahifa xato bermaydi — o'rniga avtomatik ravishda
ko'k-binafsha gradientli `PlaceholderImage` komponenti ko'rsatiladi.

## Papka tuzilishi

```
src/
  components/   Navbar, Hero, ServiceCards, FeatureCards, StatsBar, Logo,
                ChartPanel, SpeechBubble, PlaceholderImage, ImageWithFallback
  data/         content.ts — barcha matnlar, menyu bandlari, kartalar
  App.tsx, main.tsx, index.css
public/images/  robot.png, registan-bg.jpg, servers.png, cloud.png
design/         reference.png — asl dizayn namunasi
```
