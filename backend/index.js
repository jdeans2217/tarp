require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.get('/api/v1/observees', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM students');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error querying the database');
  }
});

app.get('/api/v1/students/:student_id/courses', async (req, res) => {
  try {
    const { student_id } = req.params;
    const result = await pool.query(
      'SELECT c.* FROM courses c JOIN student_courses sc ON c.id = sc.course_id WHERE sc.student_id = $1',
      [student_id]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error querying the database');
  }
});

app.get('/api/v1/courses/:course_id/assignments', async (req, res) => {
  try {
    const { course_id } = req.params;
    const result = await pool.query('SELECT * FROM assignments WHERE course_id = $1', [course_id]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error querying the database');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
