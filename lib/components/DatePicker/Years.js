"use strict";

exports.__esModule = true;
exports.Years = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _etvaskit = require("@etvas/etvaskit");

var _styledComponents = require("styled-components");

var _excluded = ["value", "startOfTime", "endOfTime", "displayStart", "displayEnd", "perRow", "onChange"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Years = function Years(_ref) {
  var value = _ref.value,
      startOfTime = _ref.startOfTime,
      endOfTime = _ref.endOfTime,
      displayStart = _ref.displayStart,
      displayEnd = _ref.displayEnd,
      perRow = _ref.perRow,
      onChange = _ref.onChange,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var interval = (0, _react.useMemo)(function () {
    var interval = [];
    var start = displayStart || value - 10;
    var end = displayEnd || value + 9;
    var sot = startOfTime || displayStart;
    var eot = endOfTime || displayEnd;

    for (var i = start; i <= end; i++) {
      interval.push({
        id: i,
        label: i,
        value: i,
        current: value === i,
        disabled: i < sot || i > eot
      });
    }

    return interval;
  }, [displayEnd, displayStart, endOfTime, startOfTime, value]);

  var handleCellClick = function handleCellClick(cell) {
    if (cell.disabled) {
      return;
    }

    onChange(cell.value);
  };

  var today = (0, _moment["default"])().year();
  return /*#__PURE__*/_react["default"].createElement(_etvaskit.Box, _extends({
    width: "224px"
  }, props), /*#__PURE__*/_react["default"].createElement(_etvaskit.Typography, {
    variant: "labelSmallBold",
    px: 3,
    mt: 2
  }, value), /*#__PURE__*/_react["default"].createElement(_etvaskit.Flex, {
    justifyContent: "flex-start",
    flexWrap: "wrap",
    mt: 2
  }, interval.map(function (cell) {
    return /*#__PURE__*/_react["default"].createElement(CellTouch, {
      key: cell.id,
      perRow: perRow,
      current: cell.current,
      disabled: cell.disabled,
      onClick: function onClick() {
        return handleCellClick(cell);
      }
    }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Typography, {
      variant: cell.value === today ? 'labelSmallBold' : 'labelSmall'
    }, cell.label));
  })));
};

exports.Years = Years;
var CellTouch = (0, _etvaskit.styled)(_etvaskit.Touchable)(function (_ref2) {
  var current = _ref2.current,
      disabled = _ref2.disabled,
      perRow = _ref2.perRow,
      theme = _ref2.theme;
  return (0, _styledComponents.css)({
    flex: "0 0 " + 100 / perRow + "%",
    borderRadius: 6,
    height: '32px',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.35 : 1,
    justifyContent: 'center',
    backgroundColor: current ? theme.colors.accentFade : 'transparent',
    '&:hover': {
      color: current ? theme.colors.accentDarkest : theme.colors.accent
    }
  });
});
Years.propTypes = process.env.NODE_ENV !== "production" ? {
  value: _propTypes["default"].number.isRequired,
  perRow: _propTypes["default"].number,
  startOfTime: _propTypes["default"].number,
  endOfTime: _propTypes["default"].number,
  displayStart: _propTypes["default"].number,
  displayEnd: _propTypes["default"].number,
  displayStatus: _propTypes["default"].func,
  onChange: _propTypes["default"].func
} : {};
Years.defaultProps = {
  perRow: 4
};