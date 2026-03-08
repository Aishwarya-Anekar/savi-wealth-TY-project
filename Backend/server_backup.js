/******************************************************************
 * SAVIWEALTH – BEHAVIORAL INVESTMENT BACKEND
 * ---------------------------------------------------------------
 * This server powers the SaviWealth behavioral finance platform.
 *
 * Modules implemented:
 * 1️⃣ Authentication (Signup / Login)
 * 2️⃣ Financial Profile Storage
 * 3️⃣ Behavioral Questionnaire Engine
 * 4️⃣ ML Digital Twin Integration (FastAPI)
 * 5️⃣ Anti‑Sell AI Recommendation Engine
 * 6️⃣ Crash Simulation Engine
 * 7️⃣ Admin Analytics
 * 8️⃣ ML Prediction Logging
 * 9️⃣ Investment Management
 * 🔟 Portfolio Management
 * 1️⃣1️⃣ Transaction Management
 * 1️⃣2️⃣ Advisor Management
 * 1️⃣3️⃣ User Dashboard
 *
 * Architecture:
 *
 * User
 *   ↓
 * Login / Signup
 *   ↓
 * Submit Financial Profile
 *   ↓
 * Behavioral Questionnaire
 *   ↓
 * Node Backend
 *   ↓
 * ML Microservice (FastAPI)
 *   ↓
 * Random Forest Model
 *   ↓
 * Panic Probability
 *   ↓
 * Anti‑Sell AI
 *   ↓
 * Investment Recommendation
 *
 ******************************************************************/

require("dotenv").config()

/* ============================================================
   IMPORT REQUIRED LIBRARIES
============================================================ */

const express = require("express")
const cors = require("cors")
const mysql = require("mysql2/promise")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const axios = require("axios")
const helmet = require("helmet")
const morgan = require("morgan")

const app = express()

/* ============================================================
   SECURITY & MIDDLEWARE
============================================================ */

app.use(helmet())
app.use(morgan("combined"))
app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:5000"
  ],
  credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* ============================================================
   DATABASE CONNECTION
============================================================ */

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "saviwealth",
  waitForConnections: true,
  connectionLimit: 10,
  enableTimeouts: false
})

/* ============================================================
   JWT AUTHENTICATION MIDDLEWARE
============================================================ */

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(" ")[1]

  if (!token) {
    return res.status(401).json({ message: "Token required", code: "NO_TOKEN" })
  }

  jwt.verify(token, process.env.JWT_SECRET || "saviwealth_super_secret", (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token", code: "INVALID_TOKEN" })
    }
    req.user = user
    next()
  })
}

/* ============================================================
   ADMIN AUTHORIZATION MIDDLEWARE
============================================================ */

function authorizeAdmin(req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin access required", code: "FORBIDDEN" })
  }
  next()
}

/* ============================================================
   ADVISOR AUTHORIZATION MIDDLEWARE
============================================================ */

function authorizeAdvisor(req, res, next) {
  if (!["admin", "advisor"].includes(req.user.role)) {
    return res.status(403).json({ message: "Advisor access required", code: "FORBIDDEN" })
  }
  next()
}

/* ============================================================
   ERROR HANDLER
============================================================ */

function errorHandler(err, req, res, next) {
  console.error("Error:", err)
  res.status(err.status || 500).json({
    message: err.message || "Internal server error",
    code: err.code || "SERVER_ERROR"
  })
}

/* ============================================================
   HEALTH CHECK
============================================================ */

app.get("/", (req, res) => {
  res.json({ message: "SaviWealth Backend Running ✅", version: "2.0.0" })
})

/* ============================================================
   AUTH MODULE
============================================================ */

/* SIGNUP - Create new user account */
app.post("/api/auth/signup", async (req, res) => {
  try {
    const { fullName, email, phone, password } = req.body

    // Validation
    if (!fullName || !email || !phone || !password) {
      return res.status(400).json({ 
        message: "All fields (fullName, email, phone, password) required",
        code: "MISSING_FIELDS"
      })
    }

    // Check if user exists
    const [existing] = await pool.execute(
      "SELECT id FROM users WHERE email = ?",
      [email]
    )

    if (existing.length > 0) {
      return res.status(409).json({ 
        message: "User with this email already exists",
        code: "USER_EXISTS"
      })
    }

    // Hash password
    const hash = await bcrypt.hash(password, 10)

    // Insert user
    const [result] = await pool.execute(
      `INSERT INTO users (fullName, email, phone, passwordHash, role, status, kycStatus)
       VALUES (?, ?, ?, ?, 'user', 'active', 'pending')`,
      [fullName, email, phone, hash]
    )

    // Create JWT token
    const token = jwt.sign(
      { id: result.insertId, role: "user" },
      process.env.JWT_SECRET || "saviwealth_super_secret",
      { expiresIn: "2h" }
    )

    res.status(201).json({ 
      message: "User created successfully ✅",
      token,
      user: {
        id: result.insertId,
        fullName,
        email,
        role: "user"
      }
    })
  } catch (err) {
    console.error("Signup Error:", err)
    res.status(500).json({ message: "Server error during signup", code: "SERVER_ERROR" })
  }
})

/* LOGIN - Authenticate user */
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ 
        message: "Email and password required",
        code: "MISSING_CREDENTIALS"
      })
    }

    const [rows] = await pool.execute(
      "SELECT id, fullName, email, passwordHash, role, status, kycStatus FROM users WHERE email = ?",
      [email]
    )

    if (!rows.length) {
      return res.status(401).json({ 
        message: "Invalid email or password",
        code: "INVALID_CREDENTIALS"
      })
    }

    const user = rows[0]

    // Check if account is suspended
    if (user.status === "suspended") {
      return res.status(403).json({ 
        message: "Account is suspended",
        code: "ACCOUNT_SUSPENDED"
      })
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash)

    if (!isMatch) {
      return res.status(401).json({ 
        message: "Invalid email or password",
        code: "INVALID_CREDENTIALS"
      })
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET || "saviwealth_super_secret",
      { expiresIn: "24h" }
    )

    // Update last login
    await pool.execute(
      "UPDATE users SET lastLogin = CURRENT_TIMESTAMP WHERE id = ?",
      [user.id]
    )

    res.json({
      message: "Login successful ✅",
      token,
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        kycStatus: user.kycStatus
      }
    })
  } catch (err) {
    console.error("Login Error:", err)
    res.status(500).json({ message: "Server error during login", code: "SERVER_ERROR" })
  }
})

/* GET CURRENT USER PROFILE */
app.get("/api/user/profile", authenticateToken, async (req, res) => {
  try {
    const [users] = await pool.execute(
      `SELECT id, fullName, email, phone, role, status, kycStatus, joinDate, aum, investmentCount, bio, profilePicture
       FROM users WHERE id = ?`,
      [req.user.id]
    )

    if (!users.length) {
      return res.status(404).json({ message: "User not found", code: "USER_NOT_FOUND" })
    }

    res.json({ user: users[0] })
  } catch (err) {
    console.error("Get Profile Error:", err)
    res.status(500).json({ message: "Server error", code: "SERVER_ERROR" })
  }
})

/* UPDATE USER PROFILE */
app.put("/api/user/profile", authenticateToken, async (req, res) => {
  try {
    const { fullName, phone, bio } = req.body

    await pool.execute(
      `UPDATE users SET fullName = ?, phone = ?, bio = ? WHERE id = ?`,
      [fullName || null, phone || null, bio || null, req.user.id]
    )

    res.json({ message: "Profile updated successfully ✅" })
  } catch (err) {
    console.error("Update Profile Error:", err)
    res.status(500).json({ message: "Server error", code: "SERVER_ERROR" })
  }
})


/* ============================================================
   FINANCIAL PROFILE MODULE
============================================================ */

app.post("/api/user/financial-profile", authenticateToken, async (req, res) => {
  try {
    const user_id = req.user.id
    const {
      age,
      income,
      portfolio_value,
      past_loss_percent,
      panic_history,
      investmentHorizon,
      riskTolerance,
      monthlyInvestmentCapacity,
      existingInvestments,
      financialGoals
    } = req.body

    // Validation
    if (!age || !income || !portfolio_value) {
      return res.status(400).json({ 
        message: "Missing required fields: age, income, portfolio_value",
        code: "MISSING_FIELDS"
      })
    }

    // Check if profile already exists
    const [existing] = await pool.execute(
      "SELECT id FROM financial_profiles WHERE user_id = ?",
      [user_id]
    )

    if (existing.length > 0) {
      // Update existing profile
      await pool.execute(
        `UPDATE financial_profiles SET 
         age = ?, income = ?, portfolio_value = ?, past_loss_percent = ?,
         panic_history = ?, investmentHorizon = ?, riskTolerance = ?,
         monthlyInvestmentCapacity = ?, existingInvestments = ?, financialGoals = ?
         WHERE user_id = ?`,
        [age, income, portfolio_value, past_loss_percent, panic_history,
         investmentHorizon, riskTolerance, monthlyInvestmentCapacity,
         existingInvestments, financialGoals, user_id]
      )
    } else {
      // Insert new profile
      await pool.execute(
        `INSERT INTO financial_profiles
         (user_id, age, income, portfolio_value, past_loss_percent, panic_history,
          investmentHorizon, riskTolerance, monthlyInvestmentCapacity, existingInvestments, financialGoals)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [user_id, age, income, portfolio_value, past_loss_percent, panic_history,
         investmentHorizon, riskTolerance, monthlyInvestmentCapacity,
         existingInvestments, financialGoals]
      )
    }

    res.json({ message: "Financial profile saved successfully ✅" })
  } catch (err) {
    console.error("Financial Profile Error:", err)
    res.status(500).json({ message: "Server error", code: "SERVER_ERROR" })
  }
})

/* GET FINANCIAL PROFILE */
app.get("/api/user/financial-profile", authenticateToken, async (req, res) => {
  try {
    const [profile] = await pool.execute(
      "SELECT * FROM financial_profiles WHERE user_id = ?",
      [req.user.id]
    )

    if (!profile.length) {
      return res.status(404).json({ 
        message: "Financial profile not found",
        code: "PROFILE_NOT_FOUND"
      })
    }

    res.json({ profile: profile[0] })
  } catch (err) {
    console.error("Get Financial Profile Error:", err)
    res.status(500).json({ message: "Server error", code: "SERVER_ERROR" })
  }
})


/* ============================================================
   MODULE 1 – BEHAVIORAL QUESTIONNAIRE ENGINE
============================================================ */

function calculateBehaviorScores(answers) {
  if (!Array.isArray(answers) || answers.length < 9) {
    throw new Error("Invalid answers array. Must have at least 9 answers")
  }

  return {
    emotional_score: (answers[0] || 0) + (answers[4] || 0) + (answers[7] || 0),
    risk_score: (answers[2] || 0) + (answers[5] || 0) + (answers[8] || 0),
    financial_score: (answers[1] || 0) + (answers[3] || 0) + (answers[6] || 0),
    horizon: answers[8] || 0
  }
}

/* ============================================================
   MODULE 2 – ML PREDICTION SERVICE
============================================================ */

async function getMLPrediction(featureVector) {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/predict",
      featureVector
    )
    return response.data
  } catch (error) {
    console.error("ML Service Error:", error.message)
    // Fallback response if ML service is down
    return {
      panic_probability: 0.3,
      regret_probability: 0.2,
      model_version: "fallback"
    }
  }
}

/* ============================================================
   MODULE 3 – ANTI‑SELL AI ENGINE
============================================================ */

function antiSellEngine(risk_score, panic_probability) {
  let recommendation

  if (risk_score <= 5) {
    recommendation = "Conservative Portfolio"
  } else if (risk_score <= 8) {
    recommendation = "Moderate Portfolio"
  } else {
    recommendation = "Aggressive Portfolio"
  }

  // Safety override if panic risk is high
  if (panic_probability > 0.6) {
    recommendation = "Safer Conservative Portfolio (Panic Risk Detected)"
  }

  return recommendation
}

/* ============================================================
   ASSESSMENT ENDPOINTS
============================================================ */

/* SUBMIT BEHAVIORAL ASSESSMENT */
app.post("/api/user/assessment", authenticateToken, async (req, res) => {
  try {
    const user_id = req.user.id
    const { answers } = req.body

    if (!answers || !Array.isArray(answers)) {
      return res.status(400).json({ 
        message: "Invalid input: answers must be an array",
        code: "INVALID_INPUT"
      })
    }

    // STEP 1 — CALCULATE BEHAVIORAL SCORES
    const scores = calculateBehaviorScores(answers)

    // STEP 2 — FETCH FINANCIAL PROFILE
    const [profiles] = await pool.execute(
      "SELECT * FROM financial_profiles WHERE user_id = ?",
      [user_id]
    )

    if (!profiles.length) {
      return res.status(400).json({
        message: "Financial profile missing. Submit profile first.",
        code: "PROFILE_MISSING"
      })
    }

    const financial = profiles[0]

    // STEP 3 — BUILD ML FEATURE VECTOR
    const mlInput = {
      age: financial.age,
      income: financial.income,
      portfolio_value: financial.portfolio_value,
      emotional_score: scores.emotional_score,
      risk_score: scores.risk_score,
      financial_score: scores.financial_score,
      horizon: scores.horizon,
      past_loss_percent: financial.past_loss_percent,
      panic_history: financial.panic_history
    }

    // STEP 4 — CALL ML MICROSERVICE
    const mlResult = await getMLPrediction(mlInput)

    const mlOutput = {
      panic_probability: mlResult.panic_probability || 0,
      regret_probability: mlResult.regret_probability || 0
    }

    // STEP 5 — ANTI SELL AI
    const recommendation = antiSellEngine(
      scores.risk_score,
      mlOutput.panic_probability
    )

    // STEP 6 — STORE ASSESSMENT
    await pool.execute(
      `INSERT INTO assessments
       (user_id, emotional_score, risk_score, financial_score, horizon, 
        panic_probability, regret_probability, recommendation)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user_id,
        scores.emotional_score,
        scores.risk_score,
        scores.financial_score,
        scores.horizon,
        mlOutput.panic_probability,
        mlOutput.regret_probability,
        recommendation
      ]
    )

    // STEP 7 — LOG ML PREDICTION
    await pool.execute(
      `INSERT INTO model_logs
       (user_id, panic_probability, regret_probability, model_version, inputFeatures)
       VALUES (?, ?, ?, ?, ?)`,
      [
        user_id,
        mlOutput.panic_probability,
        mlOutput.regret_probability,
        mlResult.model_version || "v1.0_rf",
        JSON.stringify(mlInput)
      ]
    )

    res.status(201).json({
      message: "Assessment completed ✅",
      scores,
      mlOutput,
      recommendation
    })
  } catch (err) {
    console.error("Assessment Error:", err)
    res.status(500).json({ message: "Server error", code: "SERVER_ERROR" })
  }
})

/* GET LATEST ASSESSMENT */
app.get("/api/user/assessment", authenticateToken, async (req, res) => {
  try {
    const [assessments] = await pool.execute(
      `SELECT * FROM assessments WHERE user_id = ? ORDER BY createdAt DESC LIMIT 1`,
      [req.user.id]
    )

    if (!assessments.length) {
      return res.status(404).json({ 
        message: "No assessment found",
        code: "ASSESSMENT_NOT_FOUND"
      })
    }

    res.json({ assessment: assessments[0] })
  } catch (err) {
    console.error("Get Assessment Error:", err)
    res.status(500).json({ message: "Server error", code: "SERVER_ERROR" })
  }
})

/* GET ASSESSMENT HISTORY */
app.get("/api/user/assessment-history", authenticateToken, async (req, res) => {
  try {
    const [assessments] = await pool.execute(
      `SELECT * FROM assessments WHERE user_id = ? ORDER BY createdAt DESC LIMIT 10`,
      [req.user.id]
    )

    res.json({ assessments })
  } catch (err) {
    console.error("Get Assessment History Error:", err)
    res.status(500).json({ message: "Server error", code: "SERVER_ERROR" })
  }
})

/* ============================================================
   MODULE 2 – ML PREDICTION SERVICE
============================================================ */

async function getMLPrediction(featureVector) {

  try {

    const response = await axios.post(
      "http://127.0.0.1:8000/predict",
      featureVector
    )

    return response.data

  } catch (error) {

    console.error("ML Service Error:", error.message)

    return {
      panic_probability: 0.3,
      model_version: "fallback"
    }
  }
}

/* ============================================================
   MODULE 3 – ANTI‑SELL AI ENGINE
============================================================ */

function antiSellEngine(risk_score, panic_probability) {

  let recommendation

  if (risk_score <= 5) {
    recommendation = "Conservative Portfolio"
  }
  else if (risk_score <= 8) {
    recommendation = "Moderate Portfolio"
  }
  else {
    recommendation = "Aggressive Portfolio"
  }

  // Safety override if panic risk high
  if (panic_probability > 0.6) {
    recommendation = "Safer Conservative Portfolio (Panic Risk Detected)"
  }

  return recommendation
}

/* ============================================================
   ASSESSMENT API
============================================================ */

app.post("/api/user/assessment", authenticateToken, async (req, res) => {

  try {

    const user_id = req.user.id
    const { answers } = req.body

    if (!answers || !Array.isArray(answers)) {
      return res.status(400).json({ message: "Invalid input" })
    }

    /* STEP 1 — CALCULATE BEHAVIORAL SCORES */

    const scores = calculateBehaviorScores(answers)

    /* STEP 2 — FETCH FINANCIAL PROFILE */

    const [profile] = await pool.execute(
      "SELECT * FROM financial_profiles WHERE user_id=?",
      [user_id]
    )

    if (!profile.length) {
      return res.status(400).json({
        message: "Financial profile missing. Submit profile first."
      })
    }

    const financial = profile[0]

    /* STEP 3 — BUILD ML FEATURE VECTOR */

    const mlInput = {

      age: financial.age,
      income: financial.income,
      portfolio_value: financial.portfolio_value,

      emotional_score: scores.emotional_score,
      risk_score: scores.risk_score,
      financial_score: scores.financial_score,
      horizon: scores.horizon,

      past_loss_percent: financial.past_loss_percent,
      panic_history: financial.panic_history
    }

    /* STEP 4 — CALL ML MICROSERVICE */

    const mlResult = await getMLPrediction(mlInput)

    const mlOutput = {
      panic_probability: mlResult.panic_probability,
      regret_probability: 0
    }

    /* STEP 5 — ANTI SELL AI */

    const recommendation = antiSellEngine(
      scores.risk_score,
      mlOutput.panic_probability
    )

    /* STEP 6 — STORE ASSESSMENT */

    await pool.execute(
      `INSERT INTO assessments
       (user_id,emotional_score,risk_score,financial_score,horizon,panic_probability,regret_probability)
       VALUES (?,?,?,?,?,?,?)`,
      [
        user_id,
        scores.emotional_score,
        scores.risk_score,
        scores.financial_score,
        scores.horizon,
        mlOutput.panic_probability,
        mlOutput.regret_probability
      ]
    )

    /* STEP 7 — LOG ML PREDICTION */

    await pool.execute(
      `INSERT INTO model_logs
       (user_id,panic_probability,model_version)
       VALUES (?,?,?)`,
      [
        user_id,
        mlOutput.panic_probability,
        "v1.0_rf"
      ]
    )

    res.status(201).json({
      message: "Assessment completed ✅",
      scores,
      mlOutput,
      recommendation
    })

  } catch (err) {

    console.error(err)
    res.status(500).json({ message: "Server error" })
  }
})

/* ============================================================
   MODULE 4 – CRASH SIMULATION ENGINE
============================================================ */

app.post("/api/user/simulate", authenticateToken, (req, res) => {

  const { portfolio_value } = req.body

  if (!portfolio_value) {
    return res.status(400).json({ message: "Portfolio value required" })
  }

  res.json({

    message: "Crash simulation complete",

    crash_10_percent: portfolio_value * 0.9,
    crash_20_percent: portfolio_value * 0.8,
    crash_30_percent: portfolio_value * 0.7
  })
})

/* ============================================================
   MODULE 5 – ADMIN ANALYTICS
============================================================ */

app.get("/api/admin/analytics", authenticateToken, async (req, res) => {

  try {

    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only" })
    }

    const [users] = await pool.execute(
      "SELECT COUNT(*) as total FROM users"
    )

    const [riskAvg] = await pool.execute(
      "SELECT AVG(risk_score) as avgRisk FROM assessments"
    )

    const [panicAvg] = await pool.execute(
      "SELECT AVG(panic_probability) as avgPanic FROM assessments"
    )

    res.json({
      total_users: users[0].total,
      average_risk_score: riskAvg[0].avgRisk || 0,
      average_panic_probability: panicAvg[0].avgPanic || 0
    })

  } catch (err) {

    res.status(500).json({ message: "Server error" })
  }
})

/* ============================================================
   SERVER START
============================================================ */

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})