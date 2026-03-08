# Savi Wealth Admin Panel - Copilot Instructions

This document provides guidance for GitHub Copilot when working on the Savi Wealth Admin Panel project.

## Project Overview

A production-quality React + TypeScript admin dashboard for Savi Wealth, a fintech wealth management platform.

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS v3
- **Build Tool**: Vite v7
- **Routing**: React Router DOM v6
- **Charting**: Recharts
- **Icons**: Lucide React

## Project Structure

```
src/
├── components/       # Reusable UI components
├── layouts/         # Layout components (Sidebar, TopNav)
├── pages/          # Page components (Dashboard, Users, etc.)
├── data/           # Mock data and static content
├── types/          # TypeScript type definitions
├── App.tsx         # Main application component
├── main.tsx        # React entry point
└── index.css       # Global styles
```

## Key Principles for Code Generation

### 1. Component Architecture
- Use functional components with React Hooks
- Prefer `useState` and `useEffect` hooks
- Use TypeScript interfaces for props
- Export components as named exports
- Keep components focused and single-responsibility

### 2. Styling
- Use Tailwind CSS utility classes
- No CSS-in-JS or styled-components
- Reference custom components from `src/index.css`
- Maintain consistent color scheme (primary, success, warning, danger)
- Use responsive classes (md:, lg:)

### 3. Type Safety
- Always annotate function parameters and return types
- Use TypeScript interfaces from `src/types/index.ts`
- Import types when working with data models
- No `any` types without explicit reason

### 4. Data Management
- All mock data comes from `src/data/mockData.ts`
- Don't hardcode data in components
- Use the provided TypeScript types for data structures
- Array of users, investments, portfolios, etc. are imported from mockData

### 5. Component Library
Common reusable components in `src/components/common.tsx`:

- `Card`: Main content container
- `Button`: Clickable element (variants: primary, secondary, danger)
- `Badge`: Status indicator
- `Table`: Data display with optional actions
- `Modal`: Dialog component
- `Input`: Form input field
- `StatCard`: KPI display card
- `Pagination`: Table pagination
- `EmptyState`: Empty data display

## Code Patterns to Follow

### Component Template
```typescript
import React, { useState } from 'react';
import { Button, Card } from '../components/common';
import { someData } from '../data/mockData';
import { SomeType } from '../types';

export const MyComponent: React.FC = () => {
  const [state, setState] = useState(false);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Title</h1>
      <Card>
        {/* Content */}
      </Card>
    </div>
  );
};
```

### Import Organization
1. React imports first
2. Third-party imports (lucide-react, recharts)
3. Component imports
4. Type imports
5. Data imports

### Naming Conventions
- Components: PascalCase (e.g., `UserManagement`)
- Functions: camelCase (e.g., `handleSubmit`)
- Constants: UPPER_SNAKE_CASE (e.g., `DEFAULT_SORT`)
- Types/Interfaces: PascalCase (e.g., `UserData`)

## Common Tasks

### Adding a New Page
1. Create `src/pages/PageName.tsx`
2. Import reusable components from `src/components/common`
3. Import mock data if needed
4. Export as default or named export
5. Add route in `src/App.tsx`
6. Add navigation link in `src/layouts/Layout.tsx`

### Adding a New Component
1. Add to `src/components/common.tsx`
2. Export as named export
3. Document props with TypeScript interface
4. Use Tailwind CSS for styling
5. Keep component minimal and reusable

### Modifying Mock Data
1. Edit `src/data/mockData.ts`
2. Update TypeScript types if needed in `src/types/index.ts`
3. Ensure data matches the interface definition

## Important Files Reference

- `tailwind.config.ts`: Customizable colors, fonts, spacing
- `vite.config.ts`: Build and dev server configuration
- `tsconfig.json`: TypeScript compiler options
- `package.json`: Dependencies and scripts

## Colors & Design Tokens

From `tailwind.config.ts`:
- **Primary**: `#0284c7` (blue-600)
- **Success**: `#22c55e` (green-500)
- **Warning**: `#f59e0b` (orange-500)
- **Danger**: `#ef4444` (red-500)

Use as: `bg-primary-600`, `text-success-600`, etc.

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run type-check   # TypeScript type checking
```

## Common Imports

```typescript
// Components
import { Card, Button, Badge, Table, Modal, Input } from '../components/common';

// Types
import { User, Investment, Portfolio, Transaction, Advisor } from '../types';

// Mock Data
import { users, investments, portfolios, transactions, advisors } from '../data/mockData';

// Icons
import { Plus, Edit2, Trash2, Eye, Search } from 'lucide-react';

// Routing
import { Link, useNavigate, useLocation } from 'react-router-dom';

// React
import { useState, useEffect } from 'react';
```

## Best Practices

1. **Responsive First**: Use Tailwind responsive classes
2. **Type Everything**: Full TypeScript type coverage
3. **Reuse Components**: Check `common.tsx` first
4. **Consistent Spacing**: Use Tailwind spacing scale (space-4, space-6)
5. **Error Boundaries**: Ready for future implementation
6. **Comments**: Add comments for complex logic
7. **Performance**: Avoid unnecessary re-renders
8. **Accessibility**: Use semantic HTML

## Testing & Verification

- Check TypeScript compilation: `npm run type-check`
- Build locally: `npm run build`
- Test in development: `npm run dev`
- Verify no console errors
- Test responsive behavior

## Troubleshooting Guide

**TypeScript Error**: Missing children prop
- Add children to Component props if needed

**Build Error**: Module not found
- Check import paths (should use `../`)
- Verify file exists

**Styling Issue**: Class not applied
- Ensure Tailwind class is in content glob
- Check class syntax matches Tailwind

## Future Enhancement Areas

- [ ] API integration
- [ ] User authentication
- [ ] Real-time data updates
- [ ] Advanced filtering
- [ ] Export functionality
- [ ] Dark mode
- [ ] Internationalization
- [ ] Accessibility improvements

## References

- React Docs: https://react.dev
- TypeScript: https://www.typescriptlang.org
- Tailwind CSS: https://tailwindcss.com
- React Router: https://reactrouter.com
- Recharts: https://recharts.org
- Lucide Icons: https://lucide.dev

---

**Last Updated**: February 24, 2026
**Project Version**: 1.0.0
**Status**: Production Ready
