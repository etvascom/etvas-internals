"use strict";

exports.__esModule = true;
exports.DatePicker = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _etvaskit = require("@etvas/etvaskit");

var _styledComponents = require("styled-components");

var _Calendar = require("./Calendar");

var _constants = require("./constants");

var _templateObject;

var _excluded = ["value", "displayFormat", "collapseOnPick", "disabled", "onChange"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DatePicker = function DatePicker(_ref) {
  var value = _ref.value,
      displayFormat = _ref.displayFormat,
      collapseOnPick = _ref.collapseOnPick,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var wrapRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(false),
      isExpanded = _useState[0],
      setExpanded = _useState[1];

  (0, _react.useLayoutEffect)(function () {
    var listener = function listener(event) {
      var _wrapRef$current, _wrapRef$current2;

      if ((wrapRef === null || wrapRef === void 0 ? void 0 : (_wrapRef$current = wrapRef.current) === null || _wrapRef$current === void 0 ? void 0 : _wrapRef$current.contains(event.target)) || (wrapRef === null || wrapRef === void 0 ? void 0 : (_wrapRef$current2 = wrapRef.current) === null || _wrapRef$current2 === void 0 ? void 0 : _wrapRef$current2.contains(event.srcElement))) {
        return;
      }

      setExpanded(false);
    };

    window.addEventListener('click', listener);
    return function () {
      return window.removeEventListener('click', listener);
    };
  }, []);
  var mDate = (0, _react.useMemo)(function () {
    return value ? (0, _moment["default"])(value) : (0, _moment["default"])();
  }, [value]);

  var handleChangeDate = function handleChangeDate(value) {
    if (collapseOnPick) {
      setExpanded(false);
    }

    onChange && onChange(value);
  };

  var toggleExpanded = function toggleExpanded() {
    !disabled && setExpanded(!isExpanded);
  };

  return /*#__PURE__*/_react["default"].createElement(Wrapper, {
    ref: wrapRef
  }, /*#__PURE__*/_react["default"].createElement(FakeInput, {
    onClick: toggleExpanded,
    expanded: isExpanded,
    disabled: disabled
  }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Typography, {
    mx: 2,
    truncate: true,
    color: disabled ? 'textInputDisabled' : 'baseBlack'
  }, mDate.format(displayFormat)), /*#__PURE__*/_react["default"].createElement(_etvaskit.Flex, {
    mr: 2,
    opacity: disabled ? 0.35 : 1
  }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Icon, {
    name: "calendar"
  }))), isExpanded && /*#__PURE__*/_react["default"].createElement(DropdownWrapper, null, /*#__PURE__*/_react["default"].createElement(_Calendar.Calendar, _extends({
    value: mDate.format(_constants.COMMON_FORMAT),
    onChange: handleChangeDate
  }, props))));
};

exports.DatePicker = DatePicker;
var DropdownWrapper = (0, _etvaskit.styled)(_etvaskit.Flex)(function (_ref2) {
  var theme = _ref2.theme;
  return (0, _styledComponents.css)({
    backgroundColor: theme.colors.white,
    padding: '16px',
    border: "1px solid " + theme.colors.accent,
    boxShadow: theme.shadows.etvasCard,
    position: 'absolute',
    left: 0,
    top: '44px',
    borderRadius: 2,
    zIndex: theme.zIndices.menu
  });
});
var FakeInput = (0, _etvaskit.styled)(_etvaskit.Flex)(function (_ref3) {
  var expanded = _ref3.expanded,
      disabled = _ref3.disabled,
      theme = _ref3.theme;
  return (0, _styledComponents.css)({
    width: '100%',
    height: '40px',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: disabled ? theme.colors.backgroundInputGray : 'white',
    border: "1px solid " + (disabled ? theme.colors.inputBorderGray : expanded ? theme.colors.accent : theme.colors.inputBorderGray),
    borderRadius: 2,
    cursor: disabled ? 'not-allowed' : 'pointer',
    pointerEvents: disabled ? 'none' : 'all',
    '&:hover': {
      borderColor: disabled ? theme.colors.inputBorderGray : theme.colors.accent
    }
  });
});
var Wrapper = (0, _etvaskit.styled)(_etvaskit.Flex)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  position: relative;\n"])));
DatePicker.propTypes = process.env.NODE_ENV !== "production" ? {
  value: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  displayFormat: _propTypes["default"].string,
  collapseOnPick: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool
} : {};
DatePicker.defaultProps = {
  displayFormat: 'dddd, LL',
  collapseOnPick: true
};