var _templateObject;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useEffect, useMemo, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typography, Icon, Flex, Box, themed } from '@etvas/etvaskit';
import Row from './Row';
import Header from './GridHeader';
import { doSort } from './sorting';
import GridFooter from './GridFooter';
import { LoadingGrid } from './LoadingGrid';

var Grid = function Grid(_ref) {
  var extendedField = _ref.extendedField,
      RenderExtended = _ref.renderExtended,
      forceExtended = _ref.forceExtended,
      busy = _ref.busy,
      name = _ref.name,
      columns = _ref.columns,
      items = _ref.items,
      emptyGridText = _ref.emptyGridText,
      hasHeader = _ref.hasHeader,
      onRowClick = _ref.onRowClick,
      initialSort = _ref.initialSort,
      rowKeyAttribute = _ref.rowKeyAttribute,
      paginationConfig = _ref.paginationConfig,
      isDisabledRow = _ref.isDisabledRow,
      rowColor = _ref.rowColor,
      busyVariant = _ref.busyVariant,
      busySkeletonNumber = _ref.busySkeletonNumber;

  var _useState = useState(function () {
    if (initialSort === null || initialSort === void 0 ? void 0 : initialSort.by) {
      var asc = initialSort.asc === true || initialSort.asc === undefined;
      var column = columns.find(function (col) {
        return col.sort && col.name === initialSort.by;
      });

      if (column) {
        return {
          field: column.sort,
          asc: asc,
          sortTranslate: column.sortTranslate
        };
      }
    }

    return {};
  }),
      sortConfig = _useState[0],
      setSortConfig = _useState[1];

  var _useState2 = useState(''),
      extendedItem = _useState2[0],
      setExtendedItem = _useState2[1];

  var isExpandableRow = !!RenderExtended;
  useEffect(function () {
    setExtendedItem(forceExtended || '');
  }, [forceExtended]);
  var gridColumns = useMemo(function () {
    if (!extendedField) {
      return columns;
    }

    return [].concat(columns, [{
      name: 'extended',
      width: '64px',
      align: 'center',
      render: function render(item, extended) {
        if (extended) {
          return /*#__PURE__*/React.createElement(Icon, {
            name: "menuUp",
            size: "small",
            color: "inputIcon"
          });
        }

        return /*#__PURE__*/React.createElement(Icon, {
          name: "menuDown",
          size: "small",
          color: "inputIcon"
        });
      },
      action: function action(item, extended) {
        if (!extended) {
          setExtendedItem(item[extendedField]);
        } else {
          setExtendedItem('');
        }
      }
    }]);
  }, [columns, extendedField]);

  var toggleSort = function toggleSort(field) {
    var column = columns.find(function (col) {
      return col.sort === field;
    });

    if (field !== sortConfig.field) {
      setSortConfig({
        field: field,
        asc: true,
        sortTranslate: column.sortTranslate
      });
      return;
    }

    if (sortConfig.asc) {
      setSortConfig(_extends({}, sortConfig, {
        asc: false,
        sortTranslate: column.sortTranslate
      }));
      return;
    }

    setSortConfig({});
  };

  if (!busy && (items === null || items === void 0 ? void 0 : items.length) === 0) {
    return /*#__PURE__*/React.createElement(Flex, {
      alignItems: "center",
      justifyContent: "center"
    }, /*#__PURE__*/React.createElement(Typography, {
      variant: "base14Light",
      color: "baseMetal",
      p: 6
    }, emptyGridText));
  }

  var handleOnRowClick = function handleOnRowClick(item) {
    if (onRowClick) {
      return onRowClick(item);
    }

    if (!isExpandableRow) {
      return;
    }

    if (item[extendedField] === extendedItem) {
      setExtendedItem('');
    } else {
      setExtendedItem(item[extendedField]);
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    mb: 6
  }, hasHeader && /*#__PURE__*/React.createElement(Header, {
    columns: gridColumns,
    toggleSort: toggleSort,
    sortConfig: sortConfig
  }), busy ? /*#__PURE__*/React.createElement(LoadingGrid, {
    busyVariant: busyVariant,
    busySkeletonNumber: busySkeletonNumber
  }) : sortItems(items, sortConfig).map(function (item) {
    var _item$id;

    return /*#__PURE__*/React.createElement(ItemWrapper, {
      scroll: item[extendedField] === extendedItem && forceExtended === extendedItem,
      key: item[rowKeyAttribute]
    }, /*#__PURE__*/React.createElement(Row, {
      key: name + "-row-" + ((_item$id = item.id) !== null && _item$id !== void 0 ? _item$id : item._id),
      item: item,
      prefix: name,
      columns: gridColumns,
      extended: item[extendedField] === extendedItem,
      isClickableRow: isExpandableRow || !!onRowClick,
      rowColor: rowColor,
      rowAction: handleOnRowClick,
      isDisabledRow: isDisabledRow(item)
    }), item[extendedField] === extendedItem ? /*#__PURE__*/React.createElement(ExtendedWrapper, null, item['key'] ? /*#__PURE__*/React.createElement(RenderExtended, {
      item: item
    }) : /*#__PURE__*/React.createElement(RenderExtended, item)) : null);
  })), /*#__PURE__*/React.createElement(GridFooter, {
    paginationConfig: paginationConfig
  }));
};

var ItemWrapper = function ItemWrapper(_ref2) {
  var children = _ref2.children,
      scroll = _ref2.scroll;
  var viewRef = useRef();
  useEffect(function () {
    if (viewRef.current && scroll) {
      viewRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, [viewRef, scroll]);
  return /*#__PURE__*/React.createElement("div", {
    ref: viewRef
  }, children);
};

ItemWrapper.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.any,
  scroll: PropTypes.bool
} : {};

var sortItems = function sortItems(items, sortConfig) {
  var fieldName = sortConfig === null || sortConfig === void 0 ? void 0 : sortConfig.field;

  if (!fieldName) {
    return items;
  }

  var ascendant = (sortConfig === null || sortConfig === void 0 ? void 0 : sortConfig.asc) ? 1 : -1;
  var sortFunction = (sortConfig === null || sortConfig === void 0 ? void 0 : sortConfig.sort) || doSort;

  var translate = (sortConfig === null || sortConfig === void 0 ? void 0 : sortConfig.sortTranslate) || function (item) {
    return item[fieldName];
  };

  return items.slice(0).sort(function (a, b) {
    return ascendant * sortFunction(translate(a), translate(b));
  });
};

var ExtendedWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  margin-bottom: 4px;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n"])), themed('colors.backgroundCustomers'), themed('colors.lighterOutline'));
Grid.propTypes = process.env.NODE_ENV !== "production" ? {
  hasHeader: PropTypes.bool,
  extendedField: PropTypes.string,
  renderExtended: PropTypes.any,
  forceExtended: PropTypes.string,
  busy: PropTypes.bool,
  name: PropTypes.string,
  columns: PropTypes.array,
  initialSort: PropTypes.shape({
    by: PropTypes.string,
    asc: PropTypes.bool
  }),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string
  })),
  emptyGridText: PropTypes.node,
  onRowClick: PropTypes.func,
  paginationConfig: PropTypes.object,
  rowKeyAttribute: PropTypes.string,
  busyVariant: PropTypes.oneOf(['blockSkeleton', 'runningBar']),
  isDisabledRow: PropTypes.func,
  busySkeletonNumber: PropTypes.number,
  rowColor: PropTypes.func
} : {};
Grid.defaultProps = {
  hasHeader: true,
  emptyGridText: 'No items found',
  rowKeyAttribute: 'id',
  busyVariant: 'runningBar',
  isDisabledRow: function isDisabledRow() {
    return false;
  },
  busySkeletonNumber: 5,
  rowColor: function rowColor(item) {
    return 'baseWhite';
  }
};
export default Grid;