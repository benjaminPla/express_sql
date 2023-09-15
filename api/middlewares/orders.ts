import { Request, Response, NextFunction } from "express";

export const validateOrderIdParam = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id || isNaN(Number(id))) {
    return res.status(400).send("Invalid order id");
  }
  next();
};

export const validateOrderUserIdField = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user_id } = req.body;
  if (!user_id) {
    return res.status(400).send("Missing user_id field");
  }
  if (isNaN(Number(user_id))) {
    return res.status(400).send("Invalid user_id");
  }
  next();
};

export const validateOrderOrderDateField = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { order_date } = req.body;
  if (!order_date) {
    return res.status(400).send("Missing order_date field");
  }

  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  if (!datePattern.test(order_date)) {
    return res.status(400).send("Invalid order_date format. Use YYYY-MM-DD");
  }
  next();
};

export const validateOrderOrderTotalField = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { order_total } = req.body;
  if (!order_total) {
    return res.status(400).send("Missing order_total field");
  }
  if (isNaN(Number(order_total))) {
    return res.status(400).send("Invalid order_total");
  }
  next();
};
