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

`public/images/` papkasida quyidagi rasmlar bor:

- `registan-bg.jpg` — hero bo'limining to'liq orqa foni (robot + Registon).
  ≥768px ekranlarda butun hero bo'limi uchun bitta uzluksiz fon sifatida
  ishlatiladi (rasmning chap tomoni tabiiy ravishda to'q rangga o'tadi va
  saytning fon rangi bilan mos keladi); <768px'da esa alohida dumaloq
  burchakli karta ichida ko'rsatiladi.
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

## Buyurtma formasi va Admin panel

Sahifa pastida (`#contact`) haqiqiy buyurtma formasi bor: Ism, Familiya,
Telefon, Telegram, Izoh. Forma to'ldirilib yuborilganda, ma'lumot **Redis**
bazasiga saqlanadi (Vercel Storage orqali ulanadi). Shuningdek, "Boshlash",
"Video ko'rish", "Kirish" va "Batafsil" tugmalari bosilganda ham (ismsiz)
statistika sifatida saqlanadi — kim nima bilan qiziqqanini ko'rish uchun.

Barcha buyurtma va statistikani ko'rish uchun: **`/admin.html`** sahifasiga
kiring (masalan `https://sizning-saytingiz.vercel.app/admin.html`) va parolni
kiriting.

### Vercel'da bir martalik sozlash (MAJBURIY)

Forma va admin panel ishlashi uchun Vercel loyihangizda 2 narsa sozlanishi
kerak:

1. **Redis bazasi ulash:**
   Vercel loyiha sahifasida → **Storage** bo'limi → **Create Database** →
   **Redis** (bepul tarif yetarli) → yarating va loyihaga **Connect**
   qiling. Bu avtomatik ravishda `REDIS_URL` environment o'zgaruvchisini
   qo'shib qo'yadi — kod shu nom bilan ulanadi.

2. **Admin parolini o'rnatish:**
   Vercel loyiha sahifasida → **Settings → Environment Variables** →
   yangi o'zgaruvchi qo'shing:
   - **Name:** `ADMIN_PASSWORD`
   - **Value:** (o'zingiz xohlagan kuchli parol)

Ikkalasini sozlab, loyihani **qayta deploy qiling** (Redeploy). Shundan
keyin forma va `/admin.html` to'liq ishlaydi. Sozlanmagan bo'lsa, forma
aniq xato xabarini ko'rsatadi (masalan "Ma'lumotlar bazasi ulanmagan").

## Papka tuzilishi

```
src/
  components/   Navbar, Hero, ServiceCards, FeatureCards, StatsBar, Logo,
                SpeechBubble, PlaceholderImage, ImageWithFallback,
                Modal, Flags (UZ/RU/GB bayroqlari), ContactSection
  i18n/         translations.ts (UZ/RU/EN matnlari), LanguageContext.tsx
  lib/          track.ts — tugma bosilishlarini kuzatish
  App.tsx, main.tsx, index.css
  AdminApp.tsx, admin-main.tsx — /admin.html uchun alohida ilova
api/
  submit.ts       — forma va statistika yuborish (POST, public)
  admin-data.ts   — admin panel uchun ma'lumot olish (GET, parol bilan himoyalangan)
admin.html        — admin panelning HTML kirish nuqtasi
public/images/    registan-bg.jpg, servers.png, cloud.png, flag-uz.webp
public/videos/    intro.mp4 (ixtiyoriy — "Video ko'rish" tugmasi uchun)
design/           reference.png — asl dizayn namunasi
```
