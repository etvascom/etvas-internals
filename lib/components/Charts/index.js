"use strict";

exports.__esModule = true;

var _LineChart = require("./LineChart");

Object.keys(_LineChart).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _LineChart[key]) return;
  exports[key] = _LineChart[key];
});

var _ColumnChart = require("./ColumnChart");

Object.keys(_ColumnChart).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ColumnChart[key]) return;
  exports[key] = _ColumnChart[key];
});

var _BarChart = require("./BarChart");

Object.keys(_BarChart).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BarChart[key]) return;
  exports[key] = _BarChart[key];
});