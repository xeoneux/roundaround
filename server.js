import next from "next";
import express from "express";
import webpack from "webpack";
import { config } from "dotenv";
import withCSS from "@zeit/next-css";

import routes from "./routes";

const { parsed } = config();
const server = express();
const app = next({
  dev: server.get("env"),
  conf: withCSS({
    webpack(configuration) {
      const env = new webpack.EnvironmentPlugin(parsed);
      configuration.plugins.push(env);
      return configuration;
    }
  })
});

(async () => {
  await app.prepare();
  server.use(routes.getRequestHandler(app));
  server.listen(process.env.PORT);
})();
