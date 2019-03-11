import next from "next";
import express from "express";

import routes from "./routes";

const server = express();
const app = next({ dev: server.get("env") });

(async () => {
  await app.prepare();
  server.use(routes.getRequestHandler(app));
  server.listen(process.env.PORT);
})();
