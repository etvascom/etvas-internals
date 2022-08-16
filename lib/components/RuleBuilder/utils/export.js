"use strict";

exports.__esModule = true;
exports.exportRuleBuilder = void 0;

var _rule = require("./rule");

// this accepts the formik field data as input
// and returns a common version
var exportRuleBuilder = function exportRuleBuilder(_ref, combinedRuleOptions, absoluteRuleOptions) {
  var combinator = _ref.combinator,
      groups = _ref.groups;
  return {
    combinator: combinator,
    groups: exportGroups(groups, combinedRuleOptions, absoluteRuleOptions)
  };
};

exports.exportRuleBuilder = exportRuleBuilder;

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
  return rules.map(function (rule) {
    var _getRuleDetails = (0, _rule.getRuleDetails)(rule),
        type = _getRuleDetails.type,
        operator = _getRuleDetails.operator,
        value = _getRuleDetails.value;

    var parsedValue = options[type].value.type === 'number' ? parseInt(value, 10) : value;
    return {
      keypath: type,
      operator: operator,
      value: parsedValue
    };
  });
};