const path = require("path");

module.exports = function override(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@stores": path.resolve(__dirname, "src/stores"),
    "@components": path.resolve(__dirname, "src/components"),
    "@pages": path.resolve(__dirname, "src/pages"),
    "@appTypes": path.resolve(__dirname, "src/types"),
    "@layouts": path.resolve(__dirname, "src/layouts"),
    "@data": path.resolve(__dirname, "src/data"),
  };
  return config;
};
