import { getRuleDetails } from './rule'; // this accepts the formik field data as input
// and returns a common version

export var exportRuleBuilder = function exportRuleBuilder(_ref, combinedRuleOptions, absoluteRuleOptions) {
  var combinator = _ref.combinator,
      groups = _ref.groups;
  return {
    combinator: combinator,
    groups: exportGroups(groups, combinedRuleOptions, absoluteRuleOptions)
  };
};

var exportGroups = function exportGroups(groups, combinedRuleOptions, absoluteRuleOptions) {
  return groups.map(function (_ref2) {
    var not = _ref2.not,
        absolute = _ref2.absolute,
        combined = _ref2.combined,
        combinator = _ref2.combinator,
        advancedTargeting = _ref2.advancedTargeting;
    return {
      not: not,
      combinator: combinator,
      combined: exportRules(combined, combinedRuleOptions),
      absolute: advancedTargeting ? exportRules(absolute, absoluteRuleOptions) : []
    };
  });
};

var exportRules = function exportRules(rules, options) {
  return Object.keys(rules).map(function (ruleId) {
    var rule = rules[ruleId];

    var _getRuleDetails = getRuleDetails(rule),
        type = _getRuleDetails.type,
        operator = _getRuleDetails.operator,
        value = _getRuleDetails.value;

    var parse = function parse(value) {
      if (options[type].value.type !== 'number') {
        return value;
      }

      if (options[type].operatorValue[operator].type !== 'between') {
        return parseInt(value, 10);
      }

      var split = value.split('.');
      return [parseInt(split === null || split === void 0 ? void 0 : split.shift(), 10), parseInt(split === null || split === void 0 ? void 0 : split.pop(), 10)];
    };

    var parsedValue = JSON.stringify(parse(value));
    return {
      keypath: type,
      operator: operator,
      value: parsedValue
    };
  });
};