"use strict";

exports.__esModule = true;
exports.GridButton = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _etvaskit = require("@etvas/etvaskit");

var _templateObject;

var _excluded = ["children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var GridButton = function GridButton(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(StyledButton, _extends({
    variant: "link"
  }, props), children);
};

exports.GridButton = GridButton;
GridButton.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes["default"].any
} : {};
var StyledButton = (0, _styledComponents["default"])(_etvaskit.Button)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  font-weight: 800;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.4px;\n"])));