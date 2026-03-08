# SaviWealth - Quick Developer Reference Guide

## 🚀 Quick Start (5 Minutes)

### 1. Start MySQL Database
```bash
# Ensure MySQL is running
mysql -u root -p saviwealth -e "SHOW TABLES;"
```

### 2. Start Backend (Terminal 1)
```bash
cd Backend
npm start
# Output: 🚀 SaviWealth Backend running on port 5000
```

### 3. Start Admin Frontend (Terminal 2)
```bash
cd Admin_Client
npm run dev
# Output: Local: http://localhost:5173
```

### 4. Start User Frontend (Terminal 3)
```bash
cd User_Client
npm run dev
# Output: Local: http://localhost:5174
```

---

## 🔗 API Base URL
```
http://localhost:5000
```

---

## 🔐 Authentication & Token Management

### Get JWT Token (Login)
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@test.com",
  "password": "test123"
}

Response:
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": 1,
    "fullName": "John Doe",
    "email": "john@test.com",
    "role": "user"
  }
}
```

### Use Token in Requests
```bash
GET /api/user/profile
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

### Frontend Token Storage
```javascript
// After login, token is stored in localStorage
localStorage.setItem("token", response.token);
localStorage.setItem("user", JSON.stringify(response.user));

// To use in API calls
const token = localStorage.getItem("token");
const headers = {
  "Authorization": `Bearer ${token}`
};
```

---

## 📚 User API Endpoints

### Authentication
```javascript
import { signup, login } from '../services/api';

// Register
const result = await signup("John Doe", "john@test.com", "+91-9876543210", "password123");

// Login
const { token, user } = await login("john@test.com", "password123");
```

### User Profile
```javascript
import { getUserProfile, updateUserProfile } from '../services/api';

// Get profile
const profile = await getUserProfile(token);
// Returns: { id, fullName, email, phone, role, kyc_status, ... }

// Update profile
await updateUserProfile(token, {
  fullName: "Jane Doe",
  phone: "+91-9876543210"
});
```

### Financial Profile
```javascript
import { submitFinancialProfile, getFinancialProfile } from '../services/api';

// Submit financial info
await submitFinancialProfile(token, {
  age: 30,
  income: 1000000,
  portfolio_value: 500000,
  past_loss_percentage: 10,
  panic_history: "No",
  investment_horizon: "long",
  risk_tolerance: "medium",
  monthly_investment_capacity: 10000,
  existing_investments: "Mutual Funds, Stocks"
});

// Get financial profile
const profile = await getFinancialProfile(token);
```

### Behavioral Assessment
```javascript
import { submitAssessment, getLatestAssessment } from '../services/api';

// Submit assessment (9 answers, each 1-5)
const answers = [4, 3, 5, 2, 4, 3, 5, 2, 4];
const result = await submitAssessment(token, answers);
// Returns: { panic_probability: 0.25, regret_probability: 0.15, ... }

// Get latest assessment
const assessment = await getLatestAssessment(token);
```

### Investments
```javascript
import { getInvestments, getInvestmentDetails } from '../services/api';

// Get all investments (with filters)
const investments = await getInvestments({
  type: "Mutual_Funds",
  riskLevel: "medium"
});

// Get single investment details
const details = await getInvestmentDetails(1);
// Returns: { id, name, type, riskLevel, expected_return, ... }
```

### Portfolio
```javascript
import { getUserPortfolio } from '../services/api';

// Get user's portfolio with holdings
const portfolio = await getUserPortfolio(token);
// Returns: {
//   portfolioId: 1,
//   totalValue: 500000,
//   monthlyReturn: 5000,
//   yearlyReturn: 60000,
//   holdings: [
//     { investmentName, units, currentPrice, currentValue, percentage }
//   ]
// }
```

### Transactions
```javascript
import { investInProduct, getUserTransactions } from '../services/api';

// Make investment
await investInProduct(token, {
  investmentId: 1,
  amount: 50000,
  sipFrequency: "one_time"  // or "monthly", "quarterly", "half_yearly", "yearly"
});

// Get transaction history
const transactions = await getUserTransactions(token);
// Returns: [
//   {
//     id, investmentName, transactionType, amount,
//     charges, netAmount, status, date
//   }
// ]
```

### Crash Simulation
```javascript
import { runCrashSimulation } from '../services/api';

// Simulate market crash
const result = await runCrashSimulation(token, 500000);
// Calculates impact of -10%, -20%, -30%, -50%
// Returns: {
//   portfolio_value: 500000,
//   crash_10_percent: 450000,
//   crash_20_percent: 400000,
//   panic_risk: "medium",
//   recommendation: "Hold"
// }
```

---

## 👨‍💼 Admin API Endpoints

### Authentication
```javascript
// Admin login works same as user
const { token, user } = await login("admin@test.com", "admin123");
// user.role will be "admin"
```

### Analytics Dashboard
```javascript
import { getAdminAnalytics } from '../services/api';

const analytics = await getAdminAnalytics(token);
// Returns: {
//   total_users: 150,
//   total_aum: 5000000,
//   total_investments: 250000,
//   successful_transactions: 45
// }
```

### User Management
```javascript
import { getAdminUsers } from '../services/api';

// Get all users with optional filters
const users = await getAdminUsers(token, {
  status: "active",        // active, inactive, suspended
  kyc_status: "verified"   // verified, pending, rejected
});

// Get single user profile
const userProfile = await getUserProfile(token, userId);
```

### Transactions
```javascript
import { getAdminTransactions } from '../services/api';

// Get all transactions (admin view)
const transactions = await getAdminTransactions(token);
// Returns: [
//   {
//     id, userName, investmentName, type, amount,
//     date, status, charges, netAmount
//   }
// ]
```

### Investment Management
```javascript
import { getInvestments, createInvestment } from '../services/api';

// Create new investment (admin only)
await createInvestment(token, {
  name: "Tech Growth Fund",
  type: "Mutual_Funds",
  riskLevel: "high",
  expected_return: 15,
  minimum_investment: 5000,
  current_nav: 100.50,
  fund_manager: "John Smith"
});
```

---

## 🗂️ Database Schema Quick Reference

### Users Table
```sql
id, email, fullName, phone, passwordHash, role, kyc_status,
account_suspended, last_login, created_at, updated_at
```

### Financial Profiles Table
```sql
id, user_id, age, income, portfolio_value, risk_tolerance,
investment_horizon, monthly_investment_capacity, ...
```

### Assessments Table
```sql
id, user_id, emotional_score, risk_score, financial_score,
panic_probability, regret_probability, created_at
```

### Investments Table
```sql
id, name, type, riskLevel, expected_return, minimum_investment,
current_nav, investor_count, total_invested, ...
```

### User Investments Table
```sql
id, user_id, investment_id, units, purchase_date, sip_frequency,
next_sip_date, current_value (generated column), created_at
```

### Transactions Table
```sql
id, user_id, investment_id, type, amount, charges, net_amount,
sip_frequency, status, transaction_date, reference_number
```

### Portfolios Table
```sql
id, user_id, total_value, monthly_return, yearly_return,
stock_percentage, mutual_fund_percentage, bond_percentage, ...
```

---

## 🎯 Common Use Cases

### Complete User Onboarding Flow

```javascript
// Step 1: Register
const signupResult = await signup(
  "John Doe",
  "john@test.com",
  "+91-9876543210",
  "secure_password"
);
const token = signupResult.token;

// Step 2: Submit Financial Profile
await submitFinancialProfile(token, {
  age: 30,
  income: 1000000,
  portfolio_value: 500000,
  risk_tolerance: "medium",
  investment_horizon: "long",
  monthly_investment_capacity: 10000
});

// Step 3: Complete Assessment
const answers = [4, 3, 5, 2, 4, 3, 5, 2, 4];
const assessment = await submitAssessment(token, answers);
console.log(`Panic Risk: ${assessment.panic_probability}`);

// Step 4: View Portfolio
const portfolio = await getUserPortfolio(token);
console.log(`Portfolio Value: ${portfolio.totalValue}`);

// Step 5: Invest in Product
await investInProduct(token, {
  investmentId: 1,
  amount: 50000,
  sipFrequency: "monthly"
});

// Step 6: View Transactions
const transactions = await getUserTransactions(token);
```

### View Admin Dashboard

```javascript
// Login as admin
const adminToken = (await login("admin@test.com", "admin123")).token;

// Fetch all dashboard data
const [analytics, users, transactions] = await Promise.all([
  getAdminAnalytics(adminToken),
  getAdminUsers(adminToken),
  getAdminTransactions(adminToken)
]);

// Render dashboard with data
console.log(`Total Users: ${analytics.total_users}`);
console.log(`AUM: ${analytics.total_aum}`);
```

---

## 🛠️ Error Handling Pattern

```javascript
try {
  const result = await login(email, password);
  // Success
} catch (error) {
  if (error.message.includes("USER_NOT_FOUND")) {
    // Show: "User not found. Please signup first."
  } else if (error.message.includes("INVALID_PASSWORD")) {
    // Show: "Incorrect password. Please try again."
  } else if (error.message.includes("ACCOUNT_SUSPENDED")) {
    // Show: "Your account has been suspended."
  } else if (error.message.includes("SERVER_ERROR")) {
    // Show: "Server error. Please try again later."
  }
}
```

---

## 📊 Response Codes

| Code | Meaning | Example |
|------|---------|---------|
| 200 | Success | Login successful, data retrieved |
| 201 | Created | Investment created, user registered |
| 400 | Bad Request | Missing fields, invalid email |
| 401 | Unauthorized | Invalid token, not logged in |
| 403 | Forbidden | Admin endpoint, insufficient permissions |
| 404 | Not Found | User not found, investment not found |
| 409 | Conflict | Email already exists |
| 500 | Server Error | Database error, unexpected issue |

---

## 🔄 Data Flow Diagram

```
User Signup/Login
       ↓
Get JWT Token (stored in localStorage)
       ↓
Submit Financial Profile
       ↓
Complete Assessment (9 questions)
       ↓
ML Model calculates panic_probability
       ↓
User views Portfolio
       ↓
User invests in products
       ↓
Transactions recorded in database
       ↓
Admin can view all analytics
```

---

## 🧪 Testing with Curl

### Test Signup
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "phone": "+91-9876543210",
    "password": "test123"
  }'
```

### Test Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "test123"
  }'
```

### Test Protected Endpoint
```bash
curl -X GET http://localhost:5000/api/user/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

---

## 📝 Common Issues & Solutions

### "NO_TOKEN" Error
- User not logged in
- Token not included in header
- Token expired (24 hours)

**Solution:** Login again and store token in localStorage

### "INVALID_TOKEN" Error
- Token corrupted or malformed
- Token from wrong secret key
- Token tampered with

**Solution:** Clear localStorage and login again

### "USER_ALREADY_EXISTS" Error
- Email already registered
- Try different email or login

**Solution:** Use unique email or reset password

### "MISSING_FIELDS" Error
- One or more required fields empty
- Check field names in documentation

**Solution:** Provide all required fields

### Database Connection Error
- MySQL not running
- Wrong credentials in .env
- Wrong database name

**Solution:** Check .env and MySQL status

---

## 🎓 Learning Resources

### File Locations
- Backend API: `Backend/server.js`
- User API Service: `User_Client/src/services/api.ts`
- Admin API Service: `Admin_Client/src/services/api.ts`
- Database Schema: `Database/saviwealth_schema.sql`
- Full Documentation: `IMPLEMENTATION_COMPLETE.md`

### Understanding the Code Flow

1. **Frontend Component** calls API service function
2. **API Service** creates HTTP request with token
3. **Backend Express Server** receives request
4. **Middleware** validates token and permissions
5. **Business Logic** processes request
6. **Database** executes SQL query
7. **Response** sent back to frontend
8. **Component** updates state and UI

---

## ⚡ Performance Tips

1. **Use token caching** - Don't request profile on every page load
2. **Batch requests** - Use Promise.all() for multiple calls
3. **Pagination** - Request users/transactions in pages
4. **Connection pooling** - Backend already optimized
5. **Index optimization** - Database has proper indexes

---

## 🔐 Security Checklist

- ✅ Never commit credentials to git
- ✅ Always use HTTPS in production
- ✅ Never expose JWT secret
- ✅ Change default admin password
- ✅ Update CORS origins for production
- ✅ Enable HTTPS certificates
- ✅ Regular database backups

---

## 📞 Quick Contact Points

- **Backend Issues:** Check `server.js` console logs
- **Frontend Issues:** Check browser console (F12)
- **Database Issues:** Check MySQL error log
- **API Issues:** Use curl to test endpoints directly

---

**Happy Coding! 🚀**

For detailed information, see `IMPLEMENTATION_COMPLETE.md`
