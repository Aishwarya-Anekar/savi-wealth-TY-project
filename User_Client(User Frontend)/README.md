# SaviWealth - Professional Financial Services Platform

A comprehensive, professional financial services website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🏗️ Project Structure

```
saviwealth/
├── public/
│   ├── images/
│   │   ├── team/                 # Team member profile images
│   │   │   ├── sonali-wagh.jpg
│   │   │   ├── vikas-wagh.jpg
│   │   │   ├── shriram-ramanathan.jpg
│   │   │   ├── venugopal-manghat.jpg
│   │   │   ├── vikas-garg.jpg
│   │   │   └── taher-badshah.jpg
│   │   ├── articles/             # Blog article images
│   │   │   ├── market-outlook-2024.jpg
│   │   │   ├── tax-saving-investments.jpg
│   │   │   ├── sip-vs-lump-sum.jpg
│   │   │   ├── mutual-fund-categories.jpg
│   │   │   ├── reits-in-india.jpg
│   │   │   └── portfolio-rebalancing.jpg
│   │   ├── services/             # Service page images
│   │   │   ├── portfolio-analytics.jpg
│   │   │   ├── transaction-advisory.jpg
│   │   │   └── tax-planning.jpg
│   │   └── hero/                 # Hero section images
│   │       └── financial-planning.jpg
│   ├── vite.svg
│   └── index.html
├── src/
│   ├── components/               # Reusable UI components
│   ├── pages/                    # Page components
│   ├── contexts/                 # React contexts
│   ├── hooks/                    # Custom hooks
│   └── main.tsx
├── package.json
├── tailwind.config.js
└── README.md
```

## 🖼️ Image Organization

All images are now organized in the `public/images/` directory with the following structure:

- **Team Images** (`/images/team/`): Profile photos for all team members and fund managers
- **Article Images** (`/images/articles/`): Hero images for blog articles and insights
- **Service Images** (`/images/services/`): Images for service detail pages
- **Hero Images** (`/images/hero/`): Images for hero sections and banners

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## 📝 Image Management

To add new images:

1. Place images in the appropriate subfolder within `public/images/`
2. Update the corresponding data arrays in the relevant page components
3. Use the path format: `/images/category/filename.jpg`

## 🎨 Features

- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Mode**: Professional themes with proper contrast
- **Interactive Carousels**: Smooth animations with Swiper.js
- **Detail Pages**: Individual pages for services, articles, and team members
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessibility**: WCAG AA compliant design
- **Performance**: Optimized images and lazy loading

## 🛠️ Technologies
Technical Feasibility:

- Backend: Node.js + Express + MySQL for secure data storage.
- Frontend: React + TypeScript (mobile-responsive).
- AI Layer: OpenAI APIs for natural language processing.
- Reporting: Recharts + PDF generator for insights.
- Automation: Nodemailer for promotional mails + Google Sheets sync for admin visibility.
- React 18 with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- Swiper.js for carousels
- React Router for navigation
- Vite for build tooling

## 📱 Pages
- **Chatbot Integration**: AI-powered assistant using OpenAI APIs for real-time user interaction
- **Email Automation**: Promotional mail system using Nodemailer for campaign delivery and updates
- **Home**: Hero, services overview, team, articles
- **About**: Company story, team profiles, certifications
- **Services**: Detailed service offerings with individual pages
- **Articles**: Blog posts with individual article pages
- **Fund Managers**: Team profiles with detailed interviews
- **Contact**: Contact form and company information

All images are now properly organized and referenced from the local project directory.
