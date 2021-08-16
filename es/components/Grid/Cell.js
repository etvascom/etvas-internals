import _regeneratorRuntime from "@babel/runtime/regenerator";

var _templateObject, _templateObject2;

var _excluded = ["item", "column", "checked", "extended", "cellAction"];

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Checkbox, Icon, themed, Touchable, Typography } from '@etvas/etvaskit';
import Tooltip from '../Tooltip';

var getCellWithAttribute = function getCellWithAttribute(item, column) {
  return /*#__PURE__*/React.createElement(Typography, {
    variant: "labelSmall",
    color: "textCardTitle"
  }, item[column.attribute]);
};

var Cell = function Cell(_ref) {
  var _column$isDisabled2, _column$action;

  var item = _ref.item,
      column = _ref.column,
      checked = _ref.checked,
      extended = _ref.extended,
      cellAction = _ref.cellAction,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = useState(checked),
      isChecked = _useState[0],
      setChecked = _useState[1];

  var contents = useMemo(function () {
    if (column.hide) {
      return;
    }

    if (column.checkbox) {
      var _handleChange = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
          var chk;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
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

      return /*#__PURE__*/React.createElement(Checkbox, {
        size: 24,
        id: "" + (column.id || column._id),
        checked: isChecked,
        onChange: _handleChange
      });
    }

    if (column.icon) {
      return /*#__PURE__*/React.createElement(Icon, {
        name: column.icon,
        size: "medium",
        color: "inputIcon"
      });
    }

    if (column.iconButton) {
      var _column$isDisabled;

      var iconButton = /*#__PURE__*/React.createElement(IconButton, {
        as: "button",
        align: column.align,
        disabled: (_column$isDisabled = column.isDisabled) !== null && _column$isDisabled !== void 0 ? _column$isDisabled : false,
        onClick: function onClick(e) {
          column.action(item, extended);
          e.stopPropagation();
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: column.iconButton,
        size: "medium",
        color: "inputIcon"
      }));
      return /*#__PURE__*/React.createElement(StyledTouchable, _extends({
        as: "div",
        align: column.align,
        onClick: cellAction,
        width: "100%"
      }, props), column.tooltip ? /*#__PURE__*/React.createElement(Tooltip, column.tooltip, iconButton) : iconButton);
    }

    if (column.render) {
      return column.render(item, extended);
    }

    if (column.attribute) {
      return getCellWithAttribute(item, column);
    }

    return '';
  }, [column, isChecked, item, cellAction, props, extended]);
  var cellContent = /*#__PURE__*/React.createElement(StyledTouchable, _extends({
    as: "div",
    icon: !!column.icon,
    align: column.align,
    disabled: (_column$isDisabled2 = column.isDisabled) !== null && _column$isDisabled2 !== void 0 ? _column$isDisabled2 : false,
    activeOpacity: 0.75,
    effect: "opacity",
    onClick: (_column$action = column.action) !== null && _column$action !== void 0 ? _column$action : cellAction,
    width: "100%"
  }, props), contents);

  if (column.iconButton) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, contents);
  }

  return column.tooltip ? /*#__PURE__*/React.createElement(Tooltip, column.tooltip, cellContent) : cellContent;
};

var StyledTouchable = styled(Touchable)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  ", ";\n  display: flex;\n  justify-content: ", ";\n  align-items: center;\n"])), themed('Grid.cell'), function (props) {
  return props.align || 'left';
});
var IconButton = styled(StyledTouchable)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  appearance: none;\n  border: none;\n  background-color: transparent;\n  cursor: ", ";\n\n  &:hover path {\n    fill: ", " !important;\n  }\n"])), function (_ref3) {
  var disabled = _ref3.disabled;
  return disabled ? 'not-allowed' : 'pointer';
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return !disabled && themed('colors.brand');
});
Cell.propTypes = process.env.NODE_ENV !== "production" ? {
  extended: PropTypes.bool,
  item: PropTypes.object,
  column: PropTypes.object,
  checked: PropTypes.bool,
  cellAction: PropTypes.func
} : {};
export default Cell;