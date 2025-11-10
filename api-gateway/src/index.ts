import express from "express";
import cors from "cors";
import { config } from "./config/env";
import notificationRoutes from "./routes/notifications.route";
import healthRoutes from "./routes/health.route";
import { errorHandler } from "./middlewares/error-handler";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/v1/notifications", notificationRoutes);
app.use("/v1/health", healthRoutes);
app.use(errorHandler);

app.listen(config.PORT, () => console.log(`🚀 API Gateway running on port ${config.PORT}`));