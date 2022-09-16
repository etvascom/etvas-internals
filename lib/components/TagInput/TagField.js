"use strict";

exports.__esModule = true;
exports.TagField = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uuid = require("uuid");

var _formik = require("formik");

var _shape = require("./shape");

var _TagInput = require("./TagInput");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TagField = (0, _react.forwardRef)(function (props, ref) {
  var _useFormikContext = (0, _formik.useFormikContext)(),
      submitCount = _useFormikContext.submitCount;

  var _useField = (0, _formik.useField)(props),
      field = _useField[0],
      meta = _useField[1],
      helpers = _useField[2];

  var id = props.id || props.name + "-" + (0, _uuid.v4)();
  var error = meta.touched && meta.error;
  var displayedError = submitCount > 0 ? error : field.value && error;
  return /*#__PURE__*/_react["default"].createElement(_TagInput.TagInput, _extends({}, props, field, {
    exportHandler: exportHandler(props.separator),
    importHandler: importHandler(props.separator),
    onChange: helpers.setValue,
    onBlur: field.onBlur,
    value: field.value,
    id: id,
    error: displayedError,
    forceAddTagKeys: [props.separator],
    ref: ref
  }));
});
exports.TagField = TagField;

var exportHandler = function exportHandler(separator) {
  return function (values) {
    return values.join(separator);
  };
};

var importHandler = function importHandler(separator) {
  return function (values) {
    return values.split(separator).filter(function (val) {
      return !!val;
    }).map(function (val) {
      return val.trim();
    });
  };
};

TagField.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _shape.tagShape, {
  separator: _propTypes["default"].string
}) : {};
TagField.defaultProps = {
  separator: ','
};