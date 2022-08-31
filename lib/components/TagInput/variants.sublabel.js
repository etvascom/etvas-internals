"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _etvaskit = require("@etvas/etvaskit");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DEFAULT_STYLE = {
  color: 'textDefault',
  fontFamily: _etvaskit.etvasTheme.fonts.primary,
  fontWeight: _etvaskit.etvasTheme.fontWeights.lighter,
  fontSize: _etvaskit.etvasTheme.fontSizes[0],
  lineHeight: _etvaskit.etvasTheme.lineHeights.base,
  letterSpacing: _etvaskit.etvasTheme.letterSpacings.base
};

var ERROR_STYLE = _extends({}, DEFAULT_STYLE, {
  color: 'statusError'
});

var WARNING_STYLE = _extends({}, DEFAULT_STYLE, {
  color: 'statusWarning'
});

var VALID_STYLE = _extends({}, DEFAULT_STYLE);

var DISABLED_STYLE = _extends({}, DEFAULT_STYLE);

var _default = {
  "default": DEFAULT_STYLE,
  error: ERROR_STYLE,
  warning: WARNING_STYLE,
  valid: VALID_STYLE,
  disabled: DISABLED_STYLE
};
exports["default"] = _default;
module.exports = exports.default;