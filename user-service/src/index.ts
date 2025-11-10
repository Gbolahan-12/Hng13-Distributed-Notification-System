import express from "express";
import userRoutes from "./routes/users.route";
import preferenceRoutes from "./routes/preferences.route";

const app = express();
app.use(express.json());
app.use("/v1/users", userRoutes);
app.use("/v1/preferences", preferenceRoutes);
app.listen(4001, () => console.log("👤 User Service running on 4001"));