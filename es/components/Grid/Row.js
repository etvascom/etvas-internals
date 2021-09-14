var _templateObject;

var _excluded = ["item", "columns", "prefix", "extended", "isClickableRow", "isDisabledRow", "rowAction"];

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themed, Box } from '@etvas/etvaskit';
import Cell from './Cell';

var Row = function Row(_ref) {
  var item = _ref.item,
      columns = _ref.columns,
      prefix = _ref.prefix,
      extended = _ref.extended,
      isClickableRow = _ref.isClickableRow,
      isDisabledRow = _ref.isDisabledRow,
      rowAction = _ref.rowAction,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var gridTemplateColumns = useMemo(function () {
    return columns.map(function (column) {
      return column.width;
    }).join(' ');
  }, [columns]);
  return /*#__PURE__*/React.createElement(StyledRow, _extends({
    gridTemplateColumns: gridTemplateColumns,
    extended: extended,
    isClickableRow: isClickableRow,
    onClick: function onClick() {
      return rowAction(item);
    },
    isDisabledRow: isDisabledRow
  }, props), columns.map(function (column) {
    return /*#__PURE__*/React.createElement(Cell, {
      key: prefix + "-cell-" + column.name,
      column: column,
      item: item,
      "data-testid": prefix + "-" + column.name,
      extended: extended
    });
  }));
};

var StyledRow = styled(Box)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  ", ";\n  grid-template-columns: ", ";\n  ", "\n  cursor: ", ";\n  ", "\n"])), themed('Grid.row'), function (props) {
  return props.gridTemplateColumns;
}, function (props) {
  return props.extended && themed('Grid.row-extended');
}, function (_ref2) {
  var isClickableRow = _ref2.isClickableRow;
  return isClickableRow && 'pointer';
}, function (_ref3) {
  var isDisabledRow = _ref3.isDisabledRow;
  return isDisabledRow && "opacity: 50%;";
});
Row.propTypes = process.env.NODE_ENV !== "production" ? {
  extended: PropTypes.bool,
  item: PropTypes.object,
  columns: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  })),
  prefix: PropTypes.string,
  rowAction: PropTypes.func,
  isClickableRow: PropTypes.bool,
  isDisabledRow: PropTypes.bool
} : {};
export default Row;