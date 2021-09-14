"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _etvaskit = require("@etvas/etvaskit");

var _index = require("./index");

var _Tooltip = _interopRequireDefault(require("../Tooltip"));

var _templateObject;

var _excluded = ["item", "column", "checked", "extended"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var renderText = function renderText(renderedValue) {
  return /*#__PURE__*/_react["default"].createElement(_index.TruncateGridInfo, null, /*#__PURE__*/_react["default"].createElement(_etvaskit.Typography, {
    variant: "labelSmall",
    color: "textCardTitle"
  }, renderedValue));
};

var Cell = function Cell(_ref) {
  var _column$isDisabled2;

  var item = _ref.item,
      column = _ref.column,
      checked = _ref.checked,
      extended = _ref.extended,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = (0, _react.useState)(checked),
      isChecked = _useState[0],
      setChecked = _useState[1];

  var contents = (0, _react.useMemo)(function () {
    if (column.hide) {
      if (typeof column.hide === 'boolean' || column.hide instanceof Function && column.hide(item)) {
        // try null
        return /*#__PURE__*/_react["default"].createElement(_etvaskit.Box, {
          width: "100%",
          height: "100%"
        });
      }
    }

    if (column.checkbox) {
      var _handleChange = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
          var chk;
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return column.onToggleCheck(item);

                case 2:
                  chk = _context.sent;
                  setChecked(chk);

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function _handleChange() {
          return _ref2.apply(this, arguments);
        };
      }();

      return /*#__PURE__*/_react["default"].createElement(_etvaskit.Checkbox, {
        size: 24,
        id: "" + (column.id || column._id),
        checked: isChecked,
        onChange: _handleChange
      });
    }

    if (column.icon) {
      return /*#__PURE__*/_react["default"].createElement(_etvaskit.Icon, {
        name: column.icon,
        size: "medium",
        color: "inputIcon"
      });
    }

    if (column.iconButton) {
      var _column$isDisabled;

      var iconButton = /*#__PURE__*/_react["default"].createElement(_etvaskit.Button, {
        variant: "link",
        icon: column.iconButton,
        disabled: (_column$isDisabled = column.isDisabled) !== null && _column$isDisabled !== void 0 ? _column$isDisabled : false,
        iconColor: "inputIcon",
        align: column.align,
        onClick: function onClick(e) {
          column.action(item, extended);
          e.stopPropagation();
        }
      });

      return column.tooltip ? /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], column.tooltip, iconButton) : iconButton;
    }

    if (column.render) {
      return column.render(item, extended);
    }

    if (column.attribute) {
      if (column.attribute instanceof Function) {
        return renderText(column.attribute(item));
      }

      return renderText(item[column.attribute]);
    }

    return '';
  }, [column, isChecked, item, extended]);

  var cellContent = /*#__PURE__*/_react["default"].createElement(StyledTouchable, _extends({
    as: "div",
    icon: !!column.icon,
    align: column.align,
    disabled: (_column$isDisabled2 = column.isDisabled) !== null && _column$isDisabled2 !== void 0 ? _column$isDisabled2 : false,
    activeOpacity: 0.75,
    effect: "opacity",
    onClick: column.action,
    width: "100%"
  }, props), contents);

  return column.tooltip ? /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], column.tooltip, cellContent) : cellContent;
};

var StyledTouchable = (0, _styledComponents["default"])(_etvaskit.Touchable)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  ", ";\n  display: flex;\n  justify-content: ", ";\n  align-items: center;\n"])), (0, _etvaskit.themed)('Grid.cell'), function (props) {
  return props.align || 'left';
});
Cell.propTypes = process.env.NODE_ENV !== "production" ? {
  extended: _propTypes["default"].bool,
  item: _propTypes["default"].object,
  column: _propTypes["default"].object,
  checked: _propTypes["default"].bool
} : {};
var _default = Cell;
exports["default"] = _default;
module.exports = exports.default;