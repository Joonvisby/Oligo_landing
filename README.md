# OLIGO Coming Soon Page

A beautiful, modern coming soon page for OLIGO - Prebiotic Sweetener.

## Features

- **Modern Design**: Clean, professional layout with Korean kitchen-inspired aesthetics
- **Email Capture**: Integrated Formspree form for collecting email subscriptions
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Subtle rotating grain overlay and smooth transitions
- **Social Links**: Instagram, Twitter/X, TikTok, and contact email
- **SEO Optimized**: Proper meta tags and semantic HTML

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Configuration

### 1. Background Image
- Add your high-resolution background image to `/public/background.jpg`
- Recommended: High-quality farm/plant/kitchen image (1920x1080 or higher)
- The image should have good contrast areas for text overlay

### 2. Formspree Setup
- Sign up at [formspree.io](https://formspree.io)
- Create a new form
- Replace `YOUR_FORMSPREE_FORM_ID` in `app/page.tsx` with your actual form ID

### 3. Social Media Links
Update the social media links in `app/page.tsx`:
- Instagram: Replace `#` with your Instagram URL
- Twitter/X: Replace `#` with your Twitter URL  
- TikTok: Replace `#` with your TikTok URL
- Email: Update `info@adaptive.kitchen` with your contact email

### 4. Contact Email
01
Update the contact email in the Contact button to your preferred email address.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
- **Netlify**: Drag and drop the `out` folder after running `npm run build`
- **Render**: Connect your GitHub repository
- **AWS/Google Cloud**: Use their static hosting services

## Customization

### Colors
The design uses a black background with white text and transparent overlays. To customize:
- Edit the Tailwind classes in `app/page.tsx`
- Modify the gradient overlays and background opacity

### Typography
- The design uses Inter font (loaded in `app/layout.tsx`)
- Font sizes are responsive: `text-5xl md:text-6xl` for mobile/desktop

### Layout
- Maximum content width: `max-w-5xl`
- Responsive gaps and padding
- Centered layout with vertical alignment

## Browser Support

- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Edge (latest)

## License

© 2024 OLIGO. All rights reserved.

