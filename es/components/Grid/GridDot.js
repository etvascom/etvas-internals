var _templateObject;

var _excluded = ["color"];

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themed, Box } from '@etvas/etvaskit';
export var GridDot = function GridDot(_ref) {
  var color = _ref.color,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Dot, _extends({
    color: color
  }, props));
};
GridDot.propTypes = process.env.NODE_ENV !== "production" ? {
  color: PropTypes.string
} : {};
var Dot = styled(Box)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n  background-color: ", ";"])), themed('GridDot'), function (_ref2) {
  var color = _ref2.color;
  return themed("colors." + color);
});