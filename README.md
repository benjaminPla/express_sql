# MariaDB

## Overview

This project is a demonstration of a highly scalable web application built using SQL, MariaDB (Docker), MySQL, Express.js with Express Router, TypeScript, and environment variables.

## API and Database Structure

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
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=yourpassword
```

## API

This project provides a RESTful API with the following endpoints:

### Users

#### Get All Users

- **Endpoint:** `/users`
- **Description:** This endpoint retrieves a list of all users stored in the database.
- **HTTP Method:** GET

#### Get User by ID

- **Endpoint:** `/users/:id`
- **Description:** This endpoint retrieves a user by their unique ID.
- **HTTP Method:** GET

#### Create User

- **Endpoint:** `/users`
- **Description:** This endpoint allows the creation of a new user. It expects a JSON object with `username` and `age` properties in the request body.
- **HTTP Method:** POST

#### Update User by ID

- **Endpoint:** `/users/:id`
- **Description:** This endpoint allows updating an existing user by their unique ID. It expects a JSON object with `username` and `age` properties in the request body.
- **HTTP Method:** PUT

#### Delete User by ID

- **Endpoint:** `/users/:id`
- **Description:** This endpoint allows the deletion of a user by their unique ID.
- **HTTP Method:** DELETE

### Orders

### Get All Orders

- **Endpoint:** `/orders`
- **Description:** This endpoint retrieves a list of all orders along with user details.
- **HTTP Method:** GET

### Get Order by ID

- **Endpoint:** `/orders/:id`
- **Description:** This endpoint retrieves an order by its unique ID.
- **HTTP Method:** GET

### Create Order

- **Endpoint:** `/orders`
- **Description:** This endpoint allows the creation of a new order. It expects a JSON object with `user_id`, `order_date`, and `order_total` properties in the request body.
- **HTTP Method:** POST

### Update Order by ID

- **Endpoint:** `/orders/:id`
- **Description:** This endpoint allows updating an existing order by its unique ID. It expects a JSON object with `order_date` and `order_total` properties in the request body.
- **HTTP Method:** PUT

### Delete Order by ID

- **Endpoint:** `/orders/:id`
- **Description:** This endpoint allows the deletion of an order by its unique ID.
- **HTTP Method:** DELETE
