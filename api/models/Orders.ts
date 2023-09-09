import { Request, Response } from "express";
import pool from "../../database";
import { sendError } from "../utils";
import { IOrder, IDatabaseResponse } from "../../interfaces";

export const getAllOrders = (req: Request, res: Response<IOrder[]>) => {
  const query = `
    SELECT u.id, u.username, u.age, o.order_id, o.order_date, o.order_total
    FROM users u
    LEFT JOIN orders o ON u.id = o.user_id
  `;

  pool.query(query, (error: any, results: IOrder[]) => {
    error ? sendError(error, res) : res.status(200).send(results);
  });
};

export const getOrderById = (req: Request, res: Response<IOrder>) => {
  const { id } = req.params;
  const query = "SELECT * FROM orders WHERE order_id = ?";

  pool.query(query, [id], (error: any, results: IOrder) => {
    error ? sendError(error, res) : res.status(200).send(results);
  });
};

export const createOrder = (req: Request, res: Response<IDatabaseResponse>) => {
  const { user_id, order_date, order_total } = req.body;
  const order = {
    user_id,
    order_date,
    order_total,
  };

  pool.query(
    "INSERT INTO orders SET ?",
    order,
    (error: any, results: IDatabaseResponse) => {
      error ? sendError(error, res) : res.status(200).send(results);
    }
  );
};

export const updateOrderById = (
  req: Request,
  res: Response<IDatabaseResponse>
) => {
  const { id } = req.params;
  const { order_date, order_total } = req.body;

  const query = `
    UPDATE orders
    SET order_date = ?, order_total = ?
    WHERE order_id = ?;
  `;

  pool.query(
    query,
    [order_date, order_total, id],
    (error: any, results: IDatabaseResponse) => {
      error ? sendError(error, res) : res.status(200).send(results);
    }
  );
};

export const deleteOrderById = (
  req: Request,
  res: Response<IDatabaseResponse>
) => {
  const { id } = req.params;
  const query = "DELETE FROM orders WHERE order_id = ?";

  pool.query(query, [id], (error: any, results: IDatabaseResponse) => {
    error ? sendError(error, res) : res.status(200).send(results);
  });
};
