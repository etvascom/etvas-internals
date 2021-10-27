"use strict";

exports.__esModule = true;
exports.GridButtons = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _etvaskit = require("@etvas/etvaskit");

var _GridButton = require("./GridButton");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GridButtons = function GridButtons(_ref) {
  var item = _ref.item,
      actions = _ref.actions;
  var availableActions = actions.filter(function (action) {
    return !action.hide;
  });
  return /*#__PURE__*/_react["default"].createElement(_etvaskit.Flex, {
    width: "100%",
    justifyContent: "flex-end"
  }, availableActions.map(function (action, i) {
    return /*#__PURE__*/_react["default"].createElement(_GridButton.GridButton, {
      width: "auto",
      key: typeof action.buttonText === 'string' ? action.buttonText : action.id,
      disabled: action.disabled,
      loading: action.loading,
      onClick: function onClick(e) {
        e.stopPropagation();
        action.action(item);
      },
      mr: i !== availableActions.length - 1 ? 6 : 0
    }, action.buttonText);
  }));
};

exports.GridButtons = GridButtons;
GridButtons.propTypes = process.env.NODE_ENV !== "production" ? {
  item: _propTypes["default"].any,
  actions: _propTypes["default"].arrayOf(_propTypes["default"].object)
} : {};