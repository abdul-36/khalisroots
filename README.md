# Khalis Roots - Coming Soon Page (Next.js)

A beautiful, modern "Coming Soon" landing page for www.khalisroots.com built with Next.js, React, and TypeScript.

## ✨ Features

- 🚀 Built with Next.js 15 and React 19
- 💎 Premium animated gradient background
- 🎨 Glassmorphism design effects
- ⏱️ Real-time countdown timer
- 📧 Email subscription form with validation
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎭 Smooth animations and transitions
- 🔗 Social media links
- 🖼️ Logo placeholder (easily replaceable)
- ⚡ Static export ready for easy deployment
- 🔍 SEO optimized with proper metadata

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
```

This creates a static export in the `out` folder ready for deployment.

## 📝 Customization

### Add Your Logo

1. Place your logo file in the `public` folder as `logo.png` (or `.svg`, `.jpg`)
2. The page will automatically display your logo
3. Until then, it shows a stylish placeholder with "KHALIS ROOTS"

### Set Launch Date

Edit `components/Countdown.tsx` (line 15):

```typescript
const launchDate = new Date('February 1, 2026 00:00:00').getTime()
```

### Update Social Media Links

Edit `components/SocialLinks.tsx` and update the `url` values:

```typescript
const socialLinks = [
  { name: 'Facebook', url: 'https://facebook.com/yourpage', ... },
  { name: 'Twitter', url: 'https://twitter.com/yourhandle', ... },
  // ...
]
```

### Change Colors

Edit CSS variables in `app/globals.css` (lines 7-13):

```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  /* ... */
}
```

### Email Subscription Backend

To collect emails, add your API endpoint in `components/EmailForm.tsx` (line 24):

```typescript
await fetch('/api/subscribe', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email })
})
```

## 📁 Project Structure

```
khalisRoots/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── ComingSoon.tsx      # Main component
│   ├── Countdown.tsx       # Countdown timer
│   ├── EmailForm.tsx       # Email subscription form
│   └── SocialLinks.tsx     # Social media links
├── public/
│   └── logo.png            # Your logo (add this)
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies
└── tsconfig.json           # TypeScript configuration
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Deploy to Any Static Host

1. Build: `npm run build`
2. Upload the `out` folder to your hosting (cPanel, AWS S3, etc.)

## 🛠️ Technologies

- **Next.js 15** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **CSS3** - Styling with animations

## 📄 License

This is a custom landing page for Khalis Roots. All rights reserved.
