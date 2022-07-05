import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  username: "apischenduling",
  password: "admin",
  database: "apischenduling",
});

// // load entities, establish db connection, sync schema, etc.
// await dataSource.connect()
