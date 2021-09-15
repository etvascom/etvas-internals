"use strict";

exports.__esModule = true;
exports.TruncateGridInfo = exports.GridMainComponent = void 0;

var _react = _interopRequireWildcard(require("react"));

var _etvaskit = require("@etvas/etvaskit");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Tooltip = _interopRequireDefault(require("../Tooltip"));

var _GridDot = require("./GridDot");

var _excluded = ["children", "icon", "iconColor", "dotColor"],
    _excluded2 = ["children", "fontWeight", "color"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var GridMainComponent = function GridMainComponent(_ref) {
  var children = _ref.children,
      icon = _ref.icon,
      iconColor = _ref.iconColor,
      dotColor = _ref.dotColor,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_etvaskit.Flex, {
    alignItems: "center",
    width: "100%",
    pr: 2
  }, !!icon && /*#__PURE__*/_react["default"].createElement(_etvaskit.Flex, {
    alignItems: "center",
    mr: 3
  }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Icon, {
    name: icon,
    size: "medium",
    color: iconColor
  })), !!dotColor && /*#__PURE__*/_react["default"].createElement(_etvaskit.Flex, {
    alignItems: "center",
    mr: 4
  }, /*#__PURE__*/_react["default"].createElement(_GridDot.GridDot, {
    color: dotColor
  })), /*#__PURE__*/_react["default"].createElement(TruncateGridInfo, _extends({
    minWidth: "0",
    fontWeight: "normal"
  }, props), children));
};

exports.GridMainComponent = GridMainComponent;

var TruncateGridInfo = function TruncateGridInfo(_ref2) {
  var children = _ref2.children,
      fontWeight = _ref2.fontWeight,
      color = _ref2.color,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  var _useState = (0, _react.useState)(false),
      isTruncatedText = _useState[0],
      setIsTruncatedText = _useState[1];

  var ref = (0, _react.useRef)();
  (0, _react.useLayoutEffect)(function () {
    setIsTruncatedText(isTruncated(ref === null || ref === void 0 ? void 0 : ref.current));
  }, []);

  var text = /*#__PURE__*/_react["default"].createElement(_etvaskit.Typography, {
    variant: "labelSmall",
    color: color,
    truncate: true,
    ref: ref,
    fontWeight: fontWeight
  }, children);

  return /*#__PURE__*/_react["default"].createElement(_etvaskit.Flex, _extends({
    alignItems: "center",
    pr: 2
  }, props), isTruncatedText ? /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    width: "100%",
    content: children,
    distance: "50px"
  }, text) : text);
};

exports.TruncateGridInfo = TruncateGridInfo;

var isTruncated = function isTruncated(el) {
  return (el === null || el === void 0 ? void 0 : el.scrollWidth) > (el === null || el === void 0 ? void 0 : el.clientWidth);
};

TruncateGridInfo.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes["default"].any,
  fontWeight: _propTypes["default"].string,
  color: _propTypes["default"].string
} : {};
TruncateGridInfo.defaultProps = {
  fontWeight: 'lighter',
  color: 'textCardTitle'
};
GridMainComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes["default"].any,
  icon: _propTypes["default"].string,
  dotColor: _propTypes["default"].string,
  iconColor: _propTypes["default"].string
} : {};
GridMainComponent.defaultProps = {
  iconColor: 'inputIcon'
};