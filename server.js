import next from "next";
import express from "express";

import routes from "./routes";

const app = express();
const server = next({
  dev: app.get("env")
});

(async () => {
  await server.prepare();
  app.use(routes.getRequestHandler(server));
  app.listen();
})();
