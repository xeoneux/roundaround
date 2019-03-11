const dotenv = require("dotenv");
const webpack = require("webpack");
const withCSS = require("@zeit/next-css");

const { parsed } = dotenv.config();

module.exports = withCSS({
  webpack(configuration) {
    const env = new webpack.EnvironmentPlugin(parsed);
    configuration.plugins.push(env);
    return configuration;
  }
});
