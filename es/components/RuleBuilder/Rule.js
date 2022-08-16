import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Flex, DropdownField, TextField, Button, Icon, Box, SubdomainField } from '@etvas/etvaskit';
export var Rule = function Rule(_ref) {
  var disabled = _ref.disabled,
      rule = _ref.rule,
      name = _ref.name,
      options = _ref.options,
      removeRuleIcon = _ref.removeRuleIcon,
      isAbsolute = _ref.isAbsolute,
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
  var label = useMemo(function () {
    return options[type].label;
  }, [options, type]);
  var placeholder = useMemo(function () {
    return options[type].placeholder;
  }, [options, type]);
  var operator = useMemo(function () {
    return options[type].operator;
  }, [options, type]);
  var value = useMemo(function () {
    return options[type].value;
  }, [options, type]);
  var isSuffixType = useMemo(function () {
    return value.suffix;
  }, [value]);
  return /*#__PURE__*/React.createElement(Flex, {
    width: 1,
    justifyContent: "space-between",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(DropdownField, {
    disabled: disabled,
    options: typeOptions,
    name: name + ".type",
    placeholder: placeholder,
    label: label,
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
  }), isSuffixType ? /*#__PURE__*/React.createElement(SubdomainField, {
    disabled: disabled,
    name: name + "." + type + "Value",
    type: value.type,
    label: value.label,
    placeholder: value.placeholder,
    suffix: value.suffix,
    suffixSpace: value.suffixSpace || 0,
    prefix: "",
    required: true
  }) : /*#__PURE__*/React.createElement(TextField, {
    disabled: disabled,
    name: name + "." + type + "Value",
    type: value.type,
    label: value.label,
    placeholder: value.placeholder,
    required: true
  }), !disabled && removeRuleIcon ? /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    ml: 4,
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
  rule: PropTypes.object
} : {};