"use strict";

exports.__esModule = true;
exports.GridDot = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _etvaskit = require("@etvas/etvaskit");

var _templateObject;

var _excluded = ["color"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var GridDot = function GridDot(_ref) {
  var color = _ref.color,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(Dot, _extends({
    color: color
  }, props));
};

exports.GridDot = GridDot;
GridDot.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes["default"].string
} : {};
var Dot = (0, _styledComponents["default"])(_etvaskit.Box)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n  background-color: ", ";"])), (0, _etvaskit.themed)('GridDot'), function (_ref2) {
  var color = _ref2.color;
  return (0, _etvaskit.themed)("colors." + color);
});