# Car Management System

This project is a full-stack car management system with a React frontend and a Node (Nest) backend. It includes features for user authentication, car management, and category management.

## Project Structure

car-management-system/
├── frontend/ # React app
│ ├── public/
│ ├── src/
│ ├── .env # Environment variables
│ ├── package.json
│ └── ...
├── backend/ # NestJS app
│ ├── src/
│ ├── .env # Environment variables
│ ├── package.json
│ └── ...
├── .gitignore
├── README.md
└── package.json # Root-level scripts and dependencies 

## Prerequisites

- Node.js 
- npm  (package manager)

## Setup
### root
1. **Install concurrently package in root directory:**
```bash
npm install concurrently --save-dev
```


### Backend

1. **Navigate to the backend directory:**

    ```bash
    cd backend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create an `.env` file** in the `backend` directory and add necessary environment variables. Refer to `.env.example` for required variables.


### Frontend

1. **Navigate to the frontend directory:**

    ```bash
    cd frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create an `.env` file** in the `frontend` directory and add necessary environment variables such as API base URL. Refer to `.env.example` for the required variables.

4. **For running frontend and backend concurrently**
## stay  or navigate back in the root folder

    ```bash
    npm  start
    ```

   This will run both backend and frontend concurrently

5. **For running frontend and backend separately**


## Run the frontend app:**
**Navigate to the vehicle-dashboard directory:**

    ```bash
    cd vehicle-dashboard
    ```
**Then run this**

    ```bash
    npm run dev
    ```

   The frontend application will be running on `http://localhost:5173` by default (you can change this in the `.env` file).

## Backend (cd into vehicle-backend)

**Navigate to the vehicle-backend directory:**

    ```bash
    cd vehicle-backend
    ```

**Then write this**

    ```bash
    npm run start:dev
    ```

   The backend server will be running on `http://localhost:3000` by default (you can change this in the `.env` file).
