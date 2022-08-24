import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Button, Box, Flex, CheckboxField } from '@etvas/etvaskit';
import { Rule } from './Rule';
import { Combinator } from './Combinator';
import { CombinatorField } from './CombinatorField';
export var Group = function Group(_ref) {
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
  return /*#__PURE__*/React.createElement(Box, {
    bg: "baseGrayLightest",
    p: 4
  }, group.combined.map(function (rule, ruleIndex) {
    return /*#__PURE__*/React.createElement(Box, {
      key: rule.id
    }, /*#__PURE__*/React.createElement(Rule, {
      disabled: disabled,
      name: name + ".combined[" + ruleIndex + "]",
      removeRuleIcon: canDelete && removeRuleIcon,
      rule: rule,
      options: combinedRuleOptions,
      onRemove: onRemoveRule(group.id, rule.id),
      typeLabel: typeLabel
    }), ruleIndex < group.combined.length - 1 && /*#__PURE__*/React.createElement(CombinatorField, {
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
    disabled: disabled,
    onClick: onAddRule(group.id),
    mr: 8
  }, addRuleLabel), !hideAdvancedTargeting && /*#__PURE__*/React.createElement(CheckboxField, {
    label: advancedTargetingLabel,
    name: name + ".advancedTargeting",
    disabled: disabled
  })), advancedTargeting && group.absolute.map(function (rule, ruleIndex) {
    return /*#__PURE__*/React.createElement(Box, {
      key: rule.id
    }, /*#__PURE__*/React.createElement(Rule, {
      disabled: disabled,
      name: name + ".absolute[" + ruleIndex + "]",
      rule: rule,
      options: absoluteRuleOptions,
      onRemove: onRemoveRule(group.id, rule.id),
      typeLabel: typeLabel,
      isAbsolute: true
    }), ruleIndex < group.absolute.length - 1 && /*#__PURE__*/React.createElement(Combinator, {
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