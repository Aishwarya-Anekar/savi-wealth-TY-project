# **SaviWealth - Complete Setup & Deployment Guide**

## 📋 Table of Contents
1. [Prerequisites](#prerequisites)
2. [Project Structure](#project-structure)
3. [Installation Steps](#installation-steps)
4. [Database Setup](#database-setup)
5. [Configuration](#configuration)
6. [Running the Services](#running-the-services)
7. [Testing the Application](#testing-the-application)
8. [API Endpoints](#api-endpoints)
9. [Troubleshooting](#troubleshooting)

---

## ✅ Prerequisites

Before starting, ensure you have the following installed:

```bash
# Check Node.js version (v14+)
node --version

# Check npm version (v6+)
npm --version

# Check MySQL version (v8.0+)
mysql --version

# Check Git
git --version
```

**Required Software:**
- Node.js (v18+) - [Download](https://nodejs.org/)
- MySQL (v8.0+) - [Download](https://www.mysql.com/downloads/mysql/)
- Git (v2.30+) - [Download](https://git-scm.com/)
- Code Editor (VS Code recommended)

---

## 📁 Project Structure

```
SaviWealth/
├── User_Client(User Frontend)/          # React + Vite frontend
│   ├── src/
│   │   ├── pages/                       # All pages (35+ components)
│   │   ├── pages/admin/                 # Admin dashboard (10 pages)
│   │   ├── components/                  # Reusable UI components
│   │   ├── contexts/                    # AuthContext, ThemeContext
│   │   ├── hooks/                       # Custom hooks (useAuth, useCounter)
│   │   ├── services/                    # API service layer
│   │   ├── types/                       # TypeScript interfaces
│   │   ├── App.tsx                      # Main app with routing
│   │   └── main.tsx                     # Entry point
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
│
├── Backend/                              # Node.js + Express API
│   ├── server.js                        # Main server file
│   ├── .env                             # Environment variables
│   ├── config/
│   │   └── db.js                        # Database config
│   ├── package.json
│   └── node_modules/
│
├── Database/                             # MySQL schema
│   └── saviwealth_schema.sql            # Database schema (18 tables)
│
└── ML_Server/                            # Python ML models (optional)
    ├── main.py
    └── requirements.txt
```

---

## 🚀 Installation Steps

### Step 1: Navigate to Project Root
```bash
cd "c:\Users\DELL\Downloads\SaviWealth (4)\SaviWealth (3)\SaviWealth\SaviWealth"
```

### Step 2: Install Backend Dependencies
```bash
cd Backend
npm install
cd ..
```

### Step 3: Install Frontend Dependencies
```bash
cd "User_Client(User Frontend)"
npm install
cd ..
```

### Step 4: (Optional) Install ML Server Dependencies
```bash
cd "ML_Server(Machine_Learning_Models)"
pip install -r requirements.txt
cd ..
```

---

## 🗄️ Database Setup

### Step 1: Start MySQL Service
```bash
# Windows (if installed as service)
net start MySQL80

# Or start MySQL manually
mysql.exe
```

### Step 2: Create Database and Import Schema
```bash
# Navigate to Database folder
cd Database

# Import the schema
mysql -u root -p"#Komal1234" < saviwealth_schema.sql

cd ..
```

### Step 3: Verify Database Setup
```bash
# Check if database exists
mysql -u root -p"#Komal1234" -e "SHOW DATABASES LIKE 'saviwealth';"

# Check if tables are created
mysql -u root -p"#Komal1234" saviwealth -e "SHOW TABLES;"

# Check users table
mysql -u root -p"#Komal1234" saviwealth -e "SELECT id, email, role FROM users;"
```

**Expected Output:**
```
18 tables including:
- users
- investments
- portfolios
- transactions
- advisors
- and more...
```

---

## ⚙️ Configuration

### Backend Configuration (.env)

File: `Backend/.env`

```env
# Server Port
PORT=5000

# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD="#Komal1234"
DB_NAME=saviwealth

# JWT Secret (for authentication)
JWT_SECRET=saviwealth_super_secret

# API Base URL (for frontend)
VITE_API_URL=http://localhost:5000
```

### Frontend Configuration (Vite)

File: `User_Client(User Frontend)/.env` (if created)

```env
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=SaviWealth
```

---

## ▶️ Running the Services

### Option 1: Run Both Services (Recommended)

**Terminal 1 - Start Backend:**
```bash
cd Backend
npm start
```

Expected output:
```
🚀 SaviWealth Backend running on port 5000
✅ Database connected successfully
```

**Terminal 2 - Start Frontend:**
```bash
cd "User_Client(User Frontend)"
npm run dev
```

Expected output:
```
➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### Option 2: Build Frontend for Production

```bash
cd "User_Client(User Frontend)"
npm run build

# Output: dist/ folder created
```

### Option 3: Run ML Server (Optional)

```bash
cd "ML_Server(Machine_Learning_Models)"
python main.py
```

---

## 🧪 Testing the Application

### Access the Application

| Service | URL | Status |
|---------|-----|--------|
| **Frontend** | http://localhost:5173 | ✅ HTTP 200 |
| **Backend API** | http://localhost:5000 | ✅ HTTP 200 |
| **Admin Dashboard** | http://localhost:5173/admin/dashboard | ✅ Protected |

### Test Login

#### 1. User Login
**URL:** `http://localhost:5173/login`

**Credentials:**
```
Email: test@saviwealth.com
Password: test123
Role: User
```

**Expected:** Redirects to `/` (home dashboard)

#### 2. Admin Login
**URL:** `http://localhost:5173/login`

**Credentials:**
```
Email: admin@saviwealth.com
Password: admin123
Role: Admin
```

**Expected:** Redirects to `/admin/dashboard`

### Test API Endpoints (cURL or Postman)

#### Login Endpoint
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"admin@saviwealth.com\",\"password\":\"admin123\"}"
```

**Expected Response:**
```json
{
  "message": "Login successful ✅",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "fullName": "Admin User",
    "email": "admin@saviwealth.com",
    "role": "admin"
  }
}
```

#### Get Admin Analytics (Requires Token)
```bash
curl -X GET http://localhost:5000/api/admin/analytics \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

#### Get User Profile (Requires Token)
```bash
curl -X GET http://localhost:5000/api/user/profile \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## 🔌 API Endpoints

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | User login |
| POST | `/api/auth/signup` | User registration |

### Admin Endpoints (Protected)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/analytics` | Get dashboard analytics |
| GET | `/api/admin/users` | List all users |
| GET | `/api/admin/transactions` | List all transactions |
| GET | `/api/admin/portfolios` | List all portfolios |
| GET | `/api/admin/advisors` | List all advisors |
| GET | `/api/admin/reports` | Get reports |
| GET | `/api/admin/notifications` | Get notifications |

### User Endpoints (Protected)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/user/profile` | Get user profile |
| POST | `/api/user/profile/update` | Update profile |
| GET | `/api/user/portfolio` | Get user portfolio |
| GET | `/api/user/transactions` | Get user transactions |
| POST | `/api/user/invest` | Invest in product |

### Public Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/investments` | Get all investments |
| GET | `/api/investments/:id` | Get investment details |

---

## 🛠️ Troubleshooting

### Issue 1: Database Connection Failed

**Error Message:**
```
❌ Database connection failed: Unknown database 'saviwealth'
```

**Solution:**
```bash
# Import the schema
cd Database
mysql -u root -p"#Komal1234" < saviwealth_schema.sql
cd ..
```

---

### Issue 2: Port Already in Use

**Error Message:**
```
Error: listen EADDRINUSE: address already in use :::5000
```

**Solution:**
```bash
# Windows: Kill process on port 5000
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Or change port in Backend/.env
PORT=5001
```

---

### Issue 3: MySQL Authentication Failed

**Error Message:**
```
Access denied for user 'root'@'localhost'
```

**Solution:**
```bash
# Check MySQL service is running
net start MySQL80

# Verify credentials in Backend/.env
cat Backend/.env

# Test connection
mysql -u root -p"#Komal1234" -e "SELECT 1;"
```

---

### Issue 4: Frontend Build Error

**Error Message:**
```
Error: Cannot find module 'react'
```

**Solution:**
```bash
cd "User_Client(User Frontend)"
npm install
npm run build
```

---

### Issue 5: Port 5173 Already in Use

**Error Message:**
```
Port 5173 is in use, trying another one...
Already using port: 5174
```

**Solution:**
```bash
# Frontend will automatically use port 5174
# Or specify a port
npm run dev -- --port 3000
```

---

## 📊 Database Credentials

| Field | Value |
|-------|-------|
| **Host** | localhost |
| **Port** | 3306 |
| **Username** | root |
| **Password** | #Komal1234 |
| **Database** | saviwealth |

---

## 👥 Test Accounts

### Admin Account
```
Email: admin@saviwealth.com
Password: admin123
Role: Admin
```

### User Account
```
Email: test@saviwealth.com
Password: test123
Role: User
```

### Add New User (Database)
```bash
# Generate password hash
cd Backend
node -e "const bcrypt = require('bcryptjs'); bcrypt.hash('yourpassword', 10).then(h => console.log(h));"

# Then insert into database
mysql -u root -p"#Komal1234" saviwealth -e "INSERT INTO users (fullName, email, phone, passwordHash, role, status) VALUES ('Your Name', 'email@example.com', '9999999999', 'HASH_HERE', 'user', 'active');"
```

---

## 🔐 Security Notes

⚠️ **Important for Production:**

1. **Change JWT Secret:**
   ```env
   JWT_SECRET=your_super_secret_key_here
   ```

2. **Change Database Password:**
   ```bash
   mysql -u root -p"#Komal1234"
   ALTER USER 'root'@'localhost' IDENTIFIED BY 'new_password';
   ```

3. **Use HTTPS:**
   ```env
   # In production, use https://
   VITE_API_URL=https://api.yourdomain.com
   ```

4. **Enable CORS properly:**
   ```javascript
   // Remove localhost only in production
   app.use(cors({
     origin: ['https://yourdomain.com'],
     credentials: true
   }))
   ```

---

## 📝 Common Commands

### Frontend Commands
```bash
cd "User_Client(User Frontend)"

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Backend Commands
```bash
cd Backend

# Install dependencies
npm install

# Start server
npm start

# Or run with nodemon (auto-restart)
npm install -g nodemon
nodemon server.js
```

### Database Commands
```bash
# Connect to MySQL
mysql -u root -p

# Show all databases
SHOW DATABASES;

# Use saviwealth database
USE saviwealth;

# Show all tables
SHOW TABLES;

# Query users
SELECT * FROM users;

# Check database size
SELECT SUM(data_length + index_length) FROM information_schema.tables WHERE TABLE_SCHEMA = 'saviwealth';
```

---

## 📈 Performance Optimization

### Frontend Optimization
```bash
cd "User_Client(User Frontend)"

# Build with optimizations
npm run build

# Check bundle size
npm run build -- --analyze

# Note: Current bundle is ~2MB (consider code splitting for production)
```

### Backend Optimization
```bash
# Use connection pooling (already configured)
# connectionLimit: 10 in server.js

# Add caching headers
# Use Redis for session management (optional)
# Implement rate limiting (optional)
```

---

## 🆘 Getting Help

### Check Application Logs
```bash
# Backend logs (console output shows errors)
# Frontend logs (browser DevTools - F12)

# Check database logs
mysql -u root -p"#Komal1234" saviwealth -e "SELECT * FROM audit_logs LIMIT 10;"
```

### Verify All Services Running
```powershell
# Check if port 5173 (frontend) is responding
Invoke-WebRequest -Uri "http://localhost:5173/" 

# Check if port 5000 (backend) is responding
Invoke-WebRequest -Uri "http://localhost:5000/"

# Check if MySQL is running
mysql -u root -p"#Komal1234" -e "SELECT 1;"
```

---

## ✨ Features Implemented

- ✅ Role-Based Access Control (RBAC)
- ✅ JWT Authentication
- ✅ User Dashboard
- ✅ Admin Dashboard (10 pages)
- ✅ Investment Management
- ✅ Portfolio Tracking
- ✅ Transaction History
- ✅ Advisor Management
- ✅ Behavioral Assessment
- ✅ Risk Analysis
- ✅ Responsive Design (Tailwind CSS)
- ✅ Dark Mode Support
- ✅ Real-time Charts (Recharts)
- ✅ TypeScript Support
- ✅ RESTful API

---

## 📞 Support

For issues and questions:
1. Check the Troubleshooting section above
2. Verify all prerequisites are installed
3. Check database connection
4. Review console logs (frontend: DevTools, backend: terminal)

---

**Last Updated:** March 8, 2026  
**Version:** 1.0.0  
**Status:** ✅ Fully Functional
