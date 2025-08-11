export const BASE_URL = "http://localhost:8000";

//utils/apiPaths.js
export const API_PATHS = {
    AUTH:{
        REGISTER: "/api/auth/register", //Register a new user (Admin or Member)
        LOGIN: "/api/auth/login", //Authenticate user and return JWT token
        GET_PROFILE: "/api/auth/profile", // Get logged-in user details
    },

    USERS:{
        GET_ALL_USERS: "/api/users", //Get all users (Admin only)
        GET_USER_BY_ID: (userId) => `/api/users/${userId}`, //Get user by ID
        CREATE_USER: "/api/users", //Create a new user(Admin only)
        UPDATE_USER: (userId) => `/api/users/${userId}`, // Update user details
        DELETE_USER: (userId) => `/api/users/${userId}`, // Delete a user
    },

    TASKS:{
        GET_DASHBOARD_DATA: "/api/tasks/dashboard-data", // Get Dashboard Data
        GET_USER_DASHBOARD_DATA: "/api/tasks/user-dashboard-data", //Get User Dashboard Data
        GET_ALL_TASKS: "/api/tasks",// Get all tasks (Admin: all, User:only assigned tasks)
        GET_TASK_BY_ID:(taskID) => `/api/tasks/${taskID}`,//get all task by ID
        CREATE_TASK: "/api/tasks", // create a new task
        UPDATE_TASK: (taskID) => `/api/tasks/${taskID}`,// Update task details
        DELETE_TASK: (taskID) => `/api/tasks/${taskID}`, //Delete task(Admin only)

        UPDATE_TASK_STATUS:(taskID) => `/api/tasks/${taskID}/status`,//Update task
        UPDATE_TODO_CHECKLIST:(taskID) => `/api/tasks/${taskID}/todo`,//Updata task todo
    },

    REPORTS:{
        EXPORT_TASKS: "/api/reports/export/tasks", //Download all tasks as an Excel
        EXPORT_USERS: "/api/reports/export/users", //Download user-task report 
    },  

    IMAGE:{
        UPLOAD_IMAGE:"/api/auth/upload-image",
    },  
}