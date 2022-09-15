import { getRuleDetails } from './rule'; // this accepts the formik field data as input
// and returns a common version

export var exportRuleBuilder = function exportRuleBuilder(_ref) {
  var combinator = _ref.combinator,
      groups = _ref.groups;
  return {
    combinator: combinator,
    groups: exportGroups(groups)
  };
};

var exportGroups = function exportGroups(groups) {
  return groups.map(function (_ref2) {
    var not = _ref2.not,
        absolute = _ref2.absolute,
        combined = _ref2.combined,
        combinator = _ref2.combinator,
        advancedTargeting = _ref2.advancedTargeting;
    return {
      not: not,
      combinator: combinator,
      combined: exportRules(combined),
      absolute: advancedTargeting ? exportRules(absolute) : []
    };
  });
};

var exportRules = function exportRules(rules) {
  return Object.keys(rules).map(function (ruleId) {
    var rule = rules[ruleId];

    var _getRuleDetails = getRuleDetails(rule),
        type = _getRuleDetails.type,
        operator = _getRuleDetails.operator,
        value = _getRuleDetails.value;

    return {
      keypath: type,
      operator: operator,
      value: value
    };
  });
};