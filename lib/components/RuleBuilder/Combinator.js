"use strict";

exports.__esModule = true;
exports.Combinator = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _css = _interopRequireDefault(require("@styled-system/css"));

var _etvaskit = require("@etvas/etvaskit");

var _excluded = ["options", "disabled", "value", "onChange"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Combinator = function Combinator(_ref) {
  var options = _ref.options,
      disabled = _ref.disabled,
      currentValue = _ref.value,
      onChange = _ref.onChange,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  return options.map(function (_ref2) {
    var value = _ref2.value,
        label = _ref2.label;
    return /*#__PURE__*/_react["default"].createElement(_etvaskit.Touchable, _extends({
      key: value,
      onClick: function onClick() {
        return onChange(value);
      },
      disabled: disabled
    }, rest), /*#__PURE__*/_react["default"].createElement(CustomChip, {
      isSelected: value === currentValue,
      disabled: disabled
    }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Typography, {
      variant: "base12Bold",
      color: "inherit"
    }, label)));
  });
};

exports.Combinator = Combinator;

var CustomChip = _styledComponents["default"].div(function (_ref3) {
  var isSelected = _ref3.isSelected,
      disabled = _ref3.disabled;
  return (0, _css["default"])({
    py: 1,
    px: 2,
    mr: 2,
    whiteSpace: 'nowrap',
    alignItems: 'center',
    width: 'fit-content',
    borderRadius: 3,
    backgroundColor: isSelected ? disabled ? 'baseGrayLight' : 'etvasLight' : 'transparent',
    color: isSelected ? 'baseWhite' : 'etvasDark',
    opacity: isSelected ? 1 : 0.2
  });
});

Combinator.propTypes = process.env.NODE_ENV !== "production" ? {
  disabled: _propTypes["default"].bool,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    value: _propTypes["default"].string,
    label: _propTypes["default"].node
  })).isRequired
} : {};