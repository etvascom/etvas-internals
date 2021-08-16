"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _etvaskit = require("@etvas/etvaskit");

var _templateObject, _templateObject2;

var _excluded = ["placement", "children", "content", "delay", "distance"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Tooltip = function Tooltip(_ref) {
  var placement = _ref.placement,
      children = _ref.children,
      content = _ref.content,
      delay = _ref.delay,
      distance = _ref.distance,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = (0, _react.useState)(false),
      isTooltipShown = _useState[0],
      setIsToolTipShown = _useState[1];

  var timeout;

  var showTip = function showTip() {
    timeout = setTimeout(function () {
      setIsToolTipShown(true);
    }, delay || 350);
  };

  var hideTip = function hideTip() {
    clearInterval(timeout);
    setIsToolTipShown(false);
  };

  return /*#__PURE__*/_react["default"].createElement(StyledFlex, _extends({
    onMouseEnter: showTip,
    onMouseLeave: hideTip
  }, props), children, isTooltipShown && /*#__PURE__*/_react["default"].createElement(StyledTypography, {
    px: 4,
    py: 2,
    color: "white",
    variant: "labelSmall",
    distance: distance,
    placement: placement
  }, content));
};

var StyledFlex = (0, _styledComponents["default"])(_etvaskit.Flex)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  display: inline;\n  position: relative;\n"])));
var StyledTypography = (0, _styledComponents["default"])(_etvaskit.Typography)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  z-index: 50;\n  border-radius: 3px;\n  position: absolute;\n  transform: translateX(-50%);\n  left: 50%;\n  white-space: nowrap;\n  background: #536083;\n\n  ", ";\n"])), function (_ref2) {
  var placement = _ref2.placement,
      distance = _ref2.distance;
  return placement === 'right' ? " left: calc(100% + " + distance + ");\n  top: 50%;\n  transform: translateX(0) translateY(-50%);" : placement === 'left' ? "left: auto;\n  right: calc(100% + " + distance + ");\n  top: 50%;\n  transform: translateX(0) translateY(-50%);" : "\n" + placement + ": calc(" + distance + " * -1);\n";
});
Tooltip.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes["default"].any,
  content: _propTypes["default"].any,
  delay: _propTypes["default"].number,
  placement: _propTypes["default"].string,
  distance: _propTypes["default"].string
} : {};
Tooltip.defaultProps = {
  placement: 'top',
  distance: '35px'
};
var _default = Tooltip;
exports["default"] = _default;
module.exports = exports.default;