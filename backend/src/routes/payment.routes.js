import express from "express";
import { paymentCheckout, paymentVerification } from "../controllers/payment.controller.js";

const router = express.Router();

router.route("/checkout").post(paymentCheckout);
router.route("/verification").post(paymentVerification);

export default router;