const { useState, useEffect } = React;

function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [courses, setCourses] = useState([]);
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetch('/api/v1/observees')
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  const selectStudent = (student) => {
    setSelectedStudent(student);
    setCourses([]);
    setAssignments([]);
    fetch(`/api/v1/students/${student.id}/courses`)
      .then(res => res.json())
      .then(data => setCourses(data));
  };

  const selectCourse = (course) => {
    fetch(`/api/v1/courses/${course.id}/assignments`)
      .then(res => res.json())
      .then(data => setAssignments(data));
  };

  return (
    <div>
      <h1>Canvas Parent Connect</h1>
      <StudentList students={students} onSelectStudent={selectStudent} />
      {selectedStudent && (
        <StudentDetails
          student={selectedStudent}
          courses={courses}
          assignments={assignments}
          onSelectCourse={selectCourse}
        />
      )}
    </div>
  );
}

function StudentList({ students, onSelectStudent }) {
  return (
    <div>
      <h2>Your Students</h2>
      <ul>
        {students.map(student => (
          <li key={student.id} onClick={() => onSelectStudent(student)}>
            {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function StudentDetails({ student, courses, assignments, onSelectCourse }) {
  return (
    <div>
      <h2>{student.name}'s Dashboard</h2>
      <h3>Courses</h3>
      <ul>
        {courses.map(course => (
          <li key={course.id} onClick={() => onSelectCourse(course)}>
            {course.name}
          </li>
        ))}
      </ul>
      {assignments.length > 0 && (
        <div>
          <h3>Assignments</h3>
          <ul>
            {assignments.map(assignment => (
              <li key={assignment.id}>
                {assignment.name} (Due: {assignment.due_at})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
