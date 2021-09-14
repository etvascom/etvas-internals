var _templateObject;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { BlockSkeleton, ActivityIndicator } from '@etvas/etvaskit';
export var LoadingGrid = function LoadingGrid(_ref) {
  var _ref2;

  var busyVariant = _ref.busyVariant,
      busySkeletonNumber = _ref.busySkeletonNumber;
  return busyVariant === 'blockSkeleton' ? /*#__PURE__*/React.createElement(React.Fragment, null, (_ref2 = [].concat(new Array(busySkeletonNumber + 1).keys())) === null || _ref2 === void 0 ? void 0 : _ref2.map(function (el) {
    return /*#__PURE__*/React.createElement(BlockSkeleton, {
      key: el,
      height: "44px",
      mb: 1
    });
  })) : /*#__PURE__*/React.createElement(Shadow, null, /*#__PURE__*/React.createElement(ActivityIndicator, {
    variant: "runningbar",
    colors: {
      background: 'transparent',
      primary: 'accent'
    }
  }));
};
LoadingGrid.propTypes = process.env.NODE_ENV !== "production" ? {
  busyVariant: PropTypes.oneOf(['blockSkeleton', 'runningBar']),
  busySkeletonNumber: PropTypes.number
} : {};
var Shadow = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  min-height: 240px;\n"])));