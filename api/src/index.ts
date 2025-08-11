import express from "express";
import cors from "cors";
import sequelize from "./config/db";
import todoRoutes from "./routes/todo.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/todos", todoRoutes);

sequelize.sync().then(() => {
  console.log("Database connected");
  app.listen(3000, () => console.log("API running on http://localhost:3000"));
});
