"use strict";

exports.__esModule = true;
exports.Tag = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _css = _interopRequireDefault(require("@styled-system/css"));

var _etvaskit = require("@etvas/etvaskit");

var _excluded = ["value", "disabled", "onRemove"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Tag = function Tag(_ref) {
  var value = _ref.value,
      disabled = _ref.disabled,
      onRemove = _ref.onRemove,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(Container, {
    disabled: disabled,
    rest: rest
  }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Typography, {
    color: "baseWhite",
    variant: "base14Light"
  }, value), !disabled && /*#__PURE__*/_react["default"].createElement(_etvaskit.Icon, {
    name: "close",
    size: 1,
    onClick: onRemove
  }));
};

exports.Tag = Tag;

var Container = _styledComponents["default"].span(function (_ref2) {
  var disabled = _ref2.disabled,
      rest = _ref2.rest;
  return (0, _css["default"])(_extends({
    display: 'inline-flex',
    justifyContent: 'space-between',
    px: 2,
    mr: 2,
    whiteSpace: 'nowrap',
    alignItems: 'center',
    width: 'fit-content',
    borderRadius: 3,
    backgroundColor: disabled ? 'baseGray' : 'etvas',
    color: 'baseWhite',
    '> svg': {
      cursor: 'pointer',
      pl: 2
    }
  }, rest));
});

Tag.propTypes = process.env.NODE_ENV !== "production" ? {
  value: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  onRemove: _propTypes["default"].func
} : {};