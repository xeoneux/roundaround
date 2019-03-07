import next from "next";
import express from "express";
import { config } from "dotenv";

import routes from "./routes";

config();

const app = express();
const server = next({
  dev: app.get("env")
});

(async () => {
  await server.prepare();
  app.use(routes.getRequestHandler(server));
  app.listen(process.env.PORT);
})();
