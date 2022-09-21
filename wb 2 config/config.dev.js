const path = require("path");
module.exports = {
  mode: "production",
  entry: {
    bundle: path.resolve(__dirname, "./src/index.js"),
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 4500,
  },
};
