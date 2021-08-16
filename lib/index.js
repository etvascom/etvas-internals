"use strict";

exports.__esModule = true;
var _exportNames = {
  theme: true
};
exports.theme = void 0;

var _components = require("./components");

Object.keys(_components).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _components[key]) return;
  exports[key] = _components[key];
});

var _theme = require("./theme");

exports.theme = _theme.theme;