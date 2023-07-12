import express from "express";
import cors from "cors";
import usersRouter from "./src/routes/users.route";
import { errorHandler } from "./src/middlewares/error-handler";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", usersRouter);

app.use(errorHandler);
app.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});
