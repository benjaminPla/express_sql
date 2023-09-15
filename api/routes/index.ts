import express, { Router } from "express";
import {
  createUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserById,
} from "../models/Users";
import {
  createOrder,
  deleteOrderById,
  getAllOrders,
  getOrderById,
  updateOrderById,
} from "../models/Orders";
import {
  validateUserIdParam,
  validateUserUsernameField,
  validateUserAgeField,
} from "../middlewares/users";
import {
  validateOrderIdParam,
  validateOrderUserIdField,
  validateOrderOrderDateField,
  validateOrderOrderTotalField,
} from "../middlewares/orders";

const router: Router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/:id", validateUserIdParam, getUserById);
router.post(
  "/users",
  validateUserUsernameField,
  validateUserAgeField,
  createUser
);
router.put(
  "/users/:id",
  validateUserIdParam,
  validateUserUsernameField,
  validateUserAgeField,
  updateUserById
);
router.delete("/users/:id", validateUserIdParam, deleteUserById);

router.get("/orders", getAllOrders);
router.get("/orders/:id", validateOrderIdParam, getOrderById);
router.post(
  "/orders",
  validateOrderUserIdField,
  validateOrderOrderDateField,
  validateOrderOrderTotalField,
  createOrder
);
router.put(
  "/orders/:id",
  validateUserIdParam,
  validateOrderOrderDateField,
  validateOrderOrderTotalField,
  updateOrderById
);
router.delete("/orders/:id", validateOrderIdParam, deleteOrderById);

export default router;
