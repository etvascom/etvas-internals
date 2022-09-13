"use strict";

exports.__esModule = true;
exports.Rule = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formik = require("formik");

var _etvaskit = require("@etvas/etvaskit");

var _TagField = require("../TagInput/TagField");

var _IntervalField = require("../IntervalField");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Rule = function Rule(_ref) {
  var disabled = _ref.disabled,
      rule = _ref.rule,
      name = _ref.name,
      options = _ref.options,
      removeRuleIcon = _ref.removeRuleIcon,
      isAbsolute = _ref.isAbsolute,
      typeLabel = _ref.typeLabel,
      onRemove = _ref.onRemove;
  var allTypeOptions = (0, _react.useMemo)(function () {
    return Object.keys(options).map(function (type) {
      return {
        label: options[type].label,
        value: type
      };
    });
  }, [options]);
  var typeOptions = (0, _react.useMemo)(function () {
    return isAbsolute ? allTypeOptions.filter(function (option) {
      return option.value === rule.type;
    }) : allTypeOptions;
  }, [allTypeOptions, isAbsolute, rule]);
  var type = (0, _react.useMemo)(function () {
    return rule.type;
  }, [rule]);
  var operatorName = (0, _react.useMemo)(function () {
    return name + "." + type + "Operator";
  }, [name, type]);

  var _useField = (0, _formik.useField)(operatorName),
      operatorValue = _useField[0].value;

  var operator = (0, _react.useMemo)(function () {
    return options[type].operator;
  }, [options, type]);
  var value = (0, _react.useMemo)(function () {
    var _options$type$operato, _options$type, _options$type$operato2;

    return (_options$type$operato = (_options$type = options[type]) === null || _options$type === void 0 ? void 0 : (_options$type$operato2 = _options$type.operatorValue) === null || _options$type$operato2 === void 0 ? void 0 : _options$type$operato2[operatorValue]) !== null && _options$type$operato !== void 0 ? _options$type$operato : options[type].value;
  }, [options, type, operatorValue]);
  var typePlaceholder = (0, _react.useMemo)(function () {
    return options[type].placeholder;
  }, [options, type]);
  var valuePlaceholder = (0, _react.useMemo)(function () {
    return value.placeholder;
  }, [value]);
  var isSuffixType = (0, _react.useMemo)(function () {
    return value.suffix;
  }, [value]);
  return /*#__PURE__*/_react["default"].createElement(_etvaskit.Flex, {
    width: 1,
    justifyContent: "space-between",
    alignItems: "flex-start"
  }, /*#__PURE__*/_react["default"].createElement(_etvaskit.DropdownField, {
    disabled: disabled,
    options: typeOptions,
    name: name + ".type",
    placeholder: typePlaceholder,
    label: typeLabel,
    required: true,
    mr: 4
  }), /*#__PURE__*/_react["default"].createElement(_etvaskit.DropdownField, {
    disabled: disabled,
    options: operator.options,
    name: name + "." + type + "Operator",
    placeholder: operator.placeholder,
    label: operator.label,
    required: true,
    mr: 4
  }), value.type === 'tag' ? /*#__PURE__*/_react["default"].createElement(_TagField.TagField, {
    disabled: disabled,
    name: name + "." + type + "Value",
    type: "text",
    label: value.label,
    placeholder: valuePlaceholder,
    separator: ",",
    required: true
  }) : value.type === 'between' ? /*#__PURE__*/_react["default"].createElement(_IntervalField.IntervalField, {
    disabled: disabled,
    name: name + "." + type + "Value",
    label: value.label,
    placeholder: valuePlaceholder,
    suffix: value.suffix,
    suffixSpace: value.suffixSpace || 0,
    required: true
  }) : isSuffixType ? /*#__PURE__*/_react["default"].createElement(_etvaskit.SubdomainField, {
    disabled: disabled,
    name: name + "." + type + "Value",
    type: value.type,
    label: value.label,
    placeholder: valuePlaceholder,
    suffix: value.suffix,
    suffixSpace: value.suffixSpace || 0,
    prefix: "",
    required: true
  }) : /*#__PURE__*/_react["default"].createElement(_etvaskit.TextField, {
    disabled: disabled,
    name: name + "." + type + "Value",
    type: value.type,
    label: value.label,
    placeholder: valuePlaceholder,
    suffix: value.suffix,
    suffixSpace: value.suffixSpace || 0,
    required: true
  }), !disabled && removeRuleIcon ? /*#__PURE__*/_react["default"].createElement(_etvaskit.Button, {
    variant: "link",
    ml: 4,
    mt: 6,
    onClick: onRemove
  }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Icon, {
    name: removeRuleIcon,
    size: "large"
  })) : /*#__PURE__*/_react["default"].createElement(_etvaskit.Box, {
    ml: 12,
    bg: "red"
  }));
};

exports.Rule = Rule;
Rule.propTypes = process.env.NODE_ENV !== "production" ? {
  options: _propTypes["default"].object,
  onRemove: _propTypes["default"].func,
  disabled: _propTypes["default"].bool,
  isAbsolute: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  removeRuleIcon: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].bool]),
  typeLabel: _propTypes["default"].node,
  rule: _propTypes["default"].object
} : {};