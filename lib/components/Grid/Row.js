"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _etvaskit = require("@etvas/etvaskit");

var _Cell = _interopRequireDefault(require("./Cell"));

var _templateObject;

var _excluded = ["item", "columns", "prefix", "extended", "isClickableRow", "rowAction"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Row = function Row(_ref) {
  var item = _ref.item,
      columns = _ref.columns,
      prefix = _ref.prefix,
      extended = _ref.extended,
      isClickableRow = _ref.isClickableRow,
      rowAction = _ref.rowAction,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var gridTemplateColumns = (0, _react.useMemo)(function () {
    return columns.map(function (column) {
      return column.width;
    }).join(' ');
  }, [columns]);
  return /*#__PURE__*/_react["default"].createElement(StyledRow, _extends({
    gridTemplateColumns: gridTemplateColumns,
    extended: extended,
    isClickableRow: isClickableRow,
    onClick: function onClick() {
      return rowAction(item);
    }
  }, props), columns.map(function (column) {
    return /*#__PURE__*/_react["default"].createElement(_Cell["default"], {
      key: prefix + "-cell-" + column.name,
      column: column,
      item: item,
      "data-testid": prefix + "-" + column.name,
      extended: extended
    });
  }));
};

var StyledRow = (0, _styledComponents["default"])(_etvaskit.Box)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  ", ";\n  grid-template-columns: ", ";\n  ", "\n  cursor: ", ";\n"])), (0, _etvaskit.themed)('Grid.row'), function (props) {
  return props.gridTemplateColumns;
}, function (props) {
  return props.extended && (0, _etvaskit.themed)('Grid.row-extended');
}, function (_ref2) {
  var isClickableRow = _ref2.isClickableRow;
  return isClickableRow && 'pointer';
});
Row.propTypes = process.env.NODE_ENV !== "production" ? {
  extended: _propTypes["default"].bool,
  item: _propTypes["default"].object,
  columns: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    name: _propTypes["default"].string
  })),
  prefix: _propTypes["default"].string,
  rowAction: _propTypes["default"].func,
  isClickableRow: _propTypes["default"].bool
} : {};
var _default = Row;
exports["default"] = _default;
module.exports = exports.default;