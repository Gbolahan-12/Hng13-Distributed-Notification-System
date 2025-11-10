import { Router } from "express";
import { sendNotification } from "../controllers/notifications.controller";
import { validateNotification } from "../middlewares/validate-request";

const router = Router();
router.post("/send", validateNotification, sendNotification);
export default router;