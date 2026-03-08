# SaviWealth Database Documentation

## Overview
This document provides complete information about the MySQL database setup, schema, and configuration for the SaviWealth Behavioral Investment Platform.

---

## 1. Database Setup

### Prerequisites
- MySQL Server 8.0 or higher
- MySQL Client or MySQL Workbench
- Node.js backend environment

### Installation Steps

#### 1.1 Create Database and Import Schema

```bash
# Open MySQL command line
mysql -u root -p

# Create database
CREATE DATABASE IF NOT EXISTS saviwealth;

# Use the database
USE saviwealth;

# Import the schema from SQL file
SOURCE path/to/saviwealth_schema.sql;
```

Or use a GUI tool:
1. Open MySQL Workbench
2. Create new database: `saviwealth`
3. Import `saviwealth_schema.sql` file
4. Execute all scripts

### 1.2 Configure Environment Variables

Create `.env` file in the Backend directory:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=saviwealth
JWT_SECRET=saviwealth_super_secret
```

### 1.3 Install Dependencies

```bash
cd Backend
npm install
```

### 1.4 Start the Server

```bash
npm start
```

---

## 2. Database Schema Overview

### 2.1 Core Tables

#### **users** table
Stores all user information (regular users, admins, advisors).

```sql
Fields:
- id (PRIMARY KEY, AUTO_INCREMENT)
- fullName (VARCHAR)
- email (UNIQUE)
- phone
- passwordHash (bcrypt hashed)
- role ENUM('user', 'admin', 'advisor')
- status ENUM('active', 'inactive', 'suspended')
- kycStatus ENUM('verified', 'pending', 'rejected')
- joinDate (TIMESTAMP)
- lastLogin (TIMESTAMP)
- isEmailVerified (BOOLEAN)
- isPhoneVerified (BOOLEAN)
- aum DECIMAL(15,2) - Assets Under Management
- investmentCount INT
- profilePicture (VARCHAR - URL)
- bio (TEXT)
- createdAt, updatedAt (TIMESTAMPS)
```

**Indexes:**
- idx_email (for fast login)
- idx_role (for admin queries)
- idx_status (for user filtering)
- idx_kycStatus (for KYC tracking)

---

#### **financial_profiles** table
Stores user's financial information for ML analysis.

```sql
Fields:
- id (PRIMARY KEY)
- user_id (FOREIGN KEY) - UNIQUE
- age INT
- income DECIMAL(15,2)
- portfolio_value DECIMAL(15,2)
- past_loss_percent DECIMAL(5,2)
- panic_history BOOLEAN
- investmentHorizon ENUM('short', 'medium', 'long')
- riskTolerance ENUM('low', 'medium', 'high')
- monthlyInvestmentCapacity DECIMAL(15,2)
- existingInvestments TEXT (JSON)
- financialGoals TEXT (JSON)
- createdAt, updatedAt (TIMESTAMPS)
```

---

#### **assessments** table
Stores behavioral assessment responses and ML predictions.

```sql
Fields:
- id (PRIMARY KEY)
- user_id (FOREIGN KEY)
- emotional_score INT
- risk_score INT
- financial_score INT
- horizon INT
- panic_probability DECIMAL(5,4) - 0 to 1
- regret_probability DECIMAL(5,4) - 0 to 1
- recommendation VARCHAR(255)
- assessmentStatus ENUM('pending', 'completed', 'reviewed')
- createdAt, updatedAt (TIMESTAMPS)
```

---

#### **investments** table
Available investment products.

```sql
Fields:
- id (PRIMARY KEY)
- name VARCHAR(255)
- description TEXT
- riskLevel ENUM('low', 'medium', 'high')
- expectedReturn DECIMAL(5,2)
- status ENUM('active', 'inactive')
- minInvestment DECIMAL(15,2)
- investorCount INT
- totalInvested DECIMAL(15,2)
- investmentType ENUM('mutual_fund', 'equity', 'bonds', 'fixed_income', 'insurance', 'real_estate', 'pms')
- currentNAV DECIMAL(10,4)
- yearlyReturn DECIMAL(5,2)
- rating DECIMAL(3,2)
- fundManager VARCHAR(255)
- createdAt, updatedAt (TIMESTAMPS)
```

---

#### **portfolios** table
User's investment portfolio allocation.

```sql
Fields:
- id (PRIMARY KEY)
- user_id (FOREIGN KEY) - UNIQUE
- stocks DECIMAL(5,2) - percentage
- mutualFunds DECIMAL(5,2)
- bonds DECIMAL(5,2)
- fixedIncome DECIMAL(5,2)
- insurance DECIMAL(5,2)
- realEstate DECIMAL(5,2)
- others DECIMAL(5,2)
- totalValue DECIMAL(15,2) - current portfolio value
- monthlyReturn DECIMAL(5,2) - percentage
- yearlyReturn DECIMAL(5,2) - percentage
- lastRebalanceDate TIMESTAMP
- createdAt, updatedAt (TIMESTAMPS)
```

---

#### **user_investments** table
Mapping of users to their individual investments.

```sql
Fields:
- id (PRIMARY KEY)
- user_id (FOREIGN KEY)
- investment_id (FOREIGN KEY)
- investmentAmount DECIMAL(15,2) - total amount invested
- units INT - number of units/shares
- purchasePrice DECIMAL(10,4)
- currentPrice DECIMAL(10,4)
- currentValue DECIMAL(15,2) - GENERATED (units * currentPrice)
- investmentDate TIMESTAMP
- status ENUM('active', 'matured', 'exited')
- sipFrequency ENUM('monthly', 'quarterly', 'half_yearly', 'yearly', 'one_time')
- sipAmount DECIMAL(15,2) - for SIP investments
- nextSIPDate DATE
- createdAt, updatedAt (TIMESTAMPS)

UNIQUE KEY: (user_id, investment_id)
```

---

#### **transactions** table
All user transactions (buy, sell, deposit, withdrawal, etc.).

```sql
Fields:
- id (PRIMARY KEY)
- user_id (FOREIGN KEY)
- investment_id (FOREIGN KEY) - nullable
- transactionType ENUM('buy', 'sell', 'deposit', 'withdrawal', 'dividend', 'interest', 'rebalance')
- amount DECIMAL(15,2)
- quantity DECIMAL(10,4)
- pricePerUnit DECIMAL(10,4)
- charges DECIMAL(15,2) - transaction charges
- netAmount DECIMAL(15,2) - GENERATED (amount - charges)
- transactionStatus ENUM('success', 'pending', 'failed')
- paymentMethod VARCHAR(100) - e.g., 'account', 'credit_card'
- referenceNumber VARCHAR(100)
- remarks TEXT
- transactionDate TIMESTAMP
- completionDate TIMESTAMP
- createdAt, updatedAt (TIMESTAMPS)

Indexes:
- idx_user_id, idx_transactionType, idx_status
- idx_transaction_user_date (compound index)
```

---

#### **crash_simulations** table
Market crash simulation records for panic testing.

```sql
Fields:
- id (PRIMARY KEY)
- user_id (FOREIGN KEY)
- portfolioValue DECIMAL(15,2)
- crash10Percent DECIMAL(15,2) - GENERATED (value * 0.9)
- crash20Percent DECIMAL(15,2) - GENERATED (value * 0.8)
- crash30Percent DECIMAL(15,2) - GENERATED (value * 0.7)
- crash50Percent DECIMAL(15,2) - GENERATED (value * 0.5)
- panicRisk DECIMAL(5,4)
- recommendation VARCHAR(255)
- createdAt TIMESTAMP
```

---

### 2.2 Additional Tables

#### **advisors** table
Financial advisors information.

```sql
Fields:
- id (PRIMARY KEY)
- user_id (FOREIGN KEY) - UNIQUE
- expertise JSON array - ['Equity', 'Mutual Funds']
- assignedClients INT
- rating DECIMAL(3,2)
- yearsOfExperience INT
- certifications JSON
- bio TEXT
- officeLocation VARCHAR(255)
- consultationFee DECIMAL(10,2)
- isVerified BOOLEAN
```

---

#### **advisor_clients** table
Mapping of advisors to their clients.

```sql
Fields:
- advisor_id (FOREIGN KEY)
- client_id (FOREIGN KEY)
- assignedDate TIMESTAMP
- status ENUM('active', 'inactive')
- notes TEXT

UNIQUE KEY: (advisor_id, client_id)
```

---

#### **notifications** table
System notifications for users.

```sql
Fields:
- id (PRIMARY KEY)
- user_id (FOREIGN KEY) - nullable for broadcasts
- title VARCHAR(255)
- message TEXT
- notificationType ENUM('info', 'success', 'warning', 'danger')
- isRead BOOLEAN
- readAt TIMESTAMP
- createdAt TIMESTAMP
```

---

#### **kyc_documents** table
User KYC documentation.

```sql
Fields:
- id (PRIMARY KEY)
- user_id (FOREIGN KEY)
- documentType ENUM('pan', 'aadhar', 'passport', 'driving_license', 'address_proof')
- documentNumber VARCHAR(100)
- documentUrl VARCHAR(255) - storage path
- verificationStatus ENUM('pending', 'verified', 'rejected')
- verifiedBy INT - admin user ID
- verificationDate TIMESTAMP
- expiryDate DATE
- remarks TEXT

UNIQUE KEY: (user_id, documentType)
```

---

#### **model_logs** table
ML model prediction logs for auditing.

```sql
Fields:
- id (PRIMARY KEY)
- user_id (FOREIGN KEY)
- panic_probability DECIMAL(5,4)
- regret_probability DECIMAL(5,4)
- model_version VARCHAR(50)
- inputFeatures JSON - feature vector used
- predictionResult JSON - model output
- executionTime INT - milliseconds
- createdAt TIMESTAMP
```

---

#### **articles** table
Blog articles and educational content.

```sql
Fields:
- id (PRIMARY KEY)
- title VARCHAR(255)
- slug VARCHAR(255) - UNIQUE URL-friendly name
- content LONGTEXT - rich HTML content
- excerpt TEXT
- category VARCHAR(100)
- author_id (FOREIGN KEY) - nullable
- coverImage VARCHAR(255)
- readTime INT - estimated minutes
- viewCount INT
- isPublished BOOLEAN
- publishedAt TIMESTAMP
- createdAt, updatedAt (TIMESTAMPS)
```

---

#### **consultation_bookings** table
Advisor consultation booking management.

```sql
Fields:
- id (PRIMARY KEY)
- client_id (FOREIGN KEY)
- advisor_id (FOREIGN KEY)
- consultationType ENUM('initial', 'portfolio_review', 'planning', 'tax_planning', 'other')
- scheduledDate DATETIME
- duration INT - minutes
- consultationMode ENUM('call', 'video', 'in_person')
- status ENUM('scheduled', 'completed', 'cancelled', 'rescheduled')
- notes TEXT
- meetingLink VARCHAR(255)
- feedback DECIMAL(3,2)
- feedbackComments TEXT
- createdAt, updatedAt (TIMESTAMPS)
```

---

#### **audit_logs** table
System audit trail for compliance.

```sql
Fields:
- id (PRIMARY KEY)
- user_id (FOREIGN KEY) - nullable
- action VARCHAR(255) - e.g., 'CREATE_USER', 'UPDATE_PORTFOLIO'
- resource VARCHAR(100) - e.g., 'USER', 'INVESTMENT'
- resourceId INT - ID of affected resource
- beforeData JSON - previous data
- afterData JSON - new data
- ipAddress VARCHAR(45)
- userAgent VARCHAR(500)
- status ENUM('success', 'failure')
- createdAt TIMESTAMP
```

---

#### **settings** table
Platform configuration and settings.

```sql
Fields:
- id (PRIMARY KEY)
- settingKey VARCHAR(255) - UNIQUE, e.g., 'min_investment_amount'
- settingValue LONGTEXT
- description TEXT
- isPublic BOOLEAN
- updatedAt TIMESTAMP
```

---

## 3. Database Relationships

```
users (1) ──── (many) financial_profiles
users (1) ──── (many) assessments
users (1) ──── (many) portfolios
users (1) ──── (many) user_investments
users (1) ──── (many) transactions

investments (1) ──── (many) user_investments
investments (1) ──── (many) transactions

portfolios (1) ──── (many) user_investments

users [admin] (1) ──── (many) kyc_documents [as verifiedBy]

users [advisor] (1) ──── (1) advisors
advisors (1) ──── (many) advisor_clients

articles (many) ──── (1) users [author]
```

---

## 4. Backend API Connection

The backend uses the `mysql2/promise` package for async database operations.

### 4.1 Connection Pool

```javascript
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  enableTimeouts: false
})
```

### 4.2 Sample Query Patterns

#### Get user profile:
```javascript
const [users] = await pool.execute(
  `SELECT id, fullName, email, phone, role FROM users WHERE id = ?`,
  [user_id]
)
```

#### Create investment:
```javascript
const [result] = await pool.execute(
  `INSERT INTO user_investments (user_id, investment_id, investmentAmount, units)
   VALUES (?, ?, ?, ?)`,
  [user_id, investment_id, amount, units]
)
```

#### Get portfolio with investments:
```javascript
const [portfolio] = await pool.execute(
  `SELECT ui.*, i.name, i.riskLevel FROM user_investments ui
   JOIN investments i ON ui.investment_id = i.id
   WHERE ui.user_id = ? AND ui.status = 'active'`,
  [user_id]
)
```

---

## 5. Admin and Advisor Features

### 5.1 Admin Access
- View all users and their KYC status
- View all transactions and analytics
- Manage investments and products
- Verify KYC documents
- Access system audit logs

### 5.2 Advisor Features
- View assigned clients only
- Schedule consultations
- Access client portfolios
- Provide investment recommendations
- Track consultation feedback

---

## 6. Data Security

### 6.1 Password Hashing
Passwords are hashed using bcryptjs (10 salt rounds):
```javascript
const hash = await bcrypt.hash(password, 10)
```

### 6.2 JWT Token Authentication
All protected endpoints require JWT token in Authorization header:
```
Authorization: Bearer <token>
```

Default expiration: 24 hours for users, 2 hours for special operations

### 6.3 SQL Injection Prevention
All queries use parameterized statements:
```javascript
pool.execute("SELECT * FROM users WHERE email = ?", [email])
```

---

## 7. Backup and Maintenance

### 7.1 Regular Backups
```bash
# Full database backup
mysqldump -u root -p saviwealth > saviwealth_backup.sql

# Backup specific table
mysqldump -u root -p saviwealth transactions > transactions_backup.sql
```

### 7.2 Restore from Backup
```bash
mysql -u root -p saviwealth < saviwealth_backup.sql
```

### 7.3 Index Optimization
The schema includes optimized indexes on frequently queried columns:
- user email lookup
- transaction filtering
- notification status checks
- investment type searches

---

## 8. Sample Data

The schema includes:
- 1 default admin user (admin@saviwealth.com / password: admin123)
- 8 sample investments of different types and risk levels

To add more sample data:
```sql
INSERT INTO users (fullName, email, phone, passwordHash, role, status, kycStatus)
VALUES ('John Doe', 'john@example.com', '+91-9876543210', 
        '$2a$10$...', 'user', 'active', 'verified');
```

---

## 9. Performance Considerations

### 9.1 Connection Pooling
- Maximum 10 concurrent connections
- Prevents resource exhaustion
- Automatic connection reuse

### 9.2 Query Optimization
- Compound indexes on frequently joined tables
- GENERATED columns for calculated fields (currentValue, netAmount)
- Pagination for large result sets

### 9.3 Transaction Recording
Audit logs capture all significant data changes for compliance

---

## 10. Troubleshooting

### Connection Issues
```
Error: connect ECONNREFUSED 127.0.0.1:3306
Solution: Ensure MySQL server is running
```

### Authentication Issues
```
Error: Access denied for user 'root'@'localhost'
Solution: Check DB_USER and DB_PASSWORD in .env
```

### Data Integrity
- Foreign key constraints ensure referential integrity
- UNIQUE constraints prevent duplicate emails and KYC documents
- Generated columns automatically update calculated values

---

## 11. Future Enhancements

Planned database features:
- Real-time transaction monitoring
- Advanced analytics dashboards
- Reporting system with scheduled exports
- Multi-currency support
- Blockchain integration for transaction verification
- Advanced caching with Redis

---

## Support

For database-related issues:
1. Check MySQL logs: `/var/log/mysql/error.log`
2. Verify connection credentials
3. Ensure all migrations are applied
4. Check database user permissions

---

**Last Updated:** March 5, 2026
**Version:** 2.0.0
**Status:** Production Ready
