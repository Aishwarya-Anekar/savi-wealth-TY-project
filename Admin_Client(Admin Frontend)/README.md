# Savi Wealth Admin Panel

A professional, production-quality Admin Dashboard for Savi Wealth - a fintech platform for wealth management and investment services.

## Overview

This is a fully responsive admin panel built with modern web technologies, featuring a comprehensive dashboard, user management, investment tracking, portfolio oversight, and reporting capabilities.

## Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v6
- **Charts & Visualization**: Recharts
- **Icons**: Lucide React
- **Package Manager**: npm

## Project Structure

```
src/
├── components/
│   └── common.tsx           # Reusable UI components (Card, Button, Table, Modal, Badge, etc.)
├── layouts/
│   ├── Layout.tsx           # Sidebar and TopNav components
│   └── MainLayout.tsx       # Main layout wrapper with outlet
├── pages/
│   ├── Dashboard.tsx        # Dashboard with KPI cards and charts
│   ├── Users.tsx           # User management with search and filters
│   ├── Investments.tsx     # Investment plan management
│   ├── Portfolios.tsx      # Portfolio overview and asset allocation
│   ├── Transactions.tsx    # Transaction history with filtering
│   ├── Advisors.tsx        # Advisor management
│   ├── Reports.tsx         # Reporting and analytics
│   ├── Notifications.tsx   # System notifications
│   └── Settings.tsx        # Admin settings and configuration
├── data/
│   └── mockData.ts         # Mock data for all entities
├── types/
│   └── index.ts            # TypeScript type definitions
├── App.tsx                  # Main app component with routing
├── main.tsx                 # React DOM setup
├── index.css               # Global styles and Tailwind directives
└── vite.config.ts          # Vite configuration

Configuration Files:
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── index.html              # HTML entry point
└── package.json            # Project dependencies and scripts
```

## Key Features

### Dashboard
- High-level KPI cards showing Total Users, AUM, Total Investments, Monthly Growth
- Investment growth line chart
- Portfolio distribution donut chart
- Transaction status indicators
- Recent transactions table
- Quick action buttons

### User Management
- Comprehensive user table with details
- Search and filter functionality
- Status badges (Active, Inactive, Suspended)
- KYC status indicators
- User detail modal with profile information
- Account summary with portfolio value and returns

### Investment Management
- Investment plans displayed as interactive cards
- Risk level indicators (Low, Medium, High)
- Expected returns display
- Minimum investment requirements
- Investor count and total invested amount
- Add/Edit/Delete investment plans with modal dialogs

### Portfolio Overview
- Asset allocation visualization using pie chart
- Portfolio composition by user with stacked bar chart
- Total assets under management summary
- Monthly return indicators with color coding
- Detailed portfolio table with asset breakdown

### Transaction Management
- Complete transaction history
- Filter by type (Buy, Sell, Deposit, Withdrawal)
- Filter by status (Success, Pending, Failed)
- Search functionality
- Pagination with navigation
- Export options (CSV)
- Transaction statistics

### Advisor Management
- Advisor cards with detailed information
- Rating display with star visualization
- Expertise tags
- Assigned clients count
- Status indicators
- Add/Edit advisor functionality
- Client assignment interface

### Reports
- Date range selection for custom reports
- Investment growth and revenue charts
- User growth trend analysis
- Key performance metrics
- Export reports in PDF, CSV, and Excel formats
- Recently generated reports list

### Notifications
- Real-time notification list
- Read/Unread states
- Type-based filtering (Info, Success, Warning, Danger)
- Create new notifications
- Delete notifications
- Notification statistics

### Settings
- Admin profile management
- Password change functionality
- Platform configuration (read-only display)
- Backup and security settings
- Theme customization
- Color scheme selection
- Notification preferences

## Design System

### Color Palette
- **Primary**: Sky Blue (#0284c7) - Main actions and highlights
- **Success**: Green (#22c55e) - Positive outcomes
- **Warning**: Orange (#f59e0b) - Caution states
- **Danger**: Red (#ef4444) - Failures and alerts

### Components
- **Card**: Main content container with shadow and hover effects
- **Button**: Multiple variants (Primary, Secondary, Danger) and sizes
- **Badge**: Status indicators with color coding
- **Table**: Responsive data display with actions
- **Modal**: Dialog boxes for forms and confirmations
- **Input**: Form fields with validation
- **StatCard**: Display key metrics with trends
- **Pagination**: Navigation through paginated data

### Responsive Design
- Mobile-first approach
- Collapsible sidebar for mobile devices
- Responsive grid layouts (1 col mobile → 2-3 cols desktop)
- Optimized touch interactions

## Getting Started

### Installation

1. Navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```

The application will open automatically at `http://localhost:5173`

### Build

Create an optimized production build:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

## Mock Data

All data in the application comes from static mock data defined in `src/data/mockData.ts`. This includes:

- 5 sample users with various statuses
- 5 investment plans with different risk levels
- 4 user portfolios with asset allocation
- 6 sample transactions
- 4 advisors with expertise
- Dashboard metrics
- Notifications
- Chart data for visualizations

You can modify this mock data file to change the displayed information without backend integration.

## No Backend Required

This is a frontend-only application. All functionality is simulated on the client side:

- Forms don't submit to servers
- Data changes don't persist
- Modals and dialogs are purely UI elements
- All filtering and search is client-side

This makes it perfect for:
- Design demonstrations
- User interface evaluation
- Wireframing and prototyping
- Sales presentations
- UI/UX testing

## Future Backend Integration

When ready to connect a real backend:

1. Replace mock data calls with API requests using `fetch` or `axios`
2. Implement authentication/authorization
3. Add form submission handlers
4. Implement data persistence
5. Add loading states and error handling
6. Set up environment configuration

## Accessibility & Performance

- Semantic HTML structure
- Keyboard navigation support
- ARIA labels where appropriate
- Optimized images and lazy loading
- Minimal external dependencies
- Performance-optimized Tailwind CSS builds

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - Savi Wealth Admin Panel

## Support

For issues or questions regarding the admin panel, please contact the development team.

---

Built with ❤️ for Savi Wealth
