"use strict";

exports.__esModule = true;
exports.LoadingGrid = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _etvaskit = require("@etvas/etvaskit");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var LoadingGrid = function LoadingGrid(_ref) {
  var _ref2;

  var busyVariant = _ref.busyVariant,
      busySkeletonNumber = _ref.busySkeletonNumber;
  return busyVariant === 'blockSkeleton' ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, (_ref2 = [].concat(new Array(busySkeletonNumber + 1).keys())) === null || _ref2 === void 0 ? void 0 : _ref2.map(function (el) {
    return /*#__PURE__*/_react["default"].createElement(_etvaskit.BlockSkeleton, {
      key: el,
      height: "44px",
      mb: 1
    });
  })) : /*#__PURE__*/_react["default"].createElement(Shadow, null, /*#__PURE__*/_react["default"].createElement(_etvaskit.ActivityIndicator, {
    variant: "runningbar",
    colors: {
      background: 'transparent',
      primary: 'accent'
    }
  }));
};

exports.LoadingGrid = LoadingGrid;
LoadingGrid.propTypes = process.env.NODE_ENV !== "production" ? {
  busyVariant: _propTypes["default"].oneOf(['blockSkeleton', 'runningBar']),
  busySkeletonNumber: _propTypes["default"].number
} : {};

var Shadow = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  min-height: 240px;\n"])));