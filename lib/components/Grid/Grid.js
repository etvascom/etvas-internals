"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _etvaskit = require("@etvas/etvaskit");

var _Row = _interopRequireDefault(require("./Row"));

var _GridHeader = _interopRequireDefault(require("./GridHeader"));

var _sorting = require("./sorting");

var _GridFooter = _interopRequireDefault(require("./GridFooter"));

var _LoadingGrid = require("./LoadingGrid");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

  var _useState = (0, _react.useState)(function () {
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

  var _useState2 = (0, _react.useState)(''),
      extendedItem = _useState2[0],
      setExtendedItem = _useState2[1];

  var isExpandableRow = !!RenderExtended;
  (0, _react.useEffect)(function () {
    setExtendedItem(forceExtended || '');
  }, [forceExtended]);
  var gridColumns = (0, _react.useMemo)(function () {
    if (!extendedField) {
      return columns;
    }

    return [].concat(columns, [{
      name: 'extended',
      width: '64px',
      align: 'center',
      render: function render(item, extended) {
        if (extended) {
          return /*#__PURE__*/_react["default"].createElement(_etvaskit.Icon, {
            name: "menuUp",
            size: "small",
            color: "inputIcon"
          });
        }

        return /*#__PURE__*/_react["default"].createElement(_etvaskit.Icon, {
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
    return /*#__PURE__*/_react["default"].createElement(_etvaskit.Flex, {
      alignItems: "center",
      justifyContent: "center"
    }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Typography, {
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

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_etvaskit.Box, {
    mb: 6
  }, hasHeader && /*#__PURE__*/_react["default"].createElement(_GridHeader["default"], {
    columns: gridColumns,
    toggleSort: toggleSort,
    sortConfig: sortConfig
  }), busy ? /*#__PURE__*/_react["default"].createElement(_LoadingGrid.LoadingGrid, {
    busyVariant: busyVariant,
    busySkeletonNumber: busySkeletonNumber
  }) : sortItems(items, sortConfig).map(function (item) {
    var _item$id;

    return /*#__PURE__*/_react["default"].createElement(ItemWrapper, {
      scroll: item[extendedField] === extendedItem && forceExtended === extendedItem,
      key: item[rowKeyAttribute]
    }, /*#__PURE__*/_react["default"].createElement(_Row["default"], {
      key: name + "-row-" + ((_item$id = item.id) !== null && _item$id !== void 0 ? _item$id : item._id),
      item: item,
      prefix: name,
      columns: gridColumns,
      extended: item[extendedField] === extendedItem,
      isClickableRow: isExpandableRow || !!onRowClick,
      rowColor: rowColor,
      rowAction: handleOnRowClick,
      isDisabledRow: isDisabledRow(item)
    }), item[extendedField] === extendedItem ? /*#__PURE__*/_react["default"].createElement(ExtendedWrapper, null, item['key'] ? /*#__PURE__*/_react["default"].createElement(RenderExtended, {
      item: item
    }) : /*#__PURE__*/_react["default"].createElement(RenderExtended, item)) : null);
  })), /*#__PURE__*/_react["default"].createElement(_GridFooter["default"], {
    paginationConfig: paginationConfig
  }));
};

var ItemWrapper = function ItemWrapper(_ref2) {
  var children = _ref2.children,
      scroll = _ref2.scroll;
  var viewRef = (0, _react.useRef)();
  (0, _react.useLayoutEffect)(function () {
    if (viewRef.current && scroll) {
      // wait for next tick (after render)
      setTimeout(function () {
        viewRef.current.scrollIntoView({
          behavior: 'smooth'
        });
      }, 0);
    }
  }, [viewRef, scroll]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: viewRef
  }, children);
};

ItemWrapper.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes["default"].any,
  scroll: _propTypes["default"].bool
} : {};

var sortItems = function sortItems(items, sortConfig) {
  var fieldName = sortConfig === null || sortConfig === void 0 ? void 0 : sortConfig.field;

  if (!fieldName) {
    return items;
  }

  var ascendant = (sortConfig === null || sortConfig === void 0 ? void 0 : sortConfig.asc) ? 1 : -1;
  var sortFunction = (sortConfig === null || sortConfig === void 0 ? void 0 : sortConfig.sort) || _sorting.doSort;

  var translate = (sortConfig === null || sortConfig === void 0 ? void 0 : sortConfig.sortTranslate) || function (item) {
    return item[fieldName];
  };

  return items.slice(0).sort(function (a, b) {
    return ascendant * sortFunction(translate(a), translate(b));
  });
};

var ExtendedWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  margin-bottom: 4px;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n"])), (0, _etvaskit.themed)('colors.backgroundCustomers'), (0, _etvaskit.themed)('colors.lighterOutline'));

Grid.propTypes = process.env.NODE_ENV !== "production" ? {
  hasHeader: _propTypes["default"].bool,
  extendedField: _propTypes["default"].string,
  renderExtended: _propTypes["default"].any,
  forceExtended: _propTypes["default"].string,
  busy: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  columns: _propTypes["default"].array,
  initialSort: _propTypes["default"].shape({
    by: _propTypes["default"].string,
    asc: _propTypes["default"].bool
  }),
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
  })),
  emptyGridText: _propTypes["default"].node,
  onRowClick: _propTypes["default"].func,
  paginationConfig: _propTypes["default"].object,
  rowKeyAttribute: _propTypes["default"].string,
  busyVariant: _propTypes["default"].oneOf(['blockSkeleton', 'runningBar']),
  isDisabledRow: _propTypes["default"].func,
  busySkeletonNumber: _propTypes["default"].number,
  rowColor: _propTypes["default"].func
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
var _default = Grid;
exports["default"] = _default;
module.exports = exports.default;