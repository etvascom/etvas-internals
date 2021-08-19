var _templateObject;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React, { useLayoutEffect, useRef, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Flex, Typography, Icon, styled } from '@etvas/etvaskit';
import { css } from 'styled-components';
import { Years } from './Years';
import { Calendar } from './Calendar';
import { COMMON_FORMAT } from './constants';
export var DateRangePicker = function DateRangePicker(_ref) {
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
      placeholder = _ref.placeholder;
  var wrapRef = useRef();

  var _useState = useState(false),
      isExpanded = _useState[0],
      setExpanded = _useState[1];

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
  var mSot = moment(startOfTime || moment().add(-160, 'year').startOf('year'));
  var mEot = moment(endOfTime || moment().add(160, 'year').endOf('year'));

  var _useMemo = useMemo(function () {
    var _ref2 = value || {},
        start = _ref2.start,
        end = _ref2.end;

    var mStart = moment(start || moment().add(-1, 'month').startOf('month'));
    var mEnd = moment(end || moment());
    return [mStart, mEnd];
  }, [value]),
      mStart = _useMemo[0],
      mEnd = _useMemo[1];

  var currentYear = useMemo(function () {
    return mStart.year();
  }, [mStart]);

  var emitChange = function emitChange(start, end) {
    if (!onChange) {
      return;
    }

    onChange({
      start: start || mStart.format(COMMON_FORMAT),
      end: end || mEnd.format(COMMON_FORMAT)
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

    emitChange(ds.format(COMMON_FORMAT), de.format(COMMON_FORMAT));
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

  return /*#__PURE__*/React.createElement(Flex, {
    flexDirection: "column"
  }, label && /*#__PURE__*/React.createElement(Typography, {
    as: "label",
    variant: "inputLabel",
    width: "fit-content"
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
  }, placeholder && !value ? placeholder : /*#__PURE__*/React.createElement(React.Fragment, null, mStart.format(displayFormat), " \xF7", ' ', mEnd.format(displayFormat))), /*#__PURE__*/React.createElement(Flex, {
    mr: 2,
    opacity: disabled ? 0.35 : 1
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar"
  }))), isExpanded && /*#__PURE__*/React.createElement(DropdownWrapper, null, navigationByYear && /*#__PURE__*/React.createElement(Years, {
    mr: 2,
    value: currentYear,
    displayStart: yearDisplayStart,
    displayEnd: yearDisplayEnd,
    startOfTime: mSot.year(),
    endOfTime: mEot.year(),
    onChange: handleChangeCurrentYear
  }), /*#__PURE__*/React.createElement(Calendar, {
    mx: 2,
    value: mStart.format(COMMON_FORMAT),
    monthNavigationWithinYear: navigationByYear,
    yearSelector: !navigationByYear,
    onChange: handleChangeDateStart,
    startOfTime: mSot.format(COMMON_FORMAT),
    endOfTime: mEnd.format(COMMON_FORMAT),
    highlight: highlight
  }), /*#__PURE__*/React.createElement(Calendar, {
    yearSelector: !navigationByYear,
    ml: 2,
    value: mEnd.format(COMMON_FORMAT),
    monthNavigationWithinYear: navigationByYear,
    onChange: handleChangeDateEnd,
    startOfTime: mStart.format(COMMON_FORMAT),
    endOfTime: mEot.format(COMMON_FORMAT),
    highlight: highlight
  }))));
};
var DropdownWrapper = styled(Flex)(function (_ref3) {
  var theme = _ref3.theme;
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
var FakeInput = styled(Flex)(function (_ref4) {
  var expanded = _ref4.expanded,
      disabled = _ref4.disabled,
      theme = _ref4.theme;
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
DateRangePicker.propTypes = process.env.NODE_ENV !== "production" ? {
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
DateRangePicker.defaultProps = {
  displayFormat: 'D MMMM YYYY',
  navigationByYear: true
};