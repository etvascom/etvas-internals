"use strict";

exports.__esModule = true;
exports.IntervalField = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formik = require("formik");

var _uuid = require("uuid");

var _etvaskit = require("@etvas/etvaskit");

var _SubLabel = require("./TagInput/SubLabel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var IntervalField = function IntervalField(_ref) {
  var id = _ref.id,
      name = _ref.name,
      label = _ref.label,
      placeholder = _ref.placeholder,
      noPreserveSpace = _ref.noPreserveSpace,
      disabled = _ref.disabled,
      separator = _ref.separator,
      stringSeparator = _ref.stringSeparator,
      suffix = _ref.suffix,
      suffixSpace = _ref.suffixSpace;

  var _useField = (0, _formik.useField)(name),
      value = _useField[0].value,
      _useField$ = _useField[1],
      touched = _useField$.touched,
      error = _useField$.error,
      setValue = _useField[2].setValue;

  var _useFormikContext = (0, _formik.useFormikContext)(),
      submitCount = _useFormikContext.submitCount;

  var _error = touched && error;

  var displayedError = submitCount > 0 ? _error : value && _error;

  var _useMemo = (0, _react.useMemo)(function () {
    var idOrNameId = id || name + "-" + (0, _uuid.v4)();
    return [idOrNameId + "-left", idOrNameId + "-right"];
  }, [id, name]),
      idLeft = _useMemo[0],
      idRight = _useMemo[1];

  (0, _react.useEffect)(function () {
    if (!value.toString().includes(stringSeparator)) {
      setValue("" + value + stringSeparator);
    }
  }, [value, setValue, stringSeparator]);
  var placeholderSplit = placeholder === null || placeholder === void 0 ? void 0 : placeholder.split('-');
  var placeholderLeft = placeholderSplit === null || placeholderSplit === void 0 ? void 0 : placeholderSplit.shift(),
      placeholderRight = placeholderSplit === null || placeholderSplit === void 0 ? void 0 : placeholderSplit.pop();
  var valueSplit = value === null || value === void 0 ? void 0 : value.toString().split(stringSeparator);
  var leftValue = valueSplit === null || valueSplit === void 0 ? void 0 : valueSplit.shift(),
      rightValue = valueSplit === null || valueSplit === void 0 ? void 0 : valueSplit.pop();
  var handleLeftChange = (0, _react.useCallback)(function (event) {
    var val = event.target.value;
    setValue("" + val + stringSeparator + (value === null || value === void 0 ? void 0 : value.split(stringSeparator).pop()));
  }, [setValue, value, stringSeparator]);
  var handleRightChange = (0, _react.useCallback)(function (event) {
    var val = event.target.value;
    setValue("" + (value === null || value === void 0 ? void 0 : value.split(stringSeparator).shift()) + stringSeparator + val);
  }, [setValue, value, stringSeparator]);
  return /*#__PURE__*/_react["default"].createElement(_etvaskit.Flex, {
    width: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Flex, {
    width: 1,
    justifyContent: "space-between",
    alignItems: "flex-end"
  }, /*#__PURE__*/_react["default"].createElement(_etvaskit.SubdomainInput, {
    id: idLeft,
    label: label,
    disabled: disabled,
    type: "number",
    placeholder: placeholderLeft,
    suffix: suffix,
    suffixSpace: suffixSpace || 0,
    prefix: "",
    value: leftValue,
    onChange: handleLeftChange,
    error: !!displayedError,
    noBottomSpace: true,
    required: true
  }), /*#__PURE__*/_react["default"].createElement(_etvaskit.Typography, {
    variant: "base12Bold",
    px: 2,
    mb: "14px"
  }, separator), /*#__PURE__*/_react["default"].createElement(_etvaskit.SubdomainInput, {
    id: idRight,
    disabled: disabled,
    type: "number",
    placeholder: placeholderRight,
    suffix: suffix,
    suffixSpace: suffixSpace || 0,
    prefix: "",
    value: rightValue,
    onChange: handleRightChange,
    error: !!displayedError,
    noBottomSpace: true,
    required: true
  })), /*#__PURE__*/_react["default"].createElement(_SubLabel.SubLabel, {
    noPreserveSpace: noPreserveSpace,
    variant: "error",
    mt: 1
  }, displayedError));
};

exports.IntervalField = IntervalField;
IntervalField.propTypes = process.env.NODE_ENV !== "production" ? {
  id: _propTypes["default"].string,
  name: _propTypes["default"].string,
  label: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  noPreserveSpace: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  separator: _propTypes["default"].string,
  stringSeparator: _propTypes["default"].string,
  suffix: _propTypes["default"].string,
  suffixSpace: _propTypes["default"].number
} : {};
IntervalField.defaultProps = {
  separator: '-',
  stringSeparator: '.'
};