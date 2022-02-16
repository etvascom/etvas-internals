import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@etvas/etvaskit';
import Tooltip from '../Tooltip';
import { useIsTruncated } from '../../hooks';

var GridHeaderLabel = function GridHeaderLabel(_ref) {
  var children = _ref.children,
      tooltipContent = _ref.tooltipContent;
  var headerRef = useRef();
  var isTruncated = useIsTruncated(headerRef);
  var text = /*#__PURE__*/React.createElement(Typography, {
    variant: "inputLabel",
    truncate: true,
    ref: headerRef,
    mb: 0
  }, children);
  return isTruncated ? /*#__PURE__*/React.createElement(Tooltip, {
    minWidth: "0",
    content: tooltipContent,
    distance: "50px"
  }, text) : text;
};

GridHeaderLabel.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node,
  tooltipContent: PropTypes.node
} : {};
export default GridHeaderLabel;