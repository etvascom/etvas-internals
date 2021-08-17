"use strict";

exports.__esModule = true;

var _LineChart = require("./LineChart");

Object.keys(_LineChart).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _LineChart[key]) return;
  exports[key] = _LineChart[key];
});