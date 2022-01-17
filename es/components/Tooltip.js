var _templateObject, _templateObject2;

var _excluded = ["placement", "children", "content", "delay", "distance"];

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Typography } from '@etvas/etvaskit';

var Tooltip = function Tooltip(_ref) {
  var placement = _ref.placement,
      children = _ref.children,
      content = _ref.content,
      delay = _ref.delay,
      distance = _ref.distance,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = useState(false),
      isTooltipShown = _useState[0],
      setIsToolTipShown = _useState[1];

  var timeoutRef = useRef();

  var showTip = function showTip() {
    timeoutRef.current = setTimeout(function () {
      setIsToolTipShown(true);
    }, delay || 350);
  };

  var hideTip = function hideTip() {
    clearInterval(timeoutRef.current);
    setIsToolTipShown(false);
  };

  return /*#__PURE__*/React.createElement(StyledFlex, _extends({
    onMouseEnter: showTip,
    onMouseLeave: hideTip
  }, props), children, isTooltipShown && /*#__PURE__*/React.createElement(StyledTypography, {
    px: 4,
    py: 2,
    color: "baseWhite",
    variant: "base14Light",
    distance: distance,
    placement: placement
  }, content));
};

var StyledFlex = styled(Flex)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  display: inline;\n  position: relative;\n"])));
var StyledTypography = styled(Typography)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  z-index: 50;\n  border-radius: 3px;\n  position: absolute;\n  transform: translateX(-50%);\n  left: 50%;\n  background: #536083;\n  width: max-content;\n  max-width: 300px;\n\n  ", ";\n"])), function (_ref2) {
  var placement = _ref2.placement,
      distance = _ref2.distance;
  return placement === 'right' ? " left: calc(100% + " + distance + ");\n  top: 50%;\n  transform: translateX(0) translateY(-50%);" : placement === 'left' ? "left: auto;\n  right: calc(100% + " + distance + ");\n  top: 50%;\n  transform: translateX(0) translateY(-50%);" : "\n" + placement + ": calc(" + distance + " * -1);\n";
});
Tooltip.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.any,
  content: PropTypes.any,
  delay: PropTypes.number,
  placement: PropTypes.string,
  distance: PropTypes.string
} : {};
Tooltip.defaultProps = {
  placement: 'top',
  distance: '35px'
};
export default Tooltip;