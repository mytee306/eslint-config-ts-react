"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var eslintrc = fs.readFileSync(path.join(__dirname, "..", ".eslintrc.json"), {
    encoding: "UTF-8"
});
var eslintrcWithExport = "module.exports = " + eslintrc;
fs.writeFileSync(path.join(__dirname, "..", "index.js"), eslintrcWithExport);
