const students = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
];

const courses = [
  { id: 101, name: 'Math 101', student_id: 1 },
  { id: 102, name: 'English 101', student_id: 1 },
  { id: 201, name: 'History 201', student_id: 2 },
  { id: 202, name: 'Science 201', student_id: 2 },
];

const assignments = [
  { id: 1, course_id: 101, name: 'Algebra Homework', due_at: '2024-09-01' },
  { id: 2, course_id: 101, name: 'Geometry Quiz', due_at: '2024-09-15' },
  { id: 3, course_id: 102, name: 'Essay on Shakespeare', due_at: '2024-09-10' },
  { id: 4, course_id: 201, name: 'Research Paper on WWII', due_at: '2024-09-20' },
  { id: 5, course_id: 202, name: 'Lab Report', due_at: '2024-09-12' },
];

module.exports = {
  students,
  courses,
  assignments,
};
