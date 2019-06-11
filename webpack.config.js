const path = require("path");

const ENRTY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  entry: ENRTY_FILE,
  output: {
    path: OUTPUT_DIR,
    filename: "[name].[format]"
  }
};

module.exports = config;
