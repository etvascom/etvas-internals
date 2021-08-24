var _excluded = ["value", "startOfTime", "endOfTime", "displayStart", "displayEnd", "perRow", "onChange", "label"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Flex, Typography, Box, Touchable, styled } from '@etvas/etvaskit';
import { css } from 'styled-components';
export var Years = function Years(_ref) {
  var value = _ref.value,
      startOfTime = _ref.startOfTime,
      endOfTime = _ref.endOfTime,
      displayStart = _ref.displayStart,
      displayEnd = _ref.displayEnd,
      perRow = _ref.perRow,
      onChange = _ref.onChange,
      label = _ref.label,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var interval = useMemo(function () {
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

  var today = moment().year();
  return /*#__PURE__*/React.createElement(Box, _extends({
    width: "224px"
  }, props), /*#__PURE__*/React.createElement(Typography, {
    variant: "labelSmallBold",
    px: 3,
    mb: 1
  }, label), /*#__PURE__*/React.createElement(Typography, {
    variant: "labelSmallBold",
    px: 3,
    mt: 2
  }, value), /*#__PURE__*/React.createElement(Flex, {
    justifyContent: "flex-start",
    flexWrap: "wrap",
    mt: 2
  }, interval.map(function (cell) {
    return /*#__PURE__*/React.createElement(CellTouch, {
      key: cell.id,
      perRow: perRow,
      current: cell.current,
      disabled: cell.disabled,
      onClick: function onClick() {
        return handleCellClick(cell);
      }
    }, /*#__PURE__*/React.createElement(Typography, {
      variant: cell.value === today ? 'labelSmallBold' : 'labelSmall'
    }, cell.label));
  })));
};
var CellTouch = styled(Touchable)(function (_ref2) {
  var current = _ref2.current,
      disabled = _ref2.disabled,
      perRow = _ref2.perRow,
      theme = _ref2.theme;
  return css({
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
  value: PropTypes.number.isRequired,
  perRow: PropTypes.number,
  startOfTime: PropTypes.number,
  endOfTime: PropTypes.number,
  displayStart: PropTypes.number,
  displayEnd: PropTypes.number,
  displayStatus: PropTypes.func,
  onChange: PropTypes.func,
  label: PropTypes.node
} : {};
Years.defaultProps = {
  perRow: 4
};