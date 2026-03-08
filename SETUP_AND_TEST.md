# SaviWealth - Setup & Testing Guide

## ⚠️ If Admin Dashboard is Still Showing Dummy Data

Follow these steps to verify your setup and get real data showing:

---

## Step 1: Verify Backend is Running

### Check if backend server is started:
```bash
# You should see in terminal:
# 🚀 SaviWealth Backend running on port 5000
```

### If NOT running, start it:
```bash
cd Backend
npm install  # First time only
npm start
```

### Test backend health:
```bash
curl http://localhost:5000/
```

**Expected Response:**
```json
{"message":"SaviWealth Backend Running ✅","version":"2.0.0"}
```

---

## Step 2: Verify MySQL Database

### Check if database exists:
```bash
mysql -u root -p -e "SHOW DATABASES LIKE 'saviwealth';"
```

**Should show:** `saviwealth` in the list

### Check if tables exist:
```bash
mysql -u root -p saviwealth -e "SHOW TABLES;"
```

**Should show:** 18 tables (users, investments, transactions, portfolios, etc.)

### If database is NOT set up:
```bash
# Create database and import schema
mysql -u root -p
CREATE DATABASE saviwealth;
USE saviwealth;
SOURCE /path/to/Database/saviwealth_schema.sql;
EXIT;
```

---

## Step 3: Verify Backend Environment Variables

### Check Backend/.env file exists:
```bash
ls -la Backend/.env
```

### If .env doesn't exist, create it:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=saviwealth
JWT_SECRET=your_secret_key_here
PORT=5000
```

### If you changed .env, restart backend:
```bash
# Stop current backend (Ctrl+C)
# Then restart
npm start
```

---

## Step 4: Create Test Admin User

### Insert test admin:
```bash
mysql -u root -p saviwealth -e "INSERT INTO users (email, fullName, phone, passwordHash, role, status) VALUES ('admin@test.com', 'Test Admin', '+91-9876543210', '\$2a\$10\$hash_here', 'admin', 'active');"
```

### Or login with default admin:
```
Email: admin@saviwealth.com
Password: admin123
```

### If you don't have the default admin, insert it:
```bash
mysql -u root -p saviwealth
INSERT INTO users (email, fullName, phone, passwordHash, role, status, kycStatus) 
VALUES (
  'admin@saviwealth.com',
  'Admin User',
  '+91-9876543210',
  '$2a$10$N9qo8uLOickgx2.F5FAEyO2P0q0pJ1h7yXDc6qE8OpAg.AEGKBhc6',
  'admin',
  'active',
  'verified'
);
```

---

## Step 5: Test API - Get Token

### Get JWT token via login:
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@saviwealth.com",
    "password": "admin123"
  }'
```

**Expected Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": 1,
    "fullName": "Admin User",
    "email": "admin@saviwealth.com",
    "role": "admin"
  }
}
```

**Copy the token value (without quotes)**

---

## Step 6: Test Admin Analytics Endpoint

### Call admin analytics with token:
```bash
curl -X GET http://localhost:5000/api/admin/analytics \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

**Replace `YOUR_TOKEN_HERE` with the token from Step 5**

**Expected Response:**
```json
{
  "total_users": 0,
  "total_investments": 0,
  "average_risk_score": "0.00",
  "average_panic_probability": "0.0000",
  "successful_transactions": 0,
  "total_aum": "0.00"
}
```

(Values might be 0 if you don't have data yet - that's OK!)

---

## Step 7: Create Sample Data (Optional)

### If analytics show all zeros, add some test data:

#### Create test user:
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "John Investor",
    "email": "john@test.com",
    "phone": "+91-9876543210",
    "password": "test123"
  }'
```

#### Create test investment:
```bash
curl -X POST http://localhost:5000/api/admin/investments \
  -H "Authorization: Bearer YOUR_ADMIN_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Tech Growth Fund",
    "type": "Mutual_Funds",
    "riskLevel": "high",
    "expected_return": 15,
    "minimum_investment": 5000,
    "current_nav": 100.50,
    "fund_manager": "Jane Smith"
  }'
```

#### Create test transaction:
```bash
curl -X POST http://localhost:5000/api/user/invest \
  -H "Authorization: Bearer YOUR_USER_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "investmentId": 1,
    "amount": 50000,
    "sipFrequency": "one_time"
  }'
```

---

## Step 8: Verify Admin Dashboard Frontend

### 1. Make sure frontend is running:
```bash
cd Admin_Client
npm run dev
# Should show: Local: http://localhost:5173
```

### 2. Open browser:
```
http://localhost:5173
```

### 3. Login with admin credentials:
- Email: `admin@saviwealth.com`
- Password: `admin123`

### 4. Navigate to Dashboard page

### 5. Check browser console (F12) for errors:
- Press `F12` → Console tab
- Look for red error messages
- Common errors:
  - "Failed to fetch" = Backend not running
  - "Invalid token" = Token expired or wrong credentials
  - "FORBIDDEN" = Not logged in as admin

---

## Troubleshooting Checklist

### ❌ Backend not running?
```bash
cd Backend
npm start
```

### ❌ Port 5000 already in use?
```bash
# Kill process on port 5000
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :5000
kill -9 <PID>
```

### ❌ Database connection failed?
Check Backend/.env:
- `DB_HOST` should be `localhost`
- `DB_USER` should be your MySQL username
- `DB_PASSWORD` should be your MySQL password
- `DB_NAME` should be `saviwealth`

### ❌ Token errors?
- Tokens expire after 24 hours
- Clear localStorage and login again: `localStorage.clear()` in browser console

### ❌ "Admin access required"?
- Log in with admin role account
- Default: `admin@saviwealth.com` / `admin123`

### ❌ Blank dashboard or "No transactions"?
This is OK! It means:
- API is working ✅
 - No data exists yet
- Dashboard shows helpful fallback data
- Add some test data using Step 7

---

## Quick Verification Script

### Run this to test everything:

**Windows PowerShell:**
```powershell
# Test backend health
$response = Invoke-WebRequest -Uri "http://localhost:5000/" -SkipCertificateCheck | ConvertFrom-Json
Write-Host "Backend Status: $($response.message)"

# Test database
mysql -u root -p -e "SELECT COUNT(*) FROM saviwealth.users;"
```

**Mac/Linux Bash:**
```bash
# Test backend health
curl http://localhost:5000/ | jq

# Test database
mysql -u root -p saviwealth -e "SELECT COUNT(*) FROM users;"
```

---

## Expected Output After Setup

### Browser:
✅ Admin dashboard loads  
✅ KPI cards show numbers (0 is OK if no data)  
✅ Charts display (may show fallback demo data if no real data)  
✅ Recent transactions table appears  

### Backend Terminal:
✅ Shows `🚀 SaviWealth Backend running on port 5000`  
✅ Logs requests as you interact with dashboard  

### Browser Console (F12):
✅ No red error messages  
✅ May see some warnings (OK)  

---

## Still Having Issues?

### 1. Check logs:
```bash
# Backend console output should show:
# GET /api/admin/analytics 200 (successful)
# GET /api/admin/transactions 200 (successful)
```

### 2. Check network (Browser F12):
- Go to Network tab
- Refresh dashboard
- Look for `/api/admin/analytics` and `/api/admin/transactions` calls
- Click on them to see responses

### 3. Verify token:
- Open browser DevTools (F12)
- Go to Application → localStorage  
- Find `token` value
- It should be a long string starting with `eyJ...`

### 4. Test endpoint directly:
```bash
# Get your token first, then:
curl -X GET http://localhost:5000/api/admin/analytics \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## Next Steps

After verifying everything works:

1. **Add more test data** for better visualization
2. **Stop dummy data fallback** - Once you have real data, charts will show it instead
3. **Test other features** - Users, Transactions, Analytics pages
4. **Deploy to production** - Follow production deployment guide

---

## Questions?

See:
- `DATABASE_DOCUMENTATION.md` - Database setup details
- `DEVELOPER_REFERENCE.md` - API usage examples
- `IMPLEMENTATION_COMPLETE.md` - Full feature documentation

---

**Dashboard should now show REAL DATA from your database!**

If charts still show demo data, it means:
- ✅ API is working
- ✅ Backend is connected
- ℹ️ No real data exists yet (can add via Step 7)
