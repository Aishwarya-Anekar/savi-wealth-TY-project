# Savi Wealth Admin Panel - Quick Start Guide

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation & Setup

1. **Navigate to project directory**
   ```bash
   cd M:\Admin_Savi_Wealth
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

   The application will automatically open at `http://localhost:5173/`

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Type check without building
npm run type-check
```

## 📋 Features Overview

### Dashboard
- **KPI Cards**: Total Users, AUM, Total Investments, Monthly Growth
- **Charts**: Investment growth (line chart), Portfolio distribution (pie chart)
- **Tables**: Recent transactions with status badges
- **Analytics**: Transaction statistics and trends

### User Management
- Comprehensive user listing with search and filters
- User details modal with profile information
- Status indicators (Active, Inactive, Suspended)
- KYC verification tracking
- User account summaries

### Investment Management
- Investment plan cards displaying key metrics
- Risk level indicators
- Expected returns and minimum investments
- Create/Edit/Delete functionality
- Admin actions for plan management

### Portfolio Overview
- Asset allocation visualization
- Portfolio composition by user
- Performance indicators with color coding
- Assets under management summary
- Detailed portfolio breakdown

### Transaction Management
- Complete transaction history
- Multi-filter capability (type, status, search)
- Pagination support
- Export to CSV
- Transaction statistics

### Advisor Management
- Advisor profile cards with ratings
- Expertise display
- Client assignment tracking
- Status management
- Add/Edit/Delete advisors

### Reports & Analytics
- Date range selection
- Revenue and user growth charts
- Key performance metrics
- Export reports (PDF, CSV, Excel)
- Recently generated reports list

### Notifications
- System notification management
- Read/Unread tracking
- Type-based filtering
- Create new notifications
- Notification statistics

### Settings
- Admin profile management
- Password change
- Platform configuration
- Backup and security settings
- Theme customization options

## 🎨 Design System

### Color Palette
| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Blue | #0284c7 | Main actions, highlights |
| Success Green | #22c55e | Positive outcomes |
| Warning Orange | #f59e0b | Caution states |
| Danger Red | #ef4444 | Failures, alerts |
| Gray (Base) | #111827 | Text and backgrounds |

### Components
- **Card**: Container with shadow and hover effects
- **Button**: Primary, secondary, and danger variants
- **Badge**: Status indicators with color coding
- **Table**: Responsive data display
- **Modal**: Forms and confirmations
- **StatCard**: Key metrics display
- **Pagination**: Data navigation

## 📁 Project Structure

```
src/
├── components/
│   └── common.tsx              # Reusable UI components
├── layouts/
│   ├── Layout.tsx              # Sidebar & TopNav
│   └── MainLayout.tsx          # Main layout wrapper
├── pages/
│   ├── Dashboard.tsx           # Dashboard page
│   ├── Users.tsx              # User management
│   ├── Investments.tsx        # Investment plans
│   ├── Portfolios.tsx         # Portfolio overview
│   ├── Transactions.tsx       # Transaction history
│   ├── Advisors.tsx          # Advisor management
│   ├── Reports.tsx           # Reports section
│   ├── Notifications.tsx      # Notifications
│   └── Settings.tsx          # Settings page
├── data/
│   └── mockData.ts           # Static mock data
├── types/
│   └── index.ts              # TypeScript types
├── App.tsx                   # Main app component
├── main.tsx                  # React entry point
└── index.css                 # Global styles

Configuration Files:
├── vite.config.ts            # Vite setup
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript config
├── postcss.config.js         # PostCSS config
└── index.html                # HTML template
```

## 💻 Key Technical Decisions

### Framework & Tools
- **React 18**: Latest stable version for UI
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **Tailwind CSS v3**: Utility-first CSS
- **React Router v6**: Client-side navigation
- **Recharts**: Interactive charts and visualizations
- **Lucide React**: Professional icon library

### Architecture
- **Component-Based**: Modular, reusable components
- **Functional Components**: Modern React approach
- **Hooks**: useState, useEffect for state management
- **Layout Pattern**: Sidebar + TopNav + Main content
- **Mock Data**: Static data for demo purposes

### Styling
- **Utility Classes**: Tailwind CSS for rapid styling
- **Component Variants**: Button, Badge variants
- **Responsive Design**: Mobile-first approach
- **Dark Mode Ready**: Structure supports dark theme
- **Consistent Spacing**: Defined scale throughout

## 🔧 Customization

### Modify Mock Data
Edit `src/data/mockData.ts` to change:
- User list
- Investment plans
- Portfolio data
- Transaction history
- Advisor information

### Update Color Scheme
Modify `tailwind.config.ts` to change:
- Primary, Success, Warning, Danger colors
- Font families
- Box shadows
- Other design tokens

### Add New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/layouts/Layout.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (1 column layouts)
- **Tablet**: 640px - 1024px (2 column layouts)
- **Desktop**: > 1024px (3-4 column layouts)

## ⚡ Performance Notes

- Lazy loading ready for future enhancement
- Optimized bundle size (~621KB)
- CSS-in-JS optimization with Tailwind
- React best practices implemented

## 📚 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## 🎯 Future Enhancements

- API integration for backend connectivity
- User authentication and authorization
- Real-time data updates with WebSocket
- Advanced filtering and search
- Export functionality (PDF, Excel)
- User preferences and saved views
- Audit logging
- Multi-language support
- Mobile app version

## 💡 Tips & Tricks

1. **Quick Dev Iteration**: Use `npm run dev` for hot reload
2. **Type Safety**: Use TypeScript for IDE autocomplete
3. **Component Reuse**: Check `components/common.tsx` first
4. **Mock Data**: Edit once, use everywhere in components
5. **Styling**: Use Tailwind utility classes for consistency

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Dependencies Issues
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
npm run build
# Check error messages and review recent changes
```

## 📞 Support

For questions or issues, refer to the technical documentation or project README.md

---

Built with ❤️ for Savi Wealth | v1.0.0
