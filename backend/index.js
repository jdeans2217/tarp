require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const { students, courses, assignments } = require('./mockData');

app.get('/api/v1/observees', (req, res) => {
  res.json(students);
});

app.get('/api/v1/students/:student_id/courses', (req, res) => {
  const studentId = parseInt(req.params.student_id, 10);
  const studentCourses = courses.filter(course => course.student_id === studentId);
  res.json(studentCourses);
});

app.get('/api/v1/courses/:course_id/assignments', (req, res) => {
  const courseId = parseInt(req.params.course_id, 10);
  const courseAssignments = assignments.filter(assignment => assignment.course_id === courseId);
  res.json(courseAssignments);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
