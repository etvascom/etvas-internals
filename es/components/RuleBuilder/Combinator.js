var _excluded = ["options", "disabled", "value", "onChange"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import css from '@styled-system/css';
import { Touchable, Typography } from '@etvas/etvaskit';
export var Combinator = function Combinator(_ref) {
  var options = _ref.options,
      disabled = _ref.disabled,
      currentValue = _ref.value,
      onChange = _ref.onChange,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  return options.map(function (_ref2) {
    var value = _ref2.value,
        label = _ref2.label;
    return /*#__PURE__*/React.createElement(Touchable, _extends({
      key: value,
      onClick: function onClick() {
        return onChange(value);
      },
      disabled: disabled
    }, rest), /*#__PURE__*/React.createElement(CustomChip, {
      isSelected: value === currentValue,
      disabled: disabled
    }, /*#__PURE__*/React.createElement(Typography, {
      variant: "base12Bold",
      color: "inherit"
    }, label)));
  });
};
var CustomChip = styled.div(function (_ref3) {
  var isSelected = _ref3.isSelected,
      disabled = _ref3.disabled;
  return css({
    py: 1,
    px: 2,
    mr: 2,
    whiteSpace: 'nowrap',
    alignItems: 'center',
    width: 'fit-content',
    borderRadius: 3,
    backgroundColor: isSelected ? disabled ? 'baseGrayLight' : 'etvasLight' : 'transparent',
    color: isSelected ? 'baseWhite' : 'etvasDark',
    opacity: isSelected ? 1 : 0.2
  });
});
Combinator.propTypes = process.env.NODE_ENV !== "production" ? {
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.node
  })).isRequired
} : {};