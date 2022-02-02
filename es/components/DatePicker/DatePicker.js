var _templateObject;

var _excluded = ["value", "displayFormat", "collapseOnPick", "disabled", "onChange"];

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useLayoutEffect, useRef, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Flex, Typography, Icon, styled } from '@etvas/etvaskit';
import { css } from 'styled-components';
import { Calendar } from './Calendar';
import { COMMON_FORMAT } from './constants';
export var DatePicker = function DatePicker(_ref) {
  var value = _ref.value,
      displayFormat = _ref.displayFormat,
      collapseOnPick = _ref.collapseOnPick,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

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
  var mDate = useMemo(function () {
    return value ? moment(value) : moment();
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

  return /*#__PURE__*/React.createElement(Wrapper, {
    ref: wrapRef
  }, /*#__PURE__*/React.createElement(FakeInput, {
    onClick: toggleExpanded,
    expanded: isExpanded,
    disabled: disabled
  }, /*#__PURE__*/React.createElement(Typography, {
    mx: 2,
    truncate: true,
    color: disabled ? 'textInputDisabled' : 'baseBlack'
  }, mDate.format(displayFormat)), /*#__PURE__*/React.createElement(Flex, {
    mr: 2,
    opacity: disabled ? 0.35 : 1
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar"
  }))), isExpanded && /*#__PURE__*/React.createElement(DropdownWrapper, null, /*#__PURE__*/React.createElement(Calendar, _extends({
    value: mDate.format(COMMON_FORMAT),
    onChange: handleChangeDate
  }, props))));
};
var DropdownWrapper = styled(Flex)(function (_ref2) {
  var theme = _ref2.theme;
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
var FakeInput = styled(Flex)(function (_ref3) {
  var expanded = _ref3.expanded,
      disabled = _ref3.disabled,
      theme = _ref3.theme;
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
DatePicker.propTypes = process.env.NODE_ENV !== "production" ? {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  displayFormat: PropTypes.string,
  collapseOnPick: PropTypes.bool,
  disabled: PropTypes.bool
} : {};
DatePicker.defaultProps = {
  displayFormat: 'dddd, LL',
  collapseOnPick: true
};