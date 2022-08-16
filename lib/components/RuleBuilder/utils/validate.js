"use strict";

exports.__esModule = true;
exports.validateRuleBuilder = void 0;

var _rule = require("./rule");

var validateRuleBuilder = function validateRuleBuilder(field, combinedRuleOptions, absoluteRuleOptions) {
  return function (values) {
    var _ref;

    var errors = [];
    values[field].groups.forEach(function (group, groupIndex) {
      var combinedErrors = generateRuleErrors(group.combined, combinedRuleOptions);
      var absoluteErrors = group.advancedTargeting ? generateRuleErrors(group.absolute, absoluteRuleOptions) : [];

      if (Object.keys(combinedErrors).length) {
        var _errors$groupIndex;

        errors[groupIndex] = (_errors$groupIndex = errors[groupIndex]) !== null && _errors$groupIndex !== void 0 ? _errors$groupIndex : {};
        errors[groupIndex].combined = combinedErrors;
      }

      if (Object.keys(absoluteErrors).length) {
        var _errors$groupIndex2;

        errors[groupIndex] = (_errors$groupIndex2 = errors[groupIndex]) !== null && _errors$groupIndex2 !== void 0 ? _errors$groupIndex2 : {};
        errors[groupIndex].absolute = absoluteErrors;
      }
    });
    return Object.keys(errors).length ? (_ref = {}, _ref[field] = {
      groups: errors
    }, _ref) : {};
  };
};

exports.validateRuleBuilder = validateRuleBuilder;

var generateRuleErrors = function generateRuleErrors(rules, options) {
  return rules.reduce(function (acc, rule, ruleIndex) {
    var _getRuleDetails = (0, _rule.getRuleDetails)(rule),
        type = _getRuleDetails.type,
        operator = _getRuleDetails.operator,
        value = _getRuleDetails.value,
        operatorKey = _getRuleDetails.operatorKey,
        valueKey = _getRuleDetails.valueKey;

    var failedOperatorValidator = options[type].operator.validate.find(function (item) {
      return item.validator(operator);
    });

    if (failedOperatorValidator) {
      var _acc$ruleIndex;

      acc[ruleIndex] = (_acc$ruleIndex = acc[ruleIndex]) !== null && _acc$ruleIndex !== void 0 ? _acc$ruleIndex : {};
      acc[ruleIndex][operatorKey] = failedOperatorValidator.error;
    }

    var failedValueValidator = options[type].value.validate.find(function (item) {
      return item.validator(value);
    });

    if (failedValueValidator) {
      var _acc$ruleIndex2;

      acc[ruleIndex] = (_acc$ruleIndex2 = acc[ruleIndex]) !== null && _acc$ruleIndex2 !== void 0 ? _acc$ruleIndex2 : {};
      acc[ruleIndex][valueKey] = failedValueValidator.error;
    }

    return acc;
  }, []);
};