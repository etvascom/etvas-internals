"use strict";

exports.__esModule = true;
exports.RangePicker = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _etvaskit = require("@etvas/etvaskit");

var _styledComponents = require("styled-components");

var _Calendar = require("./Calendar");

var _constants = require("./constants");

var _templateObject, _templateObject2;

var _excluded = ["startOfTime", "endOfTime", "value", "displayFormat", "yearDisplayStart", "yearDisplayEnd", "navigationByYear", "disabled", "onChange", "label", "placeholder"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var RangePicker = function RangePicker(_ref) {
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
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var wrapRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(false),
      isExpanded = _useState[0],
      setExpanded = _useState[1];

  var _useState2 = (0, _react.useState)(false),
      isSettingEnd = _useState2[0],
      setSettingEnd = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      currentHover = _useState3[0],
      setCurrentHover = _useState3[1];

  var _useState4 = (0, _react.useState)(function () {
    var _ref2 = value || {},
        start = _ref2.start;

    var currentMonth = (0, _moment["default"])(start || (0, _moment["default"])().startOf('month'));
    return currentMonth;
  }),
      currentMonth = _useState4[0],
      setCurrentMonth = _useState4[1];

  var resetDateRange = function resetDateRange(val) {
    var _ref3 = val || {},
        start = _ref3.start,
        end = _ref3.end;

    var mStart = (0, _moment["default"])(start || (0, _moment["default"])());
    var mEnd = (0, _moment["default"])(end || (0, _moment["default"])());
    return {
      mStart: mStart,
      mEnd: mEnd
    };
  };

  var _useState5 = (0, _react.useState)(function () {
    return resetDateRange(value);
  }),
      _useState5$ = _useState5[0],
      mStart = _useState5$.mStart,
      mEnd = _useState5$.mEnd,
      setDateRange = _useState5[1];

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
  var rangeStartOfTime = (0, _react.useMemo)(function () {
    var mPast = (0, _moment["default"])(startOfTime || (0, _moment["default"])().add(-160, 'year').startOf('year'));

    if (!isSettingEnd) {
      return mPast;
    }

    return mStart.isSameOrAfter(mPast) ? mStart : mPast;
  }, [startOfTime, mStart, isSettingEnd]);
  var rangeEndOfTime = (0, _react.useMemo)(function () {
    var eot = (0, _moment["default"])(endOfTime || (0, _moment["default"])().add(160, 'year').endOf('year'));

    if (isSettingEnd && navigationByYear) {
      var eoy = mStart.clone().endOf('year');

      if (eoy.isBefore(eot)) {
        return eoy;
      }
    }

    return eot;
  }, [endOfTime, isSettingEnd, mStart, navigationByYear]);
  var nextMonth = (0, _react.useMemo)(function () {
    return currentMonth.clone().add(1, 'month');
  }, [currentMonth]);

  var navigateMonth = function navigateMonth(dir) {
    setCurrentMonth(currentMonth.clone().add(dir, 'month'));
  };

  var handleCanChange = function handleCanChange(pos) {
    return function (value) {
      return currentMonth.clone().add(pos, 'month').isSame(value, 'month');
    };
  };

  var handleCalendarClick = function handleCalendarClick(value) {
    if (isSettingEnd) {
      var _mEnd = (0, _moment["default"])(value);

      setDateRange({
        mStart: mStart.clone(),
        mEnd: _mEnd
      });

      if (onChange) {
        onChange({
          start: mStart.format(_constants.COMMON_FORMAT),
          end: _mEnd.format(_constants.COMMON_FORMAT)
        });
      }

      setSettingEnd(false);
      setExpanded(false);
      return;
    }

    var _mStart = (0, _moment["default"])(value);

    setDateRange({
      mStart: _mStart,
      mEnd: _mStart
    });
    setSettingEnd(true);
  };

  var toggleExpanded = function toggleExpanded() {
    if (!(value === null || value === void 0 ? void 0 : value.start) && isExpanded) {
      return;
    }

    setSettingEnd(false);
    setDateRange(resetDateRange(value));
    !disabled && setExpanded(!isExpanded);
  };

  var highlight = function highlight(day) {
    return isSettingEnd ? mStart.isSameOrBefore(day) && currentHover && mStart.isSameOrBefore(currentHover) && (0, _moment["default"])(day).isSameOrBefore(currentHover) && rangeEndOfTime.isSameOrAfter(day) : mStart.isSameOrBefore(day) && mEnd.isSameOrAfter(day);
  };

  var handleHover = function handleHover(day) {
    return setCurrentHover(day);
  };

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
  }, placeholder && !value ? placeholder : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, (0, _moment["default"])(value.start).format(displayFormat), " \xF7", ' ', (0, _moment["default"])(value.end).format(displayFormat))), /*#__PURE__*/_react["default"].createElement(_etvaskit.Flex, {
    mr: 2,
    opacity: disabled ? 0.35 : 1
  }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Icon, {
    name: "calendar"
  }))), isExpanded && /*#__PURE__*/_react["default"].createElement(DropdownWrapper, null, /*#__PURE__*/_react["default"].createElement(_etvaskit.Box, {
    mx: 2
  }, /*#__PURE__*/_react["default"].createElement(CalendarHeading, null, /*#__PURE__*/_react["default"].createElement(_etvaskit.Button, {
    icon: "chevronLeft",
    variant: "link",
    onClick: function onClick() {
      return navigateMonth(-1);
    }
  }), /*#__PURE__*/_react["default"].createElement(_etvaskit.Typography, {
    variant: "base14Bold"
  }, currentMonth.format(_constants.CURRENT_MONTH_FORMAT)), /*#__PURE__*/_react["default"].createElement("div", null)), /*#__PURE__*/_react["default"].createElement(_Calendar.Calendar, {
    value: mStart.format(_constants.COMMON_FORMAT),
    browseDate: currentMonth.format(_constants.COMMON_FORMAT),
    monthSelector: false,
    yearSelector: false,
    monthNavigation: false,
    onChange: handleCalendarClick,
    canChange: handleCanChange(0),
    onHover: handleHover,
    startOfTime: rangeStartOfTime.format(_constants.COMMON_FORMAT),
    endOfTime: rangeEndOfTime.format(_constants.COMMON_FORMAT),
    highlight: highlight,
    highlightCurrent: false,
    label: false
  })), /*#__PURE__*/_react["default"].createElement(_etvaskit.Box, {
    mx: 2
  }, /*#__PURE__*/_react["default"].createElement(CalendarHeading, null, /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement(_etvaskit.Typography, {
    variant: "base14Bold"
  }, nextMonth.format(_constants.CURRENT_MONTH_FORMAT)), /*#__PURE__*/_react["default"].createElement(_etvaskit.Button, {
    icon: "chevronRight",
    variant: "link",
    onClick: function onClick() {
      return navigateMonth(1);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Calendar.Calendar, {
    value: mEnd.format(_constants.COMMON_FORMAT),
    browseDate: nextMonth.format(_constants.COMMON_FORMAT),
    monthSelector: false,
    yearSelector: false,
    monthNavigation: false,
    monthNavigationWithinYear: false,
    onChange: handleCalendarClick,
    canChange: handleCanChange(1),
    onHover: handleHover,
    startOfTime: rangeStartOfTime.format(_constants.COMMON_FORMAT),
    endOfTime: rangeEndOfTime.format(_constants.COMMON_FORMAT),
    highlight: highlight,
    highlightCurrent: false,
    label: false
  })))));
};

exports.RangePicker = RangePicker;
var DropdownWrapper = (0, _etvaskit.styled)(_etvaskit.Flex)(function (_ref4) {
  var theme = _ref4.theme;
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
var FakeInput = (0, _etvaskit.styled)(_etvaskit.Flex)(function (_ref5) {
  var expanded = _ref5.expanded,
      disabled = _ref5.disabled,
      theme = _ref5.theme;
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
var CalendarHeading = (0, _etvaskit.styled)(_etvaskit.Flex)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  justify-content: space-between;\n  align-items: center;\n"])));
RangePicker.propTypes = process.env.NODE_ENV !== "production" ? {
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
  navigationByYear: _propTypes["default"].bool
} : {};
RangePicker.defaultProps = {
  displayFormat: 'D MMMM YYYY',
  navigationByYear: true
};