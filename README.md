# Canvas Parent Connect

This project is a web application designed to help parents stay engaged with their children's education by integrating with the Canvas Learning Management System (LMS). The application will provide parents with a centralized view of their children's homework, upcoming tests, and other school-related information.

## Architecture

The application will be built with the following technologies:

*   **Frontend:** React
*   **Backend:** Node.js with Express
*   **Database:** PostgreSQL

## Canvas API Integration

The application will use the Canvas LMS API to fetch data. The following API endpoints are planned for the initial implementation:

*   **Authentication:** The application will use the OAuth2 flow for authentication.
*   **User Observees:** `GET /api/v1/users/:user_id/observees` will be used to get the list of students a parent is observing.
*   **Courses:** `GET /api/v1/users/:user_id/courses` will be used to get the list of courses for each student.
*   **Assignments:** `GET /api/v1/courses/:course_id/assignments` will be used to get the list of assignments for each course.

## Getting Started

### Prerequisites

*   Node.js and npm
*   PostgreSQL

### Installation

1.  Clone the repository.
2.  Install the backend dependencies: `cd backend && npm install`
3.  Install the frontend dependencies: `cd frontend && npm install`
4.  Set up the database by running the `db/init.sql` script.
5.  Create a `.env` file in the `backend` directory with the following variables:
    ```
    CANVAS_API_TOKEN=your_canvas_api_token
    DB_USER=your_db_user
    DB_HOST=your_db_host
    DB_DATABASE=your_db_name
    DB_PASSWORD=your_db_password
    DB_PORT=your_db_port
    ```

### Running the application

1.  Start the backend server: `cd backend && npm start`
2.  Start the frontend development server: `cd frontend && npm start`
