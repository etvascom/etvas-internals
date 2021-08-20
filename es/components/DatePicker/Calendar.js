var _templateObject, _templateObject2;

var _excluded = ["value", "dayFormat", "monthFormat", "yearFormat", "weekdayFormat", "monthSelector", "monthNavigation", "monthNavigationWithinYear", "yearSelector", "startOfTime", "endOfTime", "onChange", "highlight"];

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/de';
import 'moment/locale/en-gb';
import { COMMON_FORMAT } from './constants';
import { Flex, Typography, Touchable, Icon, styled } from '@etvas/etvaskit';
import { css } from 'styled-components';
export var Calendar = function Calendar(_ref) {
  var value = _ref.value,
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
      highlight = _ref.highlight,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = useState(false),
      isMonthsShown = _useState[0],
      setMonthsShown = _useState[1];

  var _useState2 = useState(false),
      isYearsShown = _useState2[0],
      setYearsShown = _useState2[1];

  var _useState3 = useState(null),
      yearPanel = _useState3[0],
      setYearPanel = _useState3[1];

  var _useState4 = useState(value),
      currentDate = _useState4[0],
      setCurrentDate = _useState4[1];

  useEffect(function () {
    setCurrentDate(value);
  }, [value]);
  var m = useMemo(function () {
    return moment(currentDate);
  }, [currentDate]);
  var mRef = useMemo(function () {
    return moment(value);
  }, [value]);
  var paleozoic = useMemo(function () {
    return startOfTime ? moment(startOfTime) : moment().add(-160, 'year');
  }, [startOfTime]);
  var future = useMemo(function () {
    return endOfTime ? moment(endOfTime) : moment().add(160, 'year');
  }, [endOfTime]);
  var isBetweenDate = useCallback(function (mom) {
    return mom.isSameOrAfter(paleozoic, 'day') && mom.isSameOrBefore(future, 'day');
  }, [future, paleozoic]);
  var isBetweenMonth = useCallback(function (mom) {
    var _s = mom.clone().startOf('month');

    var _e = mom.clone().endOf('month');

    return _s.isSameOrAfter(paleozoic, 'day') && _s.isSameOrBefore(future, 'day') || _e.isSameOrAfter(paleozoic, 'day') && _e.isSameOrBefore(future, 'day');
  }, [future, paleozoic]);
  var isBetweenYear = useCallback(function (year) {
    return paleozoic.year() <= year && future.year() >= year;
  }, [future, paleozoic]);

  var _useMemo = useMemo(function () {
    var now = moment();
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
        highlight: highlight(c.format(COMMON_FORMAT), c.clone())
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

  var week = useMemo(function () {
    var week = [];
    var start = moment().startOf('week');

    for (var w = start.clone(); w.isSameOrBefore(start, 'week'); w.add(1, 'day')) {
      week.push({
        key: w.format('X'),
        label: w.format(weekdayFormat)
      });
    }

    return week;
  }, [weekdayFormat]);
  var year = useMemo(function () {
    var year = [];
    var startYear = (yearPanel ? yearPanel : mRef.year()) - 12;
    var now = moment();

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

    setCurrentDate(next.format(COMMON_FORMAT));
    toggleYears();
  };

  var handleYearNavigate = function handleYearNavigate(dir) {
    var prev = yearPanel ? yearPanel : mRef.year();
    setYearPanel(prev + dir);
  };

  var handleMonthChange = function handleMonthChange(month) {
    setCurrentDate(m.month(month).format(COMMON_FORMAT));
    toggleMonths();
  };

  var handleMonthNavigate = function handleMonthNavigate(direction) {
    setMonthsShown(false);
    setCurrentDate(m.add(direction, 'month').format(COMMON_FORMAT));
  };

  var handleDayChange = function handleDayChange(day) {
    if (!isBetweenDate(day._m)) {
      return;
    }

    if (monthNavigationWithinYear && !day._m.isSame(mRef, 'year')) {
      return;
    }

    setCurrentDate(day._m.format(COMMON_FORMAT));
    onChange && onChange(day._m.format(COMMON_FORMAT));
  };

  return /*#__PURE__*/React.createElement(Flex, _extends({
    justifyContent: "flex-start",
    flexWrap: "wrap",
    width: "224px"
  }, props), /*#__PURE__*/React.createElement(Flex, {
    width: "224px",
    mb: 1
  }, monthSelector && /*#__PURE__*/React.createElement(DropTrigger, {
    onClick: toggleMonths,
    mx: 1
  }, /*#__PURE__*/React.createElement(Flex, {
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "labelSmallBold",
    color: isMonthsShown ? 'accent' : undefined
  }, m.format(monthFormat)), /*#__PURE__*/React.createElement(Rotated, {
    justifyContent: "center",
    alignItems: "center",
    color: isMonthsShown ? 'accent' : undefined,
    "aria-expanded": isMonthsShown
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevronLeft"
  })))), yearSelector && /*#__PURE__*/React.createElement(DropTrigger, {
    onClick: toggleYears,
    mx: 1
  }, /*#__PURE__*/React.createElement(Flex, {
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "labelSmallBold",
    color: isYearsShown ? 'accent' : undefined
  }, m.format(yearFormat)), /*#__PURE__*/React.createElement(Rotated, {
    justifyContent: "center",
    alignItems: "center",
    color: isYearsShown ? 'accent' : undefined,
    "aria-expanded": isYearsShown
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevronLeft"
  })))), monthNavigation && /*#__PURE__*/React.createElement(MonthNav, {
    onClick: function onClick() {
      return handleMonthNavigate(-1);
    },
    disabled: !canNavigateMonth(-1)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevronLeft"
  })), monthNavigation && /*#__PURE__*/React.createElement(MonthNav, {
    onClick: function onClick() {
      return handleMonthNavigate(1);
    },
    disabled: !canNavigateMonth(1)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight"
  }))), monthSelector && /*#__PURE__*/React.createElement(ConditionalFlex, {
    flexWrap: "wrap",
    my: 4,
    shown: isMonthsShown
  }, month.map(function (mon) {
    return /*#__PURE__*/React.createElement(CellWrapper, {
      key: mon.key,
      ratio: 1 / 2
    }, /*#__PURE__*/React.createElement(MonthCell, {
      current: mon.current,
      disabled: !isBetweenMonth(mon._m),
      onClick: function onClick() {
        return handleMonthChange(mon.value);
      }
    }, /*#__PURE__*/React.createElement(Typography, {
      variant: "default",
      fontWeight: mon.today ? 'bold' : 300
    }, mon.label)));
  })), yearSelector && /*#__PURE__*/React.createElement(ConditionalFlex, {
    flexWrap: "wrap",
    my: 4,
    shown: isYearsShown
  }, /*#__PURE__*/React.createElement(CellWrapper, {
    ratio: 1 / 4
  }, /*#__PURE__*/React.createElement(YearCell, {
    disabled: !canNavigateYear(-10),
    onClick: function onClick() {
      return handleYearNavigate(-10);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevronLeft"
  }))), year.map(function (y) {
    return /*#__PURE__*/React.createElement(CellWrapper, {
      ratio: 1 / 4,
      key: y.key
    }, /*#__PURE__*/React.createElement(YearCell, {
      key: y.key,
      current: y.current,
      disabled: !isBetweenYear(y.value),
      onClick: function onClick() {
        return handleYearChange(y.value);
      }
    }, /*#__PURE__*/React.createElement(Typography, {
      variant: "default",
      fontWeight: y.today ? 'bold' : 300
    }, y.label)));
  }), /*#__PURE__*/React.createElement(YearCell, {
    disabled: !canNavigateYear(10),
    onClick: function onClick() {
      return handleYearNavigate(10);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight"
  }))), !isMonthsShown && !isYearsShown && week.map(function (wd) {
    return /*#__PURE__*/React.createElement(CellWrapper, {
      key: wd.key,
      ratio: 1 / 7
    }, /*#__PURE__*/React.createElement(WeekCell, null, /*#__PURE__*/React.createElement(Typography, {
      variant: "default",
      opacity: 0.5
    }, wd.label)));
  }), !isMonthsShown && !isYearsShown && cal.map(function (day) {
    return /*#__PURE__*/React.createElement(CellWrapper, {
      key: day.key,
      ratio: 1 / 7
    }, /*#__PURE__*/React.createElement(DayCell, {
      onClick: function onClick() {
        return handleDayChange(day);
      },
      current: day.current,
      highlight: day.highlight,
      disabled: !isBetweenDate(day._m),
      month: day.month
    }, /*#__PURE__*/React.createElement(Typography, {
      variant: "default",
      fontWeight: day.today ? 'bold' : 300
    }, day.label)));
  }));
};
var ConditionalFlex = styled(Flex)(function (_ref2) {
  var shown = _ref2.shown;
  return css({
    display: shown ? 'flex' : 'none'
  });
});
var Rotated = styled(Flex)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  transform: rotate(-90deg);\n  &[aria-expanded='true'] {\n    transform: rotate(90deg);\n  }\n"])));
var cellStyle = {
  userSelect: 'none',
  borderRadius: '100%',
  height: '100%',
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center'
};
var CellWrapper = styled(Flex)(function (_ref3) {
  var ratio = _ref3.ratio;
  return css({
    height: '32px',
    padding: '1px',
    alignItems: 'center',
    justifyContent: 'center',
    flex: "0 0 " + 100 * ratio + "%"
  });
});
var YearCell = styled(Touchable)(function (_ref4) {
  var current = _ref4.current,
      disabled = _ref4.disabled,
      theme = _ref4.theme;
  return css(_extends({}, cellStyle, {
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
var MonthCell = styled(Touchable)(function (_ref5) {
  var current = _ref5.current,
      disabled = _ref5.disabled,
      theme = _ref5.theme;
  return css(_extends({}, cellStyle, {
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
var WeekCell = styled(Typography)(function (_ref6) {
  var theme = _ref6.theme;
  return css(_extends({}, cellStyle, {
    opacity: 0.65
  }));
});
var DayCell = styled(Touchable)(function (_ref7) {
  var current = _ref7.current,
      disabled = _ref7.disabled,
      highlight = _ref7.highlight,
      hidden = _ref7.hidden,
      month = _ref7.month,
      theme = _ref7.theme;
  return css(_extends({}, cellStyle, {
    backgroundColor: current || highlight ? theme.colors.accentFade : 'transparent',
    cursor: disabled || hidden ? 'not-allowed' : 'pointer',
    opacity: hidden ? 0.05 : disabled ? 0.35 : month ? 1 : 0.1,
    border: '1px solid transparent',
    '&:hover': {
      color: current ? theme.colors.accentDarkest : month ? theme.colors.accent : theme.colors.baseBlack,
      borderColor: disabled || hidden ? 'transparent' : month ? theme.colors.accent : 'transparent'
    }
  }));
});
var MonthNav = styled(Touchable)(function () {
  return css({
    flex: '0 0 32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  });
});
var DropTrigger = styled(Touchable)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  height: 32px;\n  flex: 1 1;\n"])));
Calendar.propTypes = process.env.NODE_ENV !== "production" ? {
  value: PropTypes.string,
  startOfTime: PropTypes.string,
  endOfTime: PropTypes.string,
  dayFormat: PropTypes.string,
  monthFormat: PropTypes.string,
  yearFormat: PropTypes.string,
  weekdayFormat: PropTypes.string,
  monthSelector: PropTypes.bool,
  yearSelector: PropTypes.bool,
  monthNavigation: PropTypes.bool,
  monthNavigationWithinYear: PropTypes.bool,
  onChange: PropTypes.func,
  highlight: PropTypes.func
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
  highlight: function highlight() {
    return false;
  }
};