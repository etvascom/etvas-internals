import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Button, Box, Flex, CheckboxField } from '@etvas/etvaskit';
import { Rule } from './Rule';
import { Combinator } from './Combinator';
import { CombinatorField } from './CombinatorField';
export var Group = function Group(_ref) {
  var _Object$keys;

  var disabled = _ref.disabled,
      canDelete = _ref.canDelete,
      group = _ref.group,
      advancedTargeting = _ref.advancedTargeting,
      name = _ref.name,
      combinedRuleOptions = _ref.combinedRuleOptions,
      absoluteRuleOptions = _ref.absoluteRuleOptions,
      removeRuleIcon = _ref.removeRuleIcon,
      addRuleLabel = _ref.addRuleLabel,
      typeLabel = _ref.typeLabel,
      advancedTargetingLabel = _ref.advancedTargetingLabel,
      hideAdvancedTargeting = _ref.hideAdvancedTargeting,
      andLabel = _ref.andLabel,
      orLabel = _ref.orLabel,
      onRemoveRule = _ref.onRemoveRule,
      onAddRule = _ref.onAddRule;
  var andCombinatorOptions = useMemo(function () {
    return [{
      value: 'and',
      label: andLabel
    }];
  }, [andLabel]);
  var completeCombinatorOptions = useMemo(function () {
    return [{
      value: 'and',
      label: andLabel
    }, {
      value: 'or',
      label: orLabel
    }];
  }, [andLabel, orLabel]);

  var getProcessedCombinedRuleOptions = function getProcessedCombinedRuleOptions(ruleIndex, currentType) {
    return Object.fromEntries(Object.keys(combinedRuleOptions).filter(function (type) {
      var rule = combinedRuleOptions[type];
      var count = Object.entries(group.combined).reduce(function (acc, _ref2) {
        var _ = _ref2[0],
            existingRule = _ref2[1];
        return acc + Number(existingRule.type === type);
      }, 0);
      var isCountAllowed = rule.allowCount ? rule.allowCount(count + 1) : true;
      return isCountAllowed || type === currentType;
    }).map(function (type) {
      return [type, combinedRuleOptions[type]];
    }));
  };

  var canAddRule = Object.keys(getProcessedCombinedRuleOptions(Object.keys(group.combined).length)).length > 0;
  var addType = (_Object$keys = Object.keys(getProcessedCombinedRuleOptions(Object.keys(group.combined).length))) === null || _Object$keys === void 0 ? void 0 : _Object$keys.shift();
  return /*#__PURE__*/React.createElement(Box, {
    bg: "baseGrayLightest",
    p: 4
  }, Object.keys(group.combined).map(function (ruleId, ruleIndex) {
    return /*#__PURE__*/React.createElement(Box, {
      key: ruleId
    }, /*#__PURE__*/React.createElement(Rule, {
      disabled: disabled,
      name: name + ".combined." + ruleId,
      removeRuleIcon: canDelete && removeRuleIcon,
      rule: group.combined[ruleId],
      options: getProcessedCombinedRuleOptions(ruleIndex, group.combined[ruleId].type),
      onRemove: onRemoveRule(group.id, ruleId),
      typeLabel: typeLabel
    }), ruleIndex < Object.keys(group.combined).length - 1 && /*#__PURE__*/React.createElement(CombinatorField, {
      name: name + ".combinator",
      options: completeCombinatorOptions,
      disabled: disabled,
      mb: 4
    }));
  }), disabled ? advancedTargeting ? /*#__PURE__*/React.createElement(Combinator, {
    options: andCombinatorOptions,
    value: "and",
    disabled: disabled,
    mb: 4
  }) : null : /*#__PURE__*/React.createElement(Flex, {
    my: 4
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    disabled: disabled || !canAddRule,
    onClick: onAddRule(group.id, addType),
    mr: 8
  }, addRuleLabel), !hideAdvancedTargeting && /*#__PURE__*/React.createElement(CheckboxField, {
    label: advancedTargetingLabel,
    name: name + ".advancedTargeting",
    disabled: disabled
  })), advancedTargeting && Object.keys(group.absolute).map(function (ruleId, ruleIndex) {
    return /*#__PURE__*/React.createElement(Box, {
      key: ruleId
    }, /*#__PURE__*/React.createElement(Rule, {
      disabled: disabled,
      name: name + ".absolute." + ruleId,
      rule: group.absolute[ruleId],
      options: absoluteRuleOptions,
      onRemove: onRemoveRule(group.id, ruleId),
      typeLabel: typeLabel,
      isAbsolute: true
    }), ruleIndex < Object.keys(group.absolute).length - 1 && /*#__PURE__*/React.createElement(Combinator, {
      options: andCombinatorOptions,
      value: "and",
      disabled: disabled,
      mb: 4
    }));
  }));
};
Group.propTypes = process.env.NODE_ENV !== "production" ? {
  advancedTargeting: PropTypes.bool,
  combinedRuleOptions: PropTypes.object,
  absoluteRuleOptions: PropTypes.object,
  addRuleLabel: PropTypes.node,
  typeLabel: PropTypes.node,
  advancedTargetingLabel: PropTypes.node,
  hideAdvancedTargeting: PropTypes.bool,
  andLabel: PropTypes.node,
  orLabel: PropTypes.node,
  onRemoveRule: PropTypes.func,
  onAddRule: PropTypes.func,
  disabled: PropTypes.bool,
  canDelete: PropTypes.bool,
  name: PropTypes.string,
  removeRuleIcon: PropTypes.string,
  group: PropTypes.object
} : {};