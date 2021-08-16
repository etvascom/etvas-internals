var _excluded = ["children", "icon", "dotColor"],
    _excluded2 = ["children", "fontWeight", "color"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useLayoutEffect, useRef, useState } from 'react';
import { Typography, Icon, Flex } from '@etvas/etvaskit';
import PropTypes from 'prop-types';
import Tooltip from '../Tooltip';
import { GridDot } from './GridDot';
export var GridMainComponent = function GridMainComponent(_ref) {
  var children = _ref.children,
      icon = _ref.icon,
      dotColor = _ref.dotColor,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Flex, {
    alignItems: "center",
    width: "100%",
    pr: 2
  }, !!icon && /*#__PURE__*/React.createElement(Flex, {
    alignItems: "center",
    mr: 3
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: "medium",
    color: "inputIcon"
  })), !!dotColor && /*#__PURE__*/React.createElement(Flex, {
    alignItems: "center",
    mr: 4
  }, /*#__PURE__*/React.createElement(GridDot, {
    color: dotColor
  })), /*#__PURE__*/React.createElement(TruncateGridInfo, _extends({
    minWidth: "0",
    fontWeight: "normal"
  }, props), children));
};
export var TruncateGridInfo = function TruncateGridInfo(_ref2) {
  var children = _ref2.children,
      fontWeight = _ref2.fontWeight,
      color = _ref2.color,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  var _useState = useState(false),
      isTruncatedText = _useState[0],
      setIsTruncatedText = _useState[1];

  var ref = useRef();
  useLayoutEffect(function () {
    setIsTruncatedText(isTruncated(ref === null || ref === void 0 ? void 0 : ref.current));
  }, []);
  var text = /*#__PURE__*/React.createElement(Typography, {
    variant: "labelSmall",
    color: color,
    truncate: true,
    ref: ref,
    fontWeight: fontWeight
  }, children);
  return /*#__PURE__*/React.createElement(Flex, _extends({
    alignItems: "center",
    pr: 2
  }, props), isTruncatedText ? /*#__PURE__*/React.createElement(Tooltip, {
    width: "100%",
    content: children,
    distance: "50px"
  }, text) : text);
};

var isTruncated = function isTruncated(el) {
  return (el === null || el === void 0 ? void 0 : el.scrollWidth) > (el === null || el === void 0 ? void 0 : el.clientWidth);
};

TruncateGridInfo.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.any,
  fontWeight: PropTypes.string,
  color: PropTypes.string
} : {};
TruncateGridInfo.defaultProps = {
  fontWeight: 'lighter',
  color: 'textCardTitle'
};
GridMainComponent.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.any,
  icon: PropTypes.string,
  dotColor: PropTypes.string
} : {};