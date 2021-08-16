"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _etvaskit = require("@etvas/etvaskit");

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var sortTypes = process.env.NODE_ENV !== "production" ? [0, 1, 2, 3] : {};

var HeaderCell = function HeaderCell(_ref) {
  var column = _ref.column,
      sortType = _ref.sortType;
  return /*#__PURE__*/_react["default"].createElement(StyledWrapper, null, /*#__PURE__*/_react["default"].createElement(_etvaskit.Typography, {
    variant: "inputLabel"
  }, column.header, sortType ? /*#__PURE__*/_react["default"].createElement(StyledOrderIcons, null, /*#__PURE__*/_react["default"].createElement(_etvaskit.Icon, {
    size: "small",
    name: "menuUp",
    color: sortType === 3 ? 'brand' : 'textLabelDefault'
  }), /*#__PURE__*/_react["default"].createElement(_etvaskit.Icon, {
    size: "small",
    name: "menuDown",
    color: sortType === 2 ? 'brand' : 'textLabelDefault'
  })) : null));
};

var Header = function Header(_ref2) {
  var columns = _ref2.columns,
      toggleSort = _ref2.toggleSort,
      sortConfig = _ref2.sortConfig;
  var gridTemplateColumns = (0, _react.useMemo)(function () {
    return columns.map(function (column) {
      return column.width;
    }).join(' ');
  }, [columns]);

  var getSortType = function getSortType(column) {
    if (!column.sort) return 0;else if (column.sort !== sortConfig.field) return 1;else if (sortConfig.asc) return 2;
    return 3;
  };

  return /*#__PURE__*/_react["default"].createElement(StyledRow, {
    gridTemplateColumns: gridTemplateColumns
  }, columns.map(function (column) {
    return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
      key: column.name
    }, column.sort ? /*#__PURE__*/_react["default"].createElement(_etvaskit.Touchable, {
      key: "header-" + column.name,
      onClick: function onClick() {
        return toggleSort(column.sort);
      }
    }, /*#__PURE__*/_react["default"].createElement(HeaderCell, {
      column: column,
      sortType: getSortType(column)
    })) : /*#__PURE__*/_react["default"].createElement(HeaderCell, {
      key: "header-" + column.name,
      column: column,
      sortType: 0
    }));
  }));
};

var StyledRow = (0, _styledComponents["default"])(_etvaskit.Box)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  ", ";\n  grid-template-columns: ", ";\n"])), (0, _etvaskit.themed)('Grid.header'), function (props) {
  return props.gridTemplateColumns;
});
var StyledWrapper = (0, _styledComponents["default"])(_etvaskit.Box)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: ", ";\n  align-items: center;\n"])), function (props) {
  return props.align || 'left';
});
var StyledOrderIcons = (0, _styledComponents["default"])(_etvaskit.Box)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: 4px;\n\n  > svg:first-child {\n    margin-bottom: -5px;\n  }\n\n  > svg:last-child {\n    margin-top: -5px;\n  }\n"])));
HeaderCell.propTypes = process.env.NODE_ENV !== "production" ? {
  column: _propTypes["default"].object,
  sortType: _propTypes["default"].oneOf(sortTypes)
} : {};
Header.propTypes = process.env.NODE_ENV !== "production" ? {
  toggleSort: _propTypes["default"].func,
  sortConfig: _propTypes["default"].object,
  columns: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    name: _propTypes["default"].string
  }))
} : {};
var _default = Header;
exports["default"] = _default;
module.exports = exports.default;