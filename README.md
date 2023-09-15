# MariaDB + MySQL

## Overview

This project is a demonstration of a highly scalable web application built using SQL, MariaDB (Docker), MySQL, Express.js with Express Router, TypeScript, and environment variables.
Postman is used for testing the API endpoints.

## Structure

```
├── api
│   ├── index.ts
│   ├── models
│   │   ├── Orders.ts
│   │   └── Users.ts
│   ├── routes
│   │   └── index.ts
│   └── utils
│   └── index.ts
├── database
│   ├── config.ts
│   ├── index.ts
│   ├── mock
│   │   ├── orders.sql
│   │   └── users.sql
│   └── tables
│   ├── orders.ts
│   └── users.ts
├── interfaces
│   └── index.ts
├── package-lock.json
├── package.json
└── tsconfig.json
```

## Database

This project utilizes both MariaDB (Docker) and MySQL databases. You can set up the databases by following these steps:

1. Start the MariaDB container:

```bash
docker run --name mariadb-container -e MYSQL_ROOT_PASSWORD=yourpassword -d -p 3306:3306 mariadb
```

Replace `yourpassword` with your desired root password.

2. Create a MySQL database using your preferred MySQL client and configure the connection in the .env file.

3. Populate the Database (Optional), populate the database with mock data provided in `./database/mock`.

## Configuration

To configure the project, follow these steps:

1. Create a .env file in the project root and add the necessary environment variables:

```env
API_PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=yourpassword
```

## Running Locally

To run the project locally, follow these steps:

1. Install project dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run start
```

## Endpoints

This project provides a RESTful API with the following endpoints for managing users and orders:

| Endpoint      | Description                                     | HTTP Method |
| ------------- | ----------------------------------------------- | ----------- |
| `/users`      | Retrieve a list of all users                    | GET         |
| `/users/:id`  | Retrieve a user by their unique ID              | GET         |
| `/users`      | Create a new user                               | POST        |
| `/users/:id`  | Update an existing user by their unique ID      | PUT         |
| `/users/:id`  | Delete a user by their unique ID                | DELETE      |
| `/orders`     | Retrieve a list of all orders with user details | GET         |
| `/orders/:id` | Retrieve an order by its unique ID              | GET         |
| `/orders`     | Create a new order                              | POST        |
| `/orders/:id` | Update an existing order by its unique ID       | PUT         |
| `/orders/:id` | Delete an order by its unique ID                | DELETE      |
