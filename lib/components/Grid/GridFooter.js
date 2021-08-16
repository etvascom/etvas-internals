"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _etvaskit = require("@etvas/etvaskit");

var _css = _interopRequireDefault(require("@styled-system/css"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _excluded = ["onChange", "disabled", "resultsPerPage", "initialElements"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
  return /*#__PURE__*/_react["default"].createElement(_etvaskit.Box, null, /*#__PURE__*/_react["default"].createElement(_etvaskit.Flex, {
    justifyContent: "flex-end"
  }, /*#__PURE__*/_react["default"].createElement(ItemDisplayCounter, {
    mr: 2,
    disabled: loading,
    initialElements: pageLimit,
    resultsPerPage: resultsPerPage,
    onChange: actions === null || actions === void 0 ? void 0 : actions.changeCounter
  }), /*#__PURE__*/_react["default"].createElement(StyledButton, {
    mr: 2,
    onClick: actions === null || actions === void 0 ? void 0 : (_actions$prev = actions.prev) === null || _actions$prev === void 0 ? void 0 : _actions$prev.handlePrev,
    disabled: actions === null || actions === void 0 ? void 0 : (_actions$prev2 = actions.prev) === null || _actions$prev2 === void 0 ? void 0 : _actions$prev2.disabled
  }, "Prev"), /*#__PURE__*/_react["default"].createElement(StyledButton, {
    onClick: actions === null || actions === void 0 ? void 0 : (_actions$next = actions.next) === null || _actions$next === void 0 ? void 0 : _actions$next.handleNext,
    disabled: actions === null || actions === void 0 ? void 0 : (_actions$next2 = actions.next) === null || _actions$next2 === void 0 ? void 0 : _actions$next2.disabled
  }, "Next")));
};

GridFooter.propTypes = process.env.NODE_ENV !== "production" ? {
  paginationConfig: _propTypes["default"].shape({
    resultsPerPage: _propTypes["default"].arrayOf(_propTypes["default"].number),
    loading: _propTypes["default"].bool,
    pageLimit: _propTypes["default"].number,
    actions: _propTypes["default"].shape({
      changeCounter: _propTypes["default"].func,
      next: _propTypes["default"].shape({
        handleNext: _propTypes["default"].func,
        disabled: _propTypes["default"].bool
      }),
      prev: _propTypes["default"].shape({
        handlePrev: _propTypes["default"].func,
        disabled: _propTypes["default"].bool
      })
    })
  })
} : {};
var StyledButton = (0, _styledComponents["default"])(_etvaskit.Button)((0, _css["default"])({
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

  return /*#__PURE__*/_react["default"].createElement(_etvaskit.Flex, _extends({
    alignItems: "center"
  }, props), /*#__PURE__*/_react["default"].createElement(_etvaskit.Typography, {
    variant: "inputLabel",
    mr: 1
  }, "Show"), /*#__PURE__*/_react["default"].createElement(_etvaskit.Dropdown, {
    noBottomSpace: true,
    value: initialElements,
    valueRender: function valueRender(value) {
      return value + " Results";
    },
    onChange: onChange,
    disabled: disabled
  }, resultsPerPage.map(function (el) {
    return /*#__PURE__*/_react["default"].createElement(_etvaskit.Dropdown.Option, {
      key: el,
      value: el
    }, el, " Results");
  })));
};

ItemDisplayCounter.defaultProps = {
  resultsPerPage: [5, 10, 25]
};
ItemDisplayCounter.propTypes = process.env.NODE_ENV !== "production" ? {
  onChange: _propTypes["default"].func,
  disabled: _propTypes["default"].bool,
  resultsPerPage: _propTypes["default"].arrayOf(_propTypes["default"].number),
  initialElements: _propTypes["default"].number
} : {};
var _default = GridFooter;
exports["default"] = _default;
module.exports = exports.default;