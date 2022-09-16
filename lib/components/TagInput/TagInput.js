"use strict";

exports.__esModule = true;
exports.TagInput = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _themeGet = require("@styled-system/theme-get");

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

var _css = _interopRequireDefault(require("@styled-system/css"));

var _etvaskit = require("@etvas/etvaskit");

var _variants = _interopRequireDefault(require("./variants.container"));

var _variants2 = _interopRequireDefault(require("./variants.input"));

var _shape = require("./shape");

var _Tag = require("./Tag");

var _SubLabel = require("./SubLabel");

var _templateObject;

var _excluded = ["label", "placeholder", "loading", "required", "disabled", "readOnly", "error", "warning", "valid", "variant", "id", "name", "value", "onChange", "onBlur", "autoComplete", "autoFocus", "onInputClick", "importHandler", "exportHandler", "noPreserveSpace", "forceAddTagKeys", "maxTags"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TagInput = (0, _react.forwardRef)(function (_ref, ref) {
  var label = _ref.label,
      placeholder = _ref.placeholder,
      loading = _ref.loading,
      required = _ref.required,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      error = _ref.error,
      warning = _ref.warning,
      valid = _ref.valid,
      variant = _ref.variant,
      id = _ref.id,
      name = _ref.name,
      value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      autoComplete = _ref.autoComplete,
      autoFocus = _ref.autoFocus,
      onInputClick = _ref.onInputClick,
      importHandler = _ref.importHandler,
      exportHandler = _ref.exportHandler,
      noPreserveSpace = _ref.noPreserveSpace,
      forceAddTagKeys = _ref.forceAddTagKeys,
      maxTags = _ref.maxTags,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = (0, _react.useState)(''),
      inputValue = _useState[0],
      setInputValue = _useState[1];

  var tags = (0, _react.useMemo)(function () {
    return importHandler(value);
  }, [value, importHandler]);
  var currentVariant = (0, _react.useMemo)(function () {
    if (disabled || loading) return 'disabled';else if (error) return 'error';else if (warning) return 'warning';else if (valid) return 'valid';
    return variant;
  }, [loading, disabled, error, warning, valid, variant]);

  var handleTagRemove = function handleTagRemove(index) {
    return function () {
      var newTags = [].concat(tags);
      newTags.splice(index, 1);
      onChange(exportHandler(newTags));
    };
  };

  var handleTagAdd = function handleTagAdd() {
    onChange(exportHandler([].concat(tags, [inputValue.trim()])));
  };

  var handleInputChange = (0, _react.useCallback)(function (event) {
    return setInputValue(event.target.value);
  }, []);

  var handleInputKeyPress = function handleInputKeyPress(event) {
    if ([].concat(forceAddTagKeys, ['Enter']).includes(event.key)) {
      event.preventDefault();

      if (inputValue.trim()) {
        handleTagAdd();
        setInputValue('');
      }
    }
  };

  var handleInputKeyUp = function handleInputKeyUp(event) {
    if (event.key === 'Backspace' && !inputValue) {
      handleTagRemove(-1)();
    }
  };

  var handleInputBlur = function handleInputBlur(event) {
    onBlur(event);

    if (inputValue.trim()) {
      handleTagAdd();
    }

    setInputValue('');
  };

  return /*#__PURE__*/_react["default"].createElement(Container, _extends({
    flexDirection: "column",
    width: 1
  }, rest), !!label && /*#__PURE__*/_react["default"].createElement(_etvaskit.Box, {
    mb: 1
  }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Typography, {
    as: "label",
    htmlFor: id,
    variant: "base12Bold",
    color: "baseMetal",
    width: "fit-content"
  }, label)), /*#__PURE__*/_react["default"].createElement(_etvaskit.Flex, {
    alignItems: "center",
    position: "relative",
    width: 1
  }, /*#__PURE__*/_react["default"].createElement(StyledInputContainer, {
    variant: currentVariant
  }, tags.map(function (tag, index) {
    return /*#__PURE__*/_react["default"].createElement(_Tag.Tag, {
      value: tag // eslint-disable-next-line react/no-array-index-key
      ,
      key: index,
      disabled: disabled,
      onRemove: handleTagRemove(index),
      my: 1
    });
  }), !disabled && maxTags >= tags.length && /*#__PURE__*/_react["default"].createElement(StyledInput, {
    variant: currentVariant,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    ariaDisabled: readOnly || disabled,
    disabled: disabled,
    error: error,
    hasLabel: label,
    id: id,
    name: name,
    onChange: handleInputChange,
    placeholder: readOnly ? '' : placeholder,
    readOnly: readOnly,
    ref: ref,
    required: required,
    type: "text",
    value: inputValue,
    onClick: onInputClick,
    onKeyPress: handleInputKeyPress,
    onKeyUp: handleInputKeyUp,
    onBlur: handleInputBlur
  }))), /*#__PURE__*/_react["default"].createElement(_SubLabel.SubLabel, {
    noPreserveSpace: noPreserveSpace,
    variant: currentVariant,
    mt: 1
  }, error));
});
exports.TagInput = TagInput;
var Container = (0, _styledComponents["default"])(_etvaskit.Flex)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  user-select: none;\n  overflow: hidden;\n  &:focus-within {\n    label {\n      color: ", ";\n    }\n  }\n"])), (0, _themeGet.themeGet)('colors.textInputFocused'));

var StyledInputContainer = _styledComponents["default"].div((0, _styledSystem.variant)({
  variants: _variants["default"]
}), (0, _css["default"])({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  py: '3px'
}));

var StyledInput = _styledComponents["default"].input((0, _styledSystem.variant)({
  variants: _variants2["default"]
}));

var defaultImportHandler = function defaultImportHandler(value) {
  return value;
};

var defaultExportHandler = function defaultExportHandler(value) {
  return value;
};

TagInput.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _propTypes2["default"].input, _shape.tagShape, {
  loading: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  error: _propTypes["default"].node,
  warning: _propTypes["default"].bool,
  valid: _propTypes["default"].bool,
  variant: _propTypes["default"].string,
  autoComplete: _propTypes["default"].string,
  autoFocus: _propTypes["default"].bool,
  onInputClick: _propTypes["default"].func,
  value: _propTypes["default"].string,
  handleChange: _propTypes["default"].func,
  importHandler: _propTypes["default"].func,
  exportHandler: _propTypes["default"].func,
  noPreserveSpace: _propTypes["default"].bool,
  maxTags: _propTypes["default"].number,
  forceAddTagKeys: _propTypes["default"].arrayOf(_propTypes["default"].string)
}) : {};
TagInput.defaultProps = {
  autoFocus: false,
  minHeight: 40,
  noBottomSpace: false,
  readOnly: false,
  value: '',
  variant: 'default',
  importHandler: defaultImportHandler,
  exportHandler: defaultExportHandler,
  forceAddTagKeys: [],
  maxTags: 20
};