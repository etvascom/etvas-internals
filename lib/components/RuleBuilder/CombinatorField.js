"use strict";

exports.__esModule = true;
exports.CombinatorField = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formik = require("formik");

var _Combinator = require("./Combinator");

var _excluded = ["name", "disabled", "options"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CombinatorField = function CombinatorField(_ref) {
  var name = _ref.name,
      disabled = _ref.disabled,
      options = _ref.options,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  // eslint-disable-next-line no-unused-vars
  var _useField = (0, _formik.useField)(name),
      value = _useField[0].value,
      _ = _useField[1],
      setValue = _useField[2].setValue;

  return /*#__PURE__*/_react["default"].createElement(_Combinator.Combinator, _extends({
    value: value,
    onChange: setValue,
    options: options,
    disabled: disabled
  }, rest));
};

exports.CombinatorField = CombinatorField;
CombinatorField.propTypes = process.env.NODE_ENV !== "production" ? {
  name: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    value: _propTypes["default"].string,
    label: _propTypes["default"].node
  })).isRequired
} : {};