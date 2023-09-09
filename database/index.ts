import pool from "./config";
import { MysqlError, Connection } from "mysql";
import { createUserTableQuery } from "./tables/users.js";
import { createOrdersTableQuery } from "./tables/orders.js";

pool.getConnection((error: MysqlError, connection: Connection): void => {
  if (error) {
    console.error("Database connection failed:", error);
  } else {
    console.log("Connected to the database");
  }
});

pool.on("error", (error: MysqlError): void => {
  console.error("Database error:", error);
});

pool.query(createUserTableQuery, (error: MysqlError): void => {
  if (error) {
    console.error("Error creating user table: ", error);
  } else {
    console.log("User table created or already exists");
  }
});

pool.query(createOrdersTableQuery, (error: MysqlError): void => {
  if (error) {
    console.error("Error creating user table: ", error);
  } else {
    console.log("Orders table created or already exists");
  }
});

export default pool;
