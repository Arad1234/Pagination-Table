import express, { Request, Response } from "express";
import cors from "cors";
import usersRouter from "./src/routes/users.route";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", usersRouter);

app.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});
