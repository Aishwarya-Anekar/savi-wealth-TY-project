const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '#Komal1234',
  database: 'saviwealth',
  waitForConnections: true,
  connectionLimit: 10
});

async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Connected to database');
    
    const [rows] = await connection.execute(
      'SELECT id, email, passwordHash FROM users WHERE email = ?',
      ['test@saviwealth.com']
    );
    
    console.log('User found:', rows);
    connection.release();
  } catch (err) {
    console.error('Error:', err.message);
  }
  process.exit(0);
}

testConnection();
