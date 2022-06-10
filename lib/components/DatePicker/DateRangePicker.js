"use strict";

exports.__esModule = true;
exports.DateRangePicker = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _etvaskit = require("@etvas/etvaskit");

var _styledComponents = require("styled-components");

var _Years = require("./Years");

var _Calendar = require("./Calendar");

var _constants = require("./constants");

var _templateObject;

var _excluded = ["startOfTime", "endOfTime", "value", "displayFormat", "yearDisplayStart", "yearDisplayEnd", "navigationByYear", "disabled", "onChange", "label", "placeholder", "labelYear", "labelStartDate", "labelEndDate"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DateRangePicker = function DateRangePicker(_ref) {
  var startOfTime = _ref.startOfTime,
      endOfTime = _ref.endOfTime,
      value = _ref.value,
      displayFormat = _ref.displayFormat,
      yearDisplayStart = _ref.yearDisplayStart,
      yearDisplayEnd = _ref.yearDisplayEnd,
      navigationByYear = _ref.navigationByYear,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      label = _ref.label,
      placeholder = _ref.placeholder,
      labelYear = _ref.labelYear,
      labelStartDate = _ref.labelStartDate,
      labelEndDate = _ref.labelEndDate,
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
  var mSot = (0, _moment["default"])(startOfTime || (0, _moment["default"])().add(-160, 'year').startOf('year'));
  var mEot = (0, _moment["default"])(endOfTime || (0, _moment["default"])().add(160, 'year').endOf('year'));

  var _useMemo = (0, _react.useMemo)(function () {
    var _ref2 = value || {},
        start = _ref2.start,
        end = _ref2.end;

    var mStart = (0, _moment["default"])(start || (0, _moment["default"])().add(-1, 'month').startOf('month'));
    var mEnd = (0, _moment["default"])(end || (0, _moment["default"])());
    return [mStart, mEnd];
  }, [value]),
      mStart = _useMemo[0],
      mEnd = _useMemo[1];

  var currentYear = (0, _react.useMemo)(function () {
    return mStart.year();
  }, [mStart]);

  var emitChange = function emitChange(start, end) {
    if (!onChange) {
      return;
    }

    onChange({
      start: start || mStart.format(_constants.COMMON_FORMAT),
      end: end || mEnd.format(_constants.COMMON_FORMAT)
    });
  };

  var handleChangeCurrentYear = function handleChangeCurrentYear(value) {
    var ds = mStart.year(value);
    var de = mEnd.year(value);

    if (ds.isBefore(mSot, 'day')) {
      ds = mSot.clone();
    }

    if (de.isAfter(mEot, 'day')) {
      de = mEot.clone();
    }

    emitChange(ds.format(_constants.COMMON_FORMAT), de.format(_constants.COMMON_FORMAT));
  };

  var handleChangeDateStart = function handleChangeDateStart(value) {
    emitChange(value);
  };

  var handleChangeDateEnd = function handleChangeDateEnd(value) {
    emitChange(null, value);
  };

  var toggleExpanded = function toggleExpanded() {
    !disabled && setExpanded(!isExpanded);
  };

  var highlight = function highlight(day) {
    return mStart.isSameOrBefore(day) && mEnd.isSameOrAfter(day);
  };

  console.warn('* Deprecated: please use RangePicker component *');
  return /*#__PURE__*/_react["default"].createElement(_etvaskit.Flex, _extends({
    flexDirection: "column"
  }, props), label && /*#__PURE__*/_react["default"].createElement(_etvaskit.Box, {
    mb: 1
  }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Typography, {
    as: "label",
    variant: "base12Bold",
    color: "baseMetal",
    width: "fit-content"
  }, label)), /*#__PURE__*/_react["default"].createElement(Wrapper, {
    ref: wrapRef
  }, /*#__PURE__*/_react["default"].createElement(FakeInput, {
    onClick: toggleExpanded,
    expanded: isExpanded,
    disabled: disabled
  }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Typography, {
    mx: 2,
    truncate: true,
    variant: "labelSmall",
    color: disabled ? 'textInputDisabled' : 'baseBlack'
  }, placeholder && !value ? placeholder : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, mStart.format(displayFormat), " \xF7", ' ', mEnd.format(displayFormat))), /*#__PURE__*/_react["default"].createElement(_etvaskit.Flex, {
    mr: 2,
    opacity: disabled ? 0.35 : 1
  }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Icon, {
    name: "calendar"
  }))), isExpanded && /*#__PURE__*/_react["default"].createElement(DropdownWrapper, null, navigationByYear && /*#__PURE__*/_react["default"].createElement(_Years.Years, {
    mr: 2,
    value: currentYear,
    displayStart: yearDisplayStart,
    displayEnd: yearDisplayEnd,
    startOfTime: mSot.year(),
    endOfTime: mEot.year(),
    onChange: handleChangeCurrentYear,
    label: labelYear
  }), /*#__PURE__*/_react["default"].createElement(_Calendar.Calendar, {
    mx: 2,
    value: mStart.format(_constants.COMMON_FORMAT),
    monthNavigationWithinYear: navigationByYear,
    yearSelector: !navigationByYear,
    onChange: handleChangeDateStart,
    startOfTime: mSot.format(_constants.COMMON_FORMAT),
    endOfTime: mEnd.format(_constants.COMMON_FORMAT),
    highlight: highlight,
    label: labelStartDate
  }), /*#__PURE__*/_react["default"].createElement(_Calendar.Calendar, {
    yearSelector: !navigationByYear,
    ml: 2,
    value: mEnd.format(_constants.COMMON_FORMAT),
    monthNavigationWithinYear: navigationByYear,
    onChange: handleChangeDateEnd,
    startOfTime: mStart.format(_constants.COMMON_FORMAT),
    endOfTime: mEot.format(_constants.COMMON_FORMAT),
    highlight: highlight,
    label: labelEndDate
  }))));
};

exports.DateRangePicker = DateRangePicker;
var DropdownWrapper = (0, _etvaskit.styled)(_etvaskit.Flex)(function (_ref3) {
  var theme = _ref3.theme;
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
var FakeInput = (0, _etvaskit.styled)(_etvaskit.Flex)(function (_ref4) {
  var expanded = _ref4.expanded,
      disabled = _ref4.disabled,
      theme = _ref4.theme;
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
DateRangePicker.propTypes = process.env.NODE_ENV !== "production" ? {
  yearDisplayStart: _propTypes["default"].number,
  yearDisplayEnd: _propTypes["default"].number,
  startOfTime: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object, _propTypes["default"].number]),
  endOfTime: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object, _propTypes["default"].number]),
  value: _propTypes["default"].shape({
    start: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object, _propTypes["default"].number]),
    end: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object, _propTypes["default"].number])
  }),
  onChange: _propTypes["default"].func,
  disabled: _propTypes["default"].bool,
  displayFormat: _propTypes["default"].string,
  label: _propTypes["default"].node,
  placeholder: _propTypes["default"].node,
  navigationByYear: _propTypes["default"].bool,
  labelYear: _propTypes["default"].node,
  labelStartDate: _propTypes["default"].node,
  labelEndDate: _propTypes["default"].node
} : {};
DateRangePicker.defaultProps = {
  displayFormat: 'D MMMM YYYY',
  navigationByYear: true
};