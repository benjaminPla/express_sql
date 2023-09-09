import { Request, Response } from "express";
import pool from "../../database/";
import { sendError } from "../utils";
import { IUser, IDatabaseResponse } from "../../interfaces";

export const getAllUsers = (req: Request, res: Response<IUser[]>): void => {
  pool.query("SELECT * FROM users WHERE 1;", (error: any, results: IUser[]) => {
    error ? sendError(error, res) : res.status(200).send(results);
  });
};

export const getUserById = (req: Request, res: Response<IUser>): void => {
  const { id } = req.params;
  const query = "SELECT * FROM users WHERE id = ?";

  pool.query(query, [id], (error: any, results: IUser) => {
    error ? sendError(error, res) : res.status(200).send(results);
  });
};

export const createUser = (
  req: Request,
  res: Response<IDatabaseResponse>
): void => {
  const { username, age } = req.body;
  const user = { username, age };

  pool.query(
    "INSERT INTO users SET ?",
    user,
    (error: any, results: IDatabaseResponse) => {
      error ? sendError(error, res) : res.status(200).send(results);
    }
  );
};

export const updateUserById = (
  req: Request,
  res: Response<IDatabaseResponse>
): void => {
  const { id } = req.params;
  const { username, age } = req.body;

  const query = `
    UPDATE users
    SET username = ?, age = ?
    WHERE id = ?;
  `;

  pool.query(
    query,
    [username, age, id],
    (error: any, results: IDatabaseResponse) => {
      error ? sendError(error, res) : res.status(200).send(results);
    }
  );
};

export const deleteUserById = (
  req: Request,
  res: Response<IDatabaseResponse>
): void => {
  const { id } = req.params;
  const query = "DELETE FROM users WHERE id = ?";

  pool.query(query, [id], (error: any, results: IDatabaseResponse) => {
    error ? sendError(error, res) : res.status(200).send(results);
  });
};
