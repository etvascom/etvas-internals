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
  return Object.fromEntries(rules.map(function (_ref3) {
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
    var parsedValue = parse({
      keypath: keypath,
      operator: operator,
      value: value
    });
    return [uuid(), _extends({
      type: keypath
    }, defaultValues, (_extends3 = {}, _extends3[operatorKey] = operator, _extends3[valueKey] = parsedValue, _extends3))];
  }));
};

var importAbsoluteRules = function importAbsoluteRules(rules, options) {
  return rules.length ? Object.fromEntries(Object.keys(options).map(function (type) {
    var _ref4;

    var _getRuleDetails2 = getRuleDetails({
      type: type
    }),
        operatorKey = _getRuleDetails2.operatorKey,
        valueKey = _getRuleDetails2.valueKey;

    var rule = rules.find(function (rule) {
      return rule.keypath === type;
    });
    var keypath = rule.keypath,
        operator = rule.operator,
        value = rule.value;
    var parsedValue = rule && parse({
      keypath: keypath,
      operator: operator,
      value: value
    });
    return [uuid(), (_ref4 = {
      type: type
    }, _ref4[operatorKey] = rule === null || rule === void 0 ? void 0 : rule.operator, _ref4[valueKey] = parsedValue, _ref4)];
  })) : null;
};

var parse = function parse(_ref5) {
  var keypath = _ref5.keypath,
      operator = _ref5.operator,
      value = _ref5.value;
  var parsed = JSON.parse(value);

  if (keypath === 'amount' && operator === '><') {
    var leftValue = parsed[0],
        rightValue = parsed[1];
    return leftValue + "." + rightValue;
  }

  return parsed;
};