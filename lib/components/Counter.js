"use strict";

exports.__esModule = true;
exports.Counter = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _etvaskit = require("@etvas/etvaskit");

var _excluded = ["label", "value", "chipBgColor", "chipTextColor"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Counter = function Counter(_ref) {
  var label = _ref.label,
      value = _ref.value,
      chipBgColor = _ref.chipBgColor,
      chipTextColor = _ref.chipTextColor,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_etvaskit.Flex, _extends({
    alignItems: "center"
  }, props), /*#__PURE__*/_react["default"].createElement(_etvaskit.Typography, {
    variant: "base16Light",
    mr: 2
  }, label), /*#__PURE__*/_react["default"].createElement(_etvaskit.Chip, {
    color: chipBgColor,
    isRounded: true
  }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Typography, {
    variant: "base14Light",
    color: chipTextColor
  }, value)));
};

exports.Counter = Counter;
Counter.propTypes = process.env.NODE_ENV !== "production" ? {
  label: _propTypes["default"].node,
  value: _propTypes["default"].node,
  chipBgColor: _propTypes["default"].string,
  chipTextColor: _propTypes["default"].string
} : {};
Counter.defaultProps = {
  chipBgColor: 'etvas',
  chipTextColor: 'baseWhite'
};