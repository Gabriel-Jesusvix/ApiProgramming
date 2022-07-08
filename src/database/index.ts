import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "postgres",
  host: "database_apischenduling",
  port: 5423,
  username: "apischenduling",
  password: "admin",
  database: "apischenduling",
});

dataSource.initialize();
