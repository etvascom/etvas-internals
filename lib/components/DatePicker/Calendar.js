"use strict";

exports.__esModule = true;
exports.Calendar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

require("moment/locale/de");

var _constants = require("./constants");

var _etvaskit = require("@etvas/etvaskit");

var _styledComponents = require("styled-components");

var _templateObject, _templateObject2;

var _excluded = ["value", "browseDate", "dayFormat", "monthFormat", "yearFormat", "weekdayFormat", "monthSelector", "monthNavigation", "monthNavigationWithinYear", "yearSelector", "startOfTime", "endOfTime", "onChange", "onHover", "highlight", "highlightCurrent", "canChange", "label"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Calendar = function Calendar(_ref) {
  var value = _ref.value,
      browseDate = _ref.browseDate,
      dayFormat = _ref.dayFormat,
      monthFormat = _ref.monthFormat,
      yearFormat = _ref.yearFormat,
      weekdayFormat = _ref.weekdayFormat,
      monthSelector = _ref.monthSelector,
      monthNavigation = _ref.monthNavigation,
      monthNavigationWithinYear = _ref.monthNavigationWithinYear,
      yearSelector = _ref.yearSelector,
      startOfTime = _ref.startOfTime,
      endOfTime = _ref.endOfTime,
      onChange = _ref.onChange,
      onHover = _ref.onHover,
      highlight = _ref.highlight,
      highlightCurrent = _ref.highlightCurrent,
      canChange = _ref.canChange,
      label = _ref.label,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = (0, _react.useState)(false),
      isMonthsShown = _useState[0],
      setMonthsShown = _useState[1];

  var _useState2 = (0, _react.useState)(false),
      isYearsShown = _useState2[0],
      setYearsShown = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      yearPanel = _useState3[0],
      setYearPanel = _useState3[1];

  var _useState4 = (0, _react.useState)(browseDate || value),
      currentDate = _useState4[0],
      setCurrentDate = _useState4[1];

  (0, _react.useEffect)(function () {
    setCurrentDate(browseDate || value);
  }, [value, browseDate]);
  var m = (0, _react.useMemo)(function () {
    return (0, _moment["default"])(currentDate);
  }, [currentDate]);
  var mRef = (0, _react.useMemo)(function () {
    return (0, _moment["default"])(value);
  }, [value]);
  var paleozoic = (0, _react.useMemo)(function () {
    return startOfTime ? (0, _moment["default"])(startOfTime) : (0, _moment["default"])().add(-160, 'year');
  }, [startOfTime]);
  var future = (0, _react.useMemo)(function () {
    return endOfTime ? (0, _moment["default"])(endOfTime) : (0, _moment["default"])().add(160, 'year');
  }, [endOfTime]);
  var isBetweenDate = (0, _react.useCallback)(function (mom) {
    return mom.isSameOrAfter(paleozoic, 'day') && mom.isSameOrBefore(future, 'day');
  }, [future, paleozoic]);
  var isBetweenMonth = (0, _react.useCallback)(function (mom) {
    var _s = mom.clone().startOf('month');

    var _e = mom.clone().endOf('month');

    return _s.isSameOrAfter(paleozoic, 'day') && _s.isSameOrBefore(future, 'day') || _e.isSameOrAfter(paleozoic, 'day') && _e.isSameOrBefore(future, 'day');
  }, [future, paleozoic]);
  var isBetweenYear = (0, _react.useCallback)(function (year) {
    return paleozoic.year() <= year && future.year() >= year;
  }, [future, paleozoic]);

  var _useMemo = (0, _react.useMemo)(function () {
    var now = (0, _moment["default"])();
    var start = m.clone().startOf('month');
    var end = m.clone().endOf('month');

    if (start.isSame(start.clone().startOf('week'), 'day')) {
      start.startOf('week').add(-1, 'day');
    }

    if (end.isSame(end.clone().endOf('week'), 'day')) {
      end.endOf('week').add(1, 'day');
    }

    if (end.clone().endOf('week').diff(start.clone().startOf('week'), 'week') < 5) {
      start.startOf('week').add(-1, 'day');
    }

    start.startOf('week');
    end.endOf('week');
    var cal = [];

    for (var c = start.clone(); c.isSameOrBefore(end, 'day'); c.add(1, 'day')) {
      cal.push({
        key: c.valueOf(),
        label: c.format(dayFormat),
        value: c.date(),
        _m: c.clone(),
        current: c.isSame(mRef, 'day'),
        month: c.isSame(m, 'month'),
        today: c.isSame(now, 'day'),
        highlight: highlight(c.format(_constants.COMMON_FORMAT), c.clone())
      });
    }

    var month = [];

    for (var mon = m.clone().startOf('year'); mon.isSame(m, 'year'); mon.add(1, 'month')) {
      month.push({
        key: mon.valueOf(),
        label: mon.format(monthFormat),
        value: mon.month(),
        current: mon.isSame(mRef, 'month'),
        today: mon.isSame(now, 'month'),
        _m: mon.clone()
      });
    }

    return [cal, month];
  }, [dayFormat, highlight, m, mRef, monthFormat]),
      cal = _useMemo[0],
      month = _useMemo[1];

  var week = (0, _react.useMemo)(function () {
    var week = [];
    var start = (0, _moment["default"])().startOf('week');

    for (var w = start.clone(); w.isSameOrBefore(start, 'week'); w.add(1, 'day')) {
      week.push({
        key: w.format('X'),
        label: w.format(weekdayFormat)
      });
    }

    return week;
  }, [weekdayFormat]);
  var year = (0, _react.useMemo)(function () {
    var year = [];
    var startYear = (yearPanel ? yearPanel : mRef.year()) - 12;
    var now = (0, _moment["default"])();

    for (var i = startYear; i < startYear + 22; i++) {
      year.push({
        key: i,
        label: i,
        value: i,
        current: mRef.year() === i,
        today: now.year() === i
      });
    }

    return year;
  }, [mRef, yearPanel]);

  var canNavigateMonth = function canNavigateMonth(dir) {
    var next = m.clone().add(dir, 'month');

    if (!isBetweenMonth(next)) {
      return false;
    }

    if (monthNavigationWithinYear && !next.isSame(mRef, 'year')) {
      return false;
    }

    return true;
  };

  var canNavigateYear = function canNavigateYear(dir) {
    return isBetweenYear((yearPanel ? yearPanel : m.year()) + dir);
  };

  var toggleMonths = function toggleMonths() {
    if (!isMonthsShown) {
      setYearsShown(false);
    }

    setMonthsShown(!isMonthsShown);
  };

  var toggleYears = function toggleYears() {
    if (!isYearsShown) {
      setMonthsShown(false);
    }

    setYearsShown(!isYearsShown);
  };

  var handleYearChange = function handleYearChange(year) {
    var next = m.clone().year(year);

    if (next.isBefore(paleozoic, 'day')) {
      next = paleozoic.clone();
    }

    if (next.isAfter(future, 'day')) {
      next = future.clone();
    }

    setCurrentDate(next.format(_constants.COMMON_FORMAT));
    toggleYears();
  };

  var handleYearNavigate = function handleYearNavigate(dir) {
    var prev = yearPanel ? yearPanel : mRef.year();
    setYearPanel(prev + dir);
  };

  var handleMonthChange = function handleMonthChange(month) {
    setCurrentDate(m.month(month).format(_constants.COMMON_FORMAT));
    toggleMonths();
  };

  var handleMonthNavigate = function handleMonthNavigate(direction) {
    setMonthsShown(false);
    setCurrentDate(m.add(direction, 'month').format(_constants.COMMON_FORMAT));
  };

  var handleDayChange = function handleDayChange(day) {
    if (!isBetweenDate(day._m)) {
      return;
    }

    if (monthNavigationWithinYear && !day._m.isSame(mRef, 'year')) {
      return;
    }

    if (!canChange || canChange(day._m.format(_constants.COMMON_FORMAT))) {
      setCurrentDate(day._m.format(_constants.COMMON_FORMAT));
      onChange && onChange(day._m.format(_constants.COMMON_FORMAT));
    }
  };

  var handleHover = function handleHover(day) {
    onHover && onHover(day._m.format(_constants.COMMON_FORMAT));
  };

  return /*#__PURE__*/_react["default"].createElement(_etvaskit.Flex, _extends({
    justifyContent: "flex-start",
    flexWrap: "wrap",
    width: "224px"
  }, props), !!label && /*#__PURE__*/_react["default"].createElement(_etvaskit.Box, {
    mb: 1
  }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Typography, {
    variant: "base12Bold",
    color: "baseMetal"
  }, label)), /*#__PURE__*/_react["default"].createElement(_etvaskit.Flex, {
    width: "224px",
    mb: 1
  }, monthSelector && /*#__PURE__*/_react["default"].createElement(DropTrigger, {
    onClick: toggleMonths,
    mx: 1
  }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Flex, {
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Typography, {
    variant: "labelSmallBold",
    color: isMonthsShown ? 'accent' : undefined
  }, m.format(monthFormat)), /*#__PURE__*/_react["default"].createElement(Rotated, {
    justifyContent: "center",
    alignItems: "center",
    color: isMonthsShown ? 'accent' : undefined,
    "aria-expanded": isMonthsShown
  }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Icon, {
    name: "chevronLeft"
  })))), yearSelector && /*#__PURE__*/_react["default"].createElement(DropTrigger, {
    onClick: toggleYears,
    mx: 1
  }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Flex, {
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Typography, {
    variant: "labelSmallBold",
    color: isYearsShown ? 'accent' : undefined
  }, m.format(yearFormat)), /*#__PURE__*/_react["default"].createElement(Rotated, {
    justifyContent: "center",
    alignItems: "center",
    color: isYearsShown ? 'accent' : undefined,
    "aria-expanded": isYearsShown
  }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Icon, {
    name: "chevronLeft"
  })))), monthNavigation && /*#__PURE__*/_react["default"].createElement(MonthNav, {
    onClick: function onClick() {
      return handleMonthNavigate(-1);
    },
    disabled: !canNavigateMonth(-1)
  }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Icon, {
    name: "chevronLeft"
  })), monthNavigation && /*#__PURE__*/_react["default"].createElement(MonthNav, {
    onClick: function onClick() {
      return handleMonthNavigate(1);
    },
    disabled: !canNavigateMonth(1)
  }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Icon, {
    name: "chevronRight"
  }))), monthSelector && /*#__PURE__*/_react["default"].createElement(ConditionalFlex, {
    flexWrap: "wrap",
    my: 4,
    shown: isMonthsShown
  }, month.map(function (mon) {
    return /*#__PURE__*/_react["default"].createElement(CellWrapper, {
      key: mon.key,
      ratio: 1 / 2
    }, /*#__PURE__*/_react["default"].createElement(MonthCell, {
      current: mon.current,
      disabled: !isBetweenMonth(mon._m),
      onClick: function onClick() {
        return handleMonthChange(mon.value);
      }
    }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Typography, {
      variant: "default",
      fontWeight: mon.today ? 'bold' : 300
    }, mon.label)));
  })), yearSelector && /*#__PURE__*/_react["default"].createElement(ConditionalFlex, {
    flexWrap: "wrap",
    my: 4,
    shown: isYearsShown
  }, /*#__PURE__*/_react["default"].createElement(CellWrapper, {
    ratio: 1 / 4
  }, /*#__PURE__*/_react["default"].createElement(YearCell, {
    disabled: !canNavigateYear(-10),
    onClick: function onClick() {
      return handleYearNavigate(-10);
    }
  }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Icon, {
    name: "chevronLeft"
  }))), year.map(function (y) {
    return /*#__PURE__*/_react["default"].createElement(CellWrapper, {
      ratio: 1 / 4,
      key: y.key
    }, /*#__PURE__*/_react["default"].createElement(YearCell, {
      key: y.key,
      current: y.current,
      disabled: !isBetweenYear(y.value),
      onClick: function onClick() {
        return handleYearChange(y.value);
      }
    }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Typography, {
      variant: "default",
      fontWeight: y.today ? 'bold' : 300
    }, y.label)));
  }), /*#__PURE__*/_react["default"].createElement(YearCell, {
    disabled: !canNavigateYear(10),
    onClick: function onClick() {
      return handleYearNavigate(10);
    }
  }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Icon, {
    name: "chevronRight"
  }))), !isMonthsShown && !isYearsShown && week.map(function (wd) {
    return /*#__PURE__*/_react["default"].createElement(CellWrapper, {
      key: wd.key,
      ratio: 1 / 7
    }, /*#__PURE__*/_react["default"].createElement(WeekCell, null, /*#__PURE__*/_react["default"].createElement(_etvaskit.Typography, {
      variant: "default",
      opacity: 0.5
    }, wd.label)));
  }), !isMonthsShown && !isYearsShown && cal.map(function (day) {
    return /*#__PURE__*/_react["default"].createElement(CellWrapper, {
      key: day.key,
      ratio: 1 / 7
    }, /*#__PURE__*/_react["default"].createElement(DayCell, {
      onMouseOver: function onMouseOver() {
        return handleHover(day);
      },
      onClick: function onClick() {
        return handleDayChange(day);
      },
      highlightCurrent: highlightCurrent,
      current: day.current,
      highlight: day.highlight,
      disabled: !isBetweenDate(day._m),
      month: day.month
    }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Typography, {
      variant: "default",
      fontWeight: day.today ? 'bold' : 300
    }, day.label)));
  }));
};

exports.Calendar = Calendar;
var ConditionalFlex = (0, _etvaskit.styled)(_etvaskit.Flex)(function (_ref2) {
  var shown = _ref2.shown;
  return (0, _styledComponents.css)({
    display: shown ? 'flex' : 'none'
  });
});
var Rotated = (0, _etvaskit.styled)(_etvaskit.Flex)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  transform: rotate(-90deg);\n  &[aria-expanded='true'] {\n    transform: rotate(90deg);\n  }\n"])));
var cellStyle = {
  userSelect: 'none',
  borderRadius: '100%',
  height: '100%',
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center'
};
var CellWrapper = (0, _etvaskit.styled)(_etvaskit.Flex)(function (_ref3) {
  var ratio = _ref3.ratio;
  return (0, _styledComponents.css)({
    height: '32px',
    padding: '1px',
    alignItems: 'center',
    justifyContent: 'center',
    flex: "0 0 " + 100 * ratio + "%"
  });
});
var YearCell = (0, _etvaskit.styled)(_etvaskit.Touchable)(function (_ref4) {
  var current = _ref4.current,
      disabled = _ref4.disabled,
      theme = _ref4.theme;
  return (0, _styledComponents.css)(_extends({}, cellStyle, {
    flex: '1 1 25%',
    borderRadius: 6,
    height: '32px',
    opacity: disabled ? 0.35 : 1,
    backgroundColor: current ? theme.colors.accentFade : 'transparent',
    border: '1px solid transparent',
    '&:hover': {
      color: current ? theme.colors.accentDarkest : theme.colors.accent,
      borderColor: disabled ? 'transparent' : theme.colors.accent
    }
  }));
});
var MonthCell = (0, _etvaskit.styled)(_etvaskit.Touchable)(function (_ref5) {
  var current = _ref5.current,
      disabled = _ref5.disabled,
      theme = _ref5.theme;
  return (0, _styledComponents.css)(_extends({}, cellStyle, {
    flex: '1 1 50%',
    borderRadius: 6,
    height: '32px',
    opacity: disabled ? 0.35 : 1,
    backgroundColor: current ? theme.colors.accentFade : 'transparent',
    border: '1px solid transparent',
    '&:hover': {
      color: current ? theme.colors.accentDarkest : theme.colors.accent,
      borderColor: disabled ? 'transparent' : theme.colors.accent
    }
  }));
});
var WeekCell = (0, _etvaskit.styled)(_etvaskit.Typography)(function (_ref6) {
  var theme = _ref6.theme;
  return (0, _styledComponents.css)(_extends({}, cellStyle, {
    opacity: 0.65
  }));
});
var DayCell = (0, _etvaskit.styled)(_etvaskit.Touchable)(function (_ref7) {
  var current = _ref7.current,
      disabled = _ref7.disabled,
      highlight = _ref7.highlight,
      hidden = _ref7.hidden,
      month = _ref7.month,
      theme = _ref7.theme,
      highlightCurrent = _ref7.highlightCurrent;
  return (0, _styledComponents.css)(_extends({}, cellStyle, {
    backgroundColor: highlightCurrent && current || highlight ? theme.colors.accentFade : 'transparent',
    cursor: disabled || hidden ? 'not-allowed' : 'pointer',
    opacity: hidden ? 0.05 : disabled ? 0.35 : month ? 1 : 0.1,
    border: '1px solid transparent',
    '&:hover': {
      color: current ? theme.colors.accentDarkest : month ? theme.colors.accent : theme.colors.baseBlack,
      borderColor: disabled || hidden ? 'transparent' : month ? theme.colors.accent : 'transparent'
    }
  }));
});
var MonthNav = (0, _etvaskit.styled)(_etvaskit.Touchable)(function () {
  return (0, _styledComponents.css)({
    flex: '0 0 32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  });
});
var DropTrigger = (0, _etvaskit.styled)(_etvaskit.Touchable)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  height: 32px;\n  flex: 1 1;\n"])));
Calendar.propTypes = process.env.NODE_ENV !== "production" ? {
  value: _propTypes["default"].string,
  browseDate: _propTypes["default"].string,
  startOfTime: _propTypes["default"].string,
  endOfTime: _propTypes["default"].string,
  dayFormat: _propTypes["default"].string,
  monthFormat: _propTypes["default"].string,
  yearFormat: _propTypes["default"].string,
  weekdayFormat: _propTypes["default"].string,
  monthSelector: _propTypes["default"].bool,
  yearSelector: _propTypes["default"].bool,
  monthNavigation: _propTypes["default"].bool,
  monthNavigationWithinYear: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  onHover: _propTypes["default"].func,
  highlight: _propTypes["default"].func,
  highlightCurrent: _propTypes["default"].bool,
  canChange: _propTypes["default"].func,
  label: _propTypes["default"].node
} : {};
Calendar.defaultProps = {
  dayFormat: 'D',
  monthFormat: 'MMMM',
  yearFormat: 'YYYY',
  weekdayFormat: 'dd',
  monthSelector: true,
  yearSelector: true,
  monthNavigation: true,
  monthNavigationWithinYear: false,
  highlightCurrent: true,
  highlight: function highlight() {
    return false;
  }
};