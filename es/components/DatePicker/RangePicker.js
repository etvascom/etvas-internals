var _templateObject, _templateObject2;

var _excluded = ["startOfTime", "endOfTime", "value", "displayFormat", "yearDisplayStart", "yearDisplayEnd", "navigationByYear", "disabled", "onChange", "label", "placeholder"];

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useLayoutEffect, useRef, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Flex, Typography, Icon, Box, Button, styled } from '@etvas/etvaskit';
import { css } from 'styled-components';
import { Calendar } from './Calendar';
import { COMMON_FORMAT, CURRENT_MONTH_FORMAT } from './constants';
export var RangePicker = function RangePicker(_ref) {
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

  var wrapRef = useRef();

  var _useState = useState(false),
      isExpanded = _useState[0],
      setExpanded = _useState[1];

  var _useState2 = useState(false),
      isSettingEnd = _useState2[0],
      setSettingEnd = _useState2[1];

  var _useState3 = useState(null),
      currentHover = _useState3[0],
      setCurrentHover = _useState3[1];

  var _useState4 = useState(function () {
    var _ref2 = value || {},
        start = _ref2.start;

    var currentMonth = moment(start || moment().startOf('month'));
    return currentMonth;
  }),
      currentMonth = _useState4[0],
      setCurrentMonth = _useState4[1];

  var resetDateRange = function resetDateRange(val) {
    var _ref3 = val || {},
        start = _ref3.start,
        end = _ref3.end;

    var mStart = moment(start || moment());
    var mEnd = moment(end || moment());
    return {
      mStart: mStart,
      mEnd: mEnd
    };
  };

  var _useState5 = useState(function () {
    return resetDateRange(value);
  }),
      _useState5$ = _useState5[0],
      mStart = _useState5$.mStart,
      mEnd = _useState5$.mEnd,
      setDateRange = _useState5[1];

  useLayoutEffect(function () {
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
  var rangeStartOfTime = useMemo(function () {
    var mPast = moment(startOfTime || moment().add(-160, 'year').startOf('year'));

    if (!isSettingEnd) {
      return mPast;
    }

    return mStart.isSameOrAfter(mPast) ? mStart : mPast;
  }, [startOfTime, mStart, isSettingEnd]);
  var rangeEndOfTime = useMemo(function () {
    var eot = moment(endOfTime || moment().add(160, 'year').endOf('year'));

    if (isSettingEnd && navigationByYear) {
      var eoy = mStart.clone().endOf('year');

      if (eoy.isBefore(eot)) {
        return eoy;
      }
    }

    return eot;
  }, [endOfTime, isSettingEnd, mStart, navigationByYear]);
  var nextMonth = useMemo(function () {
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
      var _mEnd = moment(value);

      setDateRange({
        mStart: mStart.clone(),
        mEnd: _mEnd
      });

      if (onChange) {
        onChange({
          start: mStart.format(COMMON_FORMAT),
          end: _mEnd.format(COMMON_FORMAT)
        });
      }

      setSettingEnd(false);
      setExpanded(false);
      return;
    }

    var _mStart = moment(value);

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
    return isSettingEnd ? mStart.isSameOrBefore(day) && currentHover && mStart.isSameOrBefore(currentHover) && moment(day).isSameOrBefore(currentHover) && rangeEndOfTime.isSameOrAfter(day) : mStart.isSameOrBefore(day) && mEnd.isSameOrAfter(day);
  };

  var handleHover = function handleHover(day) {
    return setCurrentHover(day);
  };

  return /*#__PURE__*/React.createElement(Flex, _extends({
    flexDirection: "column"
  }, props), label && /*#__PURE__*/React.createElement(Typography, {
    as: "label",
    variant: "base12Bold",
    color: "baseMetal",
    width: "fit-content",
    mb: 1
  }, label), /*#__PURE__*/React.createElement(Wrapper, {
    ref: wrapRef
  }, /*#__PURE__*/React.createElement(FakeInput, {
    onClick: toggleExpanded,
    expanded: isExpanded,
    disabled: disabled
  }, /*#__PURE__*/React.createElement(Typography, {
    mx: 2,
    truncate: true,
    variant: "labelSmall",
    color: disabled ? 'textInputDisabled' : 'baseBlack'
  }, placeholder && !value ? placeholder : /*#__PURE__*/React.createElement(React.Fragment, null, moment(value.start).format(displayFormat), " \xF7", ' ', moment(value.end).format(displayFormat))), /*#__PURE__*/React.createElement(Flex, {
    mr: 2,
    opacity: disabled ? 0.35 : 1
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar"
  }))), isExpanded && /*#__PURE__*/React.createElement(DropdownWrapper, null, /*#__PURE__*/React.createElement(Box, {
    mx: 2
  }, /*#__PURE__*/React.createElement(CalendarHeading, null, /*#__PURE__*/React.createElement(Button, {
    icon: "chevronLeft",
    variant: "link",
    onClick: function onClick() {
      return navigateMonth(-1);
    }
  }), /*#__PURE__*/React.createElement(Typography, {
    variant: "base14Bold"
  }, currentMonth.format(CURRENT_MONTH_FORMAT)), /*#__PURE__*/React.createElement("div", null)), /*#__PURE__*/React.createElement(Calendar, {
    value: mStart.format(COMMON_FORMAT),
    browseDate: currentMonth.format(COMMON_FORMAT),
    monthSelector: false,
    yearSelector: false,
    monthNavigation: false,
    onChange: handleCalendarClick,
    canChange: handleCanChange(0),
    onHover: handleHover,
    startOfTime: rangeStartOfTime.format(COMMON_FORMAT),
    endOfTime: rangeEndOfTime.format(COMMON_FORMAT),
    highlight: highlight,
    highlightCurrent: false,
    label: false
  })), /*#__PURE__*/React.createElement(Box, {
    mx: 2
  }, /*#__PURE__*/React.createElement(CalendarHeading, null, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement(Typography, {
    variant: "base14Bold"
  }, nextMonth.format(CURRENT_MONTH_FORMAT)), /*#__PURE__*/React.createElement(Button, {
    icon: "chevronRight",
    variant: "link",
    onClick: function onClick() {
      return navigateMonth(1);
    }
  })), /*#__PURE__*/React.createElement(Calendar, {
    value: mEnd.format(COMMON_FORMAT),
    browseDate: nextMonth.format(COMMON_FORMAT),
    monthSelector: false,
    yearSelector: false,
    monthNavigation: false,
    monthNavigationWithinYear: false,
    onChange: handleCalendarClick,
    canChange: handleCanChange(1),
    onHover: handleHover,
    startOfTime: rangeStartOfTime.format(COMMON_FORMAT),
    endOfTime: rangeEndOfTime.format(COMMON_FORMAT),
    highlight: highlight,
    highlightCurrent: false,
    label: false
  })))));
};
var DropdownWrapper = styled(Flex)(function (_ref4) {
  var theme = _ref4.theme;
  return css({
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
var FakeInput = styled(Flex)(function (_ref5) {
  var expanded = _ref5.expanded,
      disabled = _ref5.disabled,
      theme = _ref5.theme;
  return css({
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
var Wrapper = styled(Flex)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  position: relative;\n"])));
var CalendarHeading = styled(Flex)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  justify-content: space-between;\n  align-items: center;\n"])));
RangePicker.propTypes = process.env.NODE_ENV !== "production" ? {
  yearDisplayStart: PropTypes.number,
  yearDisplayEnd: PropTypes.number,
  startOfTime: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]),
  endOfTime: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]),
  value: PropTypes.shape({
    start: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]),
    end: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number])
  }),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  displayFormat: PropTypes.string,
  label: PropTypes.node,
  placeholder: PropTypes.node,
  navigationByYear: PropTypes.bool
} : {};
RangePicker.defaultProps = {
  displayFormat: 'D MMMM YYYY',
  navigationByYear: true
};