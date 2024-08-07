# Getting Started

This project consist of `backend` and `frontend` folders.

Frontend - **React**

Backend - **Node.js** + **Express**

Database - **PostgreSQL**

## Installation

### Backend

Navigate to **backend** folder and run `npm install` in your terminal to install all node modules for Node.js.

    cd backend

    npm install

### Frontend

Navigate to **frontend** folder and run `npm install` in your terminal to install all node modules for React.

    cd frontend

    npm install

## Usage

### Backend

Navigate to backend folder in your terminal, and run your servers

    cd backend

    nodemon index.js

Open `http://localhost:3001/` in your browser to see JSON response from backend.

### Frontend

Run `npm run dev` to start your frontend

    cd frontend

    npm run dev

Open `http://localhost:5173/` to see your app

### Database ( POSTGRES )

Start database as 'my_user' user

```
psql -d postgres -U my_user;
```

Navigate to database

```
\c my_database
```

Do stuff with PSQL commandcs

### Tutorial:

https://blog.logrocket.com/getting-started-postgres-react-app/
