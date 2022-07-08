import "reflect-metadata";
import "./database";
import express from "express";
import { router } from "./routes";
import swaggerUI from "swagger-ui-express";

const app = express();
app.use(express.json());
app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(require("./swagger.json"))
);
app.use(router);
app.listen(3333, () => {
  console.log("Server is running in port 3333");
});
