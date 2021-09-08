var _excluded = ["label", "value", "chipBgColor", "chipTextColor"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Typography, Chip } from '@etvas/etvaskit';
export var Counter = function Counter(_ref) {
  var label = _ref.label,
      value = _ref.value,
      chipBgColor = _ref.chipBgColor,
      chipTextColor = _ref.chipTextColor,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Flex, _extends({
    alignItems: "center"
  }, props), /*#__PURE__*/React.createElement(Typography, {
    variant: "base16Light",
    mr: 2
  }, label), /*#__PURE__*/React.createElement(Chip, {
    color: chipBgColor,
    isRounded: true
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "base14Light",
    color: chipTextColor
  }, value)));
};
Counter.propTypes = process.env.NODE_ENV !== "production" ? {
  label: PropTypes.node,
  value: PropTypes.node,
  chipBgColor: PropTypes.string,
  chipTextColor: PropTypes.string
} : {};
Counter.defaultProps = {
  chipBgColor: 'etvas',
  chipTextColor: 'baseWhite'
};