import express from "express";

import { isAuthenticated } from "../middleware/auth.middleware.js";
import {
  getOrderById,
  getUserOrders,
  placeOrder,
} from "../controller/order.controller.js";

const router = express.Router();

router.post("/orders", isAuthenticated, placeOrder);
router.get("/orders", isAuthenticated, getUserOrders);
router.get("/orders/:id", isAuthenticated, getOrderById);

export default router;
