import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { Flex, DropdownField, TextField, Button, Icon, Box, SubdomainField } from '@etvas/etvaskit';
import { TagField } from '../TagInput/TagField';
import { IntervalField } from '../IntervalField';
export var Rule = function Rule(_ref) {
  var disabled = _ref.disabled,
      rule = _ref.rule,
      name = _ref.name,
      options = _ref.options,
      removeRuleIcon = _ref.removeRuleIcon,
      isAbsolute = _ref.isAbsolute,
      typeLabel = _ref.typeLabel,
      onRemove = _ref.onRemove;
  var allTypeOptions = useMemo(function () {
    return Object.keys(options).map(function (type) {
      return {
        label: options[type].label,
        value: type
      };
    });
  }, [options]);
  var typeOptions = useMemo(function () {
    return isAbsolute ? allTypeOptions.filter(function (option) {
      return option.value === rule.type;
    }) : allTypeOptions;
  }, [allTypeOptions, isAbsolute, rule]);
  var type = useMemo(function () {
    return rule.type;
  }, [rule]);
  var operatorName = useMemo(function () {
    return name + "." + type + "Operator";
  }, [name, type]);

  var _useField = useField(operatorName),
      operatorValue = _useField[0].value;

  var operator = useMemo(function () {
    return options[type].operator;
  }, [options, type]);
  var value = useMemo(function () {
    var _options$type$operato, _options$type, _options$type$operato2;

    return (_options$type$operato = (_options$type = options[type]) === null || _options$type === void 0 ? void 0 : (_options$type$operato2 = _options$type.operatorValue) === null || _options$type$operato2 === void 0 ? void 0 : _options$type$operato2[operatorValue]) !== null && _options$type$operato !== void 0 ? _options$type$operato : options[type].value;
  }, [options, type, operatorValue]);
  var typePlaceholder = useMemo(function () {
    return options[type].placeholder;
  }, [options, type]);
  var valuePlaceholder = useMemo(function () {
    return value.placeholder;
  }, [value]);
  var isSuffixType = useMemo(function () {
    return value.suffix;
  }, [value]);
  return /*#__PURE__*/React.createElement(Flex, {
    width: 1,
    justifyContent: "space-between",
    alignItems: "flex-start"
  }, /*#__PURE__*/React.createElement(DropdownField, {
    disabled: disabled,
    options: typeOptions,
    name: name + ".type",
    placeholder: typePlaceholder,
    label: typeLabel,
    required: true,
    mr: 4
  }), /*#__PURE__*/React.createElement(DropdownField, {
    disabled: disabled,
    options: operator.options,
    name: name + "." + type + "Operator",
    placeholder: operator.placeholder,
    label: operator.label,
    required: true,
    mr: 4
  }), value.type === 'tag' ? /*#__PURE__*/React.createElement(TagField, {
    disabled: disabled,
    name: name + "." + type + "Value",
    type: "text",
    label: value.label,
    placeholder: valuePlaceholder,
    separator: ",",
    required: true
  }) : value.type === 'between' ? /*#__PURE__*/React.createElement(IntervalField, {
    disabled: disabled,
    name: name + "." + type + "Value",
    label: value.label,
    placeholder: valuePlaceholder,
    suffix: value.suffix,
    suffixSpace: value.suffixSpace || 0,
    required: true
  }) : isSuffixType ? /*#__PURE__*/React.createElement(SubdomainField, {
    disabled: disabled,
    name: name + "." + type + "Value",
    type: value.type,
    label: value.label,
    placeholder: valuePlaceholder,
    suffix: value.suffix,
    suffixSpace: value.suffixSpace || 0,
    prefix: "",
    required: true
  }) : /*#__PURE__*/React.createElement(TextField, {
    disabled: disabled,
    name: name + "." + type + "Value",
    type: value.type,
    label: value.label,
    placeholder: valuePlaceholder,
    suffix: value.suffix,
    suffixSpace: value.suffixSpace || 0,
    required: true
  }), !disabled && removeRuleIcon ? /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    ml: 4,
    mt: 6,
    onClick: onRemove
  }, /*#__PURE__*/React.createElement(Icon, {
    name: removeRuleIcon,
    size: "large"
  })) : /*#__PURE__*/React.createElement(Box, {
    ml: 12,
    bg: "red"
  }));
};
Rule.propTypes = process.env.NODE_ENV !== "production" ? {
  options: PropTypes.object,
  onRemove: PropTypes.func,
  disabled: PropTypes.bool,
  isAbsolute: PropTypes.bool,
  name: PropTypes.string,
  removeRuleIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  typeLabel: PropTypes.node,
  rule: PropTypes.object
} : {};