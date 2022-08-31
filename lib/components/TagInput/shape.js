"use strict";

exports.__esModule = true;
exports.tagShape = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var tagShape = {
  value: _propTypes["default"].any,
  name: _propTypes["default"].string,
  id: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  validate: _propTypes["default"].func,
  label: _propTypes["default"].node,
  placeholder: _propTypes["default"].node,
  required: _propTypes["default"].bool
};
exports.tagShape = tagShape;