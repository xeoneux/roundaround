const dotenv = require("dotenv");
const webpack = require("webpack");
const withCSS = require("@zeit/next-css");

const { parsed } = dotenv.config();

module.exports = withCSS({
  webpack(config) {
    const env = new webpack.EnvironmentPlugin(parsed);
    config.plugins.push(env);
    return config;
  }
});
