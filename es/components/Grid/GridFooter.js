var _excluded = ["onChange", "disabled", "resultsPerPage", "initialElements"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Button, Dropdown, Typography } from '@etvas/etvaskit';
import css from '@styled-system/css';
import styled from 'styled-components';

var GridFooter = function GridFooter(_ref) {
  var _actions$prev, _actions$prev2, _actions$next, _actions$next2;

  var paginationConfig = _ref.paginationConfig;

  if (!paginationConfig) {
    return null;
  }

  var actions = paginationConfig.actions,
      pageLimit = paginationConfig.pageLimit,
      loading = paginationConfig.loading,
      resultsPerPage = paginationConfig.resultsPerPage;
  return /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Flex, {
    justifyContent: "flex-end"
  }, /*#__PURE__*/React.createElement(ItemDisplayCounter, {
    mr: 2,
    disabled: loading,
    initialElements: pageLimit,
    resultsPerPage: resultsPerPage,
    onChange: actions === null || actions === void 0 ? void 0 : actions.changeCounter
  }), /*#__PURE__*/React.createElement(StyledButton, {
    mr: 2,
    onClick: actions === null || actions === void 0 ? void 0 : (_actions$prev = actions.prev) === null || _actions$prev === void 0 ? void 0 : _actions$prev.handlePrev,
    disabled: actions === null || actions === void 0 ? void 0 : (_actions$prev2 = actions.prev) === null || _actions$prev2 === void 0 ? void 0 : _actions$prev2.disabled
  }, "Prev"), /*#__PURE__*/React.createElement(StyledButton, {
    onClick: actions === null || actions === void 0 ? void 0 : (_actions$next = actions.next) === null || _actions$next === void 0 ? void 0 : _actions$next.handleNext,
    disabled: actions === null || actions === void 0 ? void 0 : (_actions$next2 = actions.next) === null || _actions$next2 === void 0 ? void 0 : _actions$next2.disabled
  }, "Next")));
};

GridFooter.propTypes = process.env.NODE_ENV !== "production" ? {
  paginationConfig: PropTypes.shape({
    resultsPerPage: PropTypes.arrayOf(PropTypes.number),
    loading: PropTypes.bool,
    pageLimit: PropTypes.number,
    actions: PropTypes.shape({
      changeCounter: PropTypes.func,
      next: PropTypes.shape({
        handleNext: PropTypes.func,
        disabled: PropTypes.bool
      }),
      prev: PropTypes.shape({
        handlePrev: PropTypes.func,
        disabled: PropTypes.bool
      })
    })
  })
} : {};
var StyledButton = styled(Button)(css({
  backgroundColor: 'background',
  color: 'textDefault',
  ':not([disabled])': {
    ':hover': {
      backgroundColor: 'inputGray'
    },
    ':active': {
      backgroundColor: 'inputGray'
    },
    ':focus': {
      backgroundColor: 'inputGray'
    }
  },
  ':disabled': {
    backgroundColor: 'background'
  }
}));

var ItemDisplayCounter = function ItemDisplayCounter(_ref2) {
  var onChange = _ref2.onChange,
      disabled = _ref2.disabled,
      resultsPerPage = _ref2.resultsPerPage,
      initialElements = _ref2.initialElements,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded);

  return /*#__PURE__*/React.createElement(Flex, _extends({
    alignItems: "center"
  }, props), /*#__PURE__*/React.createElement(Typography, {
    variant: "inputLabel",
    mr: 1
  }, "Show"), /*#__PURE__*/React.createElement(Dropdown, {
    noBottomSpace: true,
    value: initialElements,
    valueRender: function valueRender(value) {
      return value + " Results";
    },
    onChange: onChange,
    disabled: disabled
  }, resultsPerPage.map(function (el) {
    return /*#__PURE__*/React.createElement(Dropdown.Option, {
      key: el,
      value: el
    }, el, " Results");
  })));
};

ItemDisplayCounter.defaultProps = {
  resultsPerPage: [5, 10, 25]
};
ItemDisplayCounter.propTypes = process.env.NODE_ENV !== "production" ? {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  resultsPerPage: PropTypes.arrayOf(PropTypes.number),
  initialElements: PropTypes.number
} : {};
export default GridFooter;