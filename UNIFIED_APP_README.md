# SaviWealth - Unified Role-Based Application

## 🎯 Overview

This is a unified SaviWealth application that combines both User and Admin interfaces into a single application with role-based access control.

## 🏗️ Architecture

```
SaviWealth/
├── User_Client(User Frontend)/    # Unified Frontend Application
│   ├── src/
│   │   ├── components/
│   │   │   ├── admin/             # Admin-specific components
│   │   │   └── ...                # Public components
│   │   ├── contexts/
│   │   │   ├── AuthContext.tsx    # Authentication state management
│   │   │   └── ThemeContext.tsx
│   │   ├── layouts/
│   │   │   ├── AdminLayout.tsx    # Admin sidebar & topnav
│   │   │   └── AdminMainLayout.tsx
│   │   ├── pages/
│   │   │   ├── admin/             # Admin pages
│   │   │   └── ...                # Public & user pages
│   │   ├── services/
│   │   │   └── api.ts             # Unified API service
│   │   └── App.tsx                # Role-based routing
│   └── package.json
├── Backend/                        # Node.js + Express + MySQL
│   ├── server.js                  # Main server file
│   └── config/
└── Database/
    └── saviwealth_schema.sql

```

## 🔐 Authentication Flow

1. **Login Page** (`/login`)
   - User selects role (User or Admin)
   - Enters credentials
   - Backend validates and returns JWT token with user role

2. **Role-Based Redirect**
   - Admin → `/admin/dashboard`
   - User → `/` (homepage)

3. **Protected Routes**
   - `/admin/*` routes require `admin` role
   - Authentication managed by AuthContext
   - Protected by ProtectedRoute component

## 🚀 Setup Instructions

### 1. Backend Setup

```bash
cd Backend
npm install
```

Create `.env` file:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=saviwealth
JWT_SECRET=your_secret_key
PORT=5000
```

Start backend:
```bash
node server.js
```

### 2. Database Setup

```bash
# Import the schema
mysql -u root -p < Database/saviwealth_schema.sql
```

### 3. Frontend Setup

```bash
cd "User_Client(User Frontend)"
npm install
```

Create `.env` file (optional):
```env
VITE_API_BASE=http://localhost:5000
```

Start frontend:
```bash
npm run dev
```

The application will run on `http://localhost:5173`

## 📱 Application Routes

### Public Routes
- `/` - Homepage
- `/about` - About page
- `/services` - Services listing
- `/login` - Login page
- `/signup` - Signup page
- ... (all marketing pages)

### Admin Routes (Protected)
- `/admin/dashboard` - Admin dashboard
- `/admin/users` - User management
- `/admin/investments` - Investment management
- `/admin/portfolios` - Portfolio management
- `/admin/transactions` - Transaction history
- `/admin/advisors` - Advisor management
- `/admin/reports` - Reports & analytics
- `/admin/notifications` - Notifications
- `/admin/settings` - Settings

## 🔑 Default Test Credentials

### Admin Account
```
Email: admin@saviwealth.com
Password: admin123
```

### User Account
```
Email: user@example.com
Password: user123
```

## 🛠️ Technology Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **React Router v7** for routing
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Recharts** for charts (admin)
- **Lucide React** for icons

### Backend
- **Node.js** + **Express**
- **MySQL** database
- **JWT** authentication
- **bcrypt** for password hashing

## 📦 Key Features

1. **Single Application**: Both user and admin interfaces in one codebase
2. **Role-Based Access**: Routes protected based on user role
3. **Centralized Authentication**: AuthContext manages auth state
4. **Secure API**: JWT-based authentication
5. **Responsive Design**: Works on all devices
6. **Type Safety**: Full TypeScript support

## 🔄 Migration from Dual Apps

Previously, the project had:
- User Frontend on `localhost:5173`
- Admin Frontend on `localhost:5174`

Now, everything runs on `localhost:5173` with role-based routing:
- Public routes accessible to all
- Admin routes accessible only to admin users
- Automatic redirect based on user role

## 🐛 Troubleshooting

### CORS Issues
- Ensure backend CORS allows `http://localhost:5173`
- Check `.env` files are configured correctly

### Authentication Issues
- Clear browser localStorage
- Verify JWT secret matches between frontend and backend
- Check database connection

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📝 Development Notes

- Admin components are in `src/components/admin/`
- Admin pages are in `src/pages/admin/`
- All API calls go through `src/services/api.ts`
- Authentication state managed by `src/contexts/AuthContext.tsx`

## 🚢 Deployment

1. Build frontend:
```bash
npm run build
```

2. Serve the `dist` folder with any static server
3. Ensure backend is running and accessible
4. Configure environment variables for production

## 📄 License

Proprietary - SaviWealth
