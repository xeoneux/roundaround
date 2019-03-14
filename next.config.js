const dotenv = require("dotenv");
const webpack = require("webpack");
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withTM = require("next-transpile-modules");

const { parsed } = dotenv.config();

module.exports = withCSS(
  withSass(
    withTM({
      transpileModules: ["react-ui-cards"],
      webpack(config) {
        const env = new webpack.EnvironmentPlugin(parsed);
        config.plugins.push(env);
        return config;
      }
    })
  )
);
