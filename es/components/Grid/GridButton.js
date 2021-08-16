var _templateObject;

var _excluded = ["children"];

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Button } from '@etvas/etvaskit';
export var GridButton = function GridButton(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledButton, _extends({
    variant: "link"
  }, props), children);
};
GridButton.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.any
} : {};
var StyledButton = styled(Button)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  font-weight: 800;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.4px;\n"])));