-- Create the students table
CREATE TABLE students (
    id BIGINT PRIMARY KEY,
    name VARCHAR(255),
    sortable_name VARCHAR(255),
    short_name VARCHAR(255),
    sis_user_id VARCHAR(255),
    login_id VARCHAR(255),
    avatar_url VARCHAR(255)
);

-- Create the courses table
CREATE TABLE courses (
    id BIGINT PRIMARY KEY,
    name VARCHAR(255),
    course_code VARCHAR(255),
    start_at TIMESTAMP,
    end_at TIMESTAMP,
    workflow_state VARCHAR(255)
);

-- Create the student_courses join table
CREATE TABLE student_courses (
    student_id BIGINT REFERENCES students(id),
    course_id BIGINT REFERENCES courses(id),
    PRIMARY KEY (student_id, course_id)
);

-- Create the assignments table
CREATE TABLE assignments (
    id BIGINT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    due_at TIMESTAMP,
    points_possible NUMERIC,
    grading_type VARCHAR(255),
    course_id BIGINT REFERENCES courses(id)
);
