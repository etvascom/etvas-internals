"use strict";

exports.__esModule = true;

var _useIsTruncated = require("./useIsTruncated");

Object.keys(_useIsTruncated).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useIsTruncated[key]) return;
  exports[key] = _useIsTruncated[key];
});