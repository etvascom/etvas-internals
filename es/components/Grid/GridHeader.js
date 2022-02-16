var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React, { Fragment, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themed, Box, Touchable, Icon } from '@etvas/etvaskit';
import GridHeaderLabel from './GridHeaderLabel';
var sortTypes = process.env.NODE_ENV !== "production" ? [0, 1, 2, 3] : {};

var HeaderCell = function HeaderCell(_ref) {
  var column = _ref.column,
      sortType = _ref.sortType;
  return /*#__PURE__*/React.createElement(StyledWrapper, null, sortType ? /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(StyledOrderIcons, null, /*#__PURE__*/React.createElement(Icon, {
    size: "small",
    name: "menuUp",
    color: sortType === 3 ? 'brand' : 'textLabelDefault'
  }), /*#__PURE__*/React.createElement(Icon, {
    size: "small",
    name: "menuDown",
    color: sortType === 2 ? 'brand' : 'textLabelDefault'
  }))) : null, /*#__PURE__*/React.createElement(GridHeaderLabel, {
    tooltipContent: column.header
  }, column.header));
};

var Header = function Header(_ref2) {
  var columns = _ref2.columns,
      toggleSort = _ref2.toggleSort,
      sortConfig = _ref2.sortConfig;
  var gridTemplateColumns = useMemo(function () {
    return columns.map(function (column) {
      return column.width;
    }).join(' ');
  }, [columns]);

  var getSortType = function getSortType(column) {
    if (!column.sort) return 0;else if (column.sort !== sortConfig.field) return 1;else if (sortConfig.asc) return 2;
    return 3;
  };

  return /*#__PURE__*/React.createElement(StyledRow, {
    gridTemplateColumns: gridTemplateColumns
  }, columns.map(function (column) {
    return /*#__PURE__*/React.createElement(Fragment, {
      key: column.name
    }, column.sort ? /*#__PURE__*/React.createElement(Touchable, {
      key: "header-" + column.name,
      onClick: function onClick() {
        return toggleSort(column.sort);
      },
      minWidth: 0
    }, /*#__PURE__*/React.createElement(HeaderCell, {
      column: column,
      sortType: getSortType(column)
    })) : /*#__PURE__*/React.createElement(HeaderCell, {
      key: "header-" + column.name,
      column: column,
      sortType: 0
    }));
  }));
};

var StyledRow = styled(Box)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  ", ";\n  grid-template-columns: ", ";\n"])), themed('Grid.header'), function (props) {
  return props.gridTemplateColumns;
});
var StyledWrapper = styled(Box)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: ", ";\n  align-items: center;\n"])), function (props) {
  return props.align || 'left';
});
var StyledOrderIcons = styled(Box)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-right: 4px;\n\n  > svg:first-child {\n    margin-bottom: -5px;\n  }\n\n  > svg:last-child {\n    margin-top: -5px;\n  }\n"])));
HeaderCell.propTypes = process.env.NODE_ENV !== "production" ? {
  column: PropTypes.object,
  sortType: PropTypes.oneOf(sortTypes)
} : {};
Header.propTypes = process.env.NODE_ENV !== "production" ? {
  toggleSort: PropTypes.func,
  sortConfig: PropTypes.object,
  columns: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  }))
} : {};
export default Header;