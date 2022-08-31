import { getRuleDetails } from './rule';
export var validateRuleBuilder = function validateRuleBuilder(field, combinedRuleOptions, absoluteRuleOptions) {
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

var generateRuleErrors = function generateRuleErrors(rules, options) {
  return Object.keys(rules).reduce(function (acc, ruleId) {
    var _options$type$operato, _options$type, _options$type$operato2;

    var rule = rules[ruleId];

    var _getRuleDetails = getRuleDetails(rule),
        type = _getRuleDetails.type,
        operator = _getRuleDetails.operator,
        value = _getRuleDetails.value,
        operatorKey = _getRuleDetails.operatorKey,
        valueKey = _getRuleDetails.valueKey;

    var failedOperatorValidator = options[type].operator.validate.find(function (item) {
      return item.validator(operator);
    });

    if (failedOperatorValidator) {
      var _acc$ruleId;

      acc[ruleId] = (_acc$ruleId = acc[ruleId]) !== null && _acc$ruleId !== void 0 ? _acc$ruleId : {};
      acc[ruleId][operatorKey] = failedOperatorValidator.error;
    }

    var optionValue = (_options$type$operato = (_options$type = options[type]) === null || _options$type === void 0 ? void 0 : (_options$type$operato2 = _options$type.operatorValue) === null || _options$type$operato2 === void 0 ? void 0 : _options$type$operato2[operator]) !== null && _options$type$operato !== void 0 ? _options$type$operato : options[type].value;
    var failedValueValidator = optionValue.validate.find(function (item) {
      return item.validator(value);
    });

    if (failedValueValidator) {
      var _acc$ruleId2;

      acc[ruleId] = (_acc$ruleId2 = acc[ruleId]) !== null && _acc$ruleId2 !== void 0 ? _acc$ruleId2 : {};
      acc[ruleId][valueKey] = failedValueValidator.error;
    }

    return acc;
  }, {});
};