function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { v4 as uuid } from 'uuid';
import { getRuleDetails } from './rule'; // this accepts the common format as input
// and returns a formik acceptable input

export var importRuleBuilder = function importRuleBuilder(_ref, combinedRuleOptions, absoluteRuleOptions) {
  var combinator = _ref.combinator,
      groups = _ref.groups;
  return {
    combinator: combinator,
    groups: importGroups(groups, combinedRuleOptions, absoluteRuleOptions)
  };
};

var importGroups = function importGroups(groups, combinedRuleOptions, absoluteRuleOptions) {
  return groups.map(function (_ref2) {
    var not = _ref2.not,
        combinator = _ref2.combinator,
        absolute = _ref2.absolute,
        combined = _ref2.combined;
    return {
      not: not,
      combinator: combinator,
      id: uuid(),
      advancedTargeting: !!absolute.length,
      combined: importCombinedRules(combined, combinedRuleOptions),
      absolute: importAbsoluteRules(absolute, absoluteRuleOptions)
    };
  });
};

var importCombinedRules = function importCombinedRules(rules, options) {
  return rules.map(function (_ref3) {
    var _extends3;

    var keypath = _ref3.keypath,
        operator = _ref3.operator,
        value = _ref3.value;
    var defaultValues = Object.keys(options).reduce(function (acc, type) {
      var _extends2;

      var _getRuleDetails = getRuleDetails({
        type: type
      }),
          operatorKey = _getRuleDetails.operatorKey,
          valueKey = _getRuleDetails.valueKey;

      return _extends({}, acc, (_extends2 = {}, _extends2[operatorKey] = options[type].operator.options[0].value, _extends2[valueKey] = '', _extends2));
    }, {});
    var operatorKey = keypath + "Operator";
    var valueKey = keypath + "Value";
    return _extends({
      id: uuid(),
      type: keypath
    }, defaultValues, (_extends3 = {}, _extends3[operatorKey] = operator, _extends3[valueKey] = value, _extends3));
  });
};

var importAbsoluteRules = function importAbsoluteRules(rules, options) {
  return rules.length ? Object.keys(options).map(function (type) {
    var _rules$find, _rules$find2, _ref4;

    var _getRuleDetails2 = getRuleDetails({
      type: type
    }),
        operatorKey = _getRuleDetails2.operatorKey,
        valueKey = _getRuleDetails2.valueKey;

    return _ref4 = {
      id: uuid(),
      type: type
    }, _ref4[operatorKey] = (_rules$find = rules.find(function (rule) {
      return rule.keypath === type;
    })) === null || _rules$find === void 0 ? void 0 : _rules$find.operator, _ref4[valueKey] = (_rules$find2 = rules.find(function (rule) {
      return rule.keypath === type;
    })) === null || _rules$find2 === void 0 ? void 0 : _rules$find2.value, _ref4;
  }) : null;
};