import express from "express";
import { getOrdersByUserId } from "../controllers/order.controller.js";

const router = express.Router();

router.route("/getAllOrders").get(getOrdersByUserId);

export default router;
