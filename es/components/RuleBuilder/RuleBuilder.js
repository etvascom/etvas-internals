var _excluded = ["name", "disabled", "label", "andLabel", "orLabel", "addRuleLabel", "addGroupLabel", "typeLabel", "advancedTargetingLabel", "removeRuleIcon", "combinedRuleOptions", "absoluteRuleOptions"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useCallback, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { useField } from 'formik';
import { cloneDeep } from 'lodash';
import { Box, Typography, Button } from '@etvas/etvaskit';
import { Group } from './Group';
import { CombinatorField } from './CombinatorField';
import { getRuleDetails } from './utils/rule';
export var RuleBuilder = function RuleBuilder(_ref) {
  var _data$groups3;

  var name = _ref.name,
      disabled = _ref.disabled,
      label = _ref.label,
      andLabel = _ref.andLabel,
      orLabel = _ref.orLabel,
      addRuleLabel = _ref.addRuleLabel,
      addGroupLabel = _ref.addGroupLabel,
      typeLabel = _ref.typeLabel,
      advancedTargetingLabel = _ref.advancedTargetingLabel,
      removeRuleIcon = _ref.removeRuleIcon,
      combinedRuleOptions = _ref.combinedRuleOptions,
      absoluteRuleOptions = _ref.absoluteRuleOptions,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  // eslint-disable-next-line no-unused-vars
  var _useField = useField(name),
      data = _useField[0].value,
      _ = _useField[1],
      setData = _useField[2].setValue;

  var createNewRule = useCallback(function () {
    var _Object$keys = Object.keys(combinedRuleOptions),
        type = _Object$keys[0];

    var defaultOperatorValues = Object.keys(combinedRuleOptions).reduce(function (acc, type) {
      var _extends2;

      var _getRuleDetails = getRuleDetails({
        type: type
      }),
          operatorKey = _getRuleDetails.operatorKey,
          valueKey = _getRuleDetails.valueKey;

      return _extends({}, acc, (_extends2 = {}, _extends2[operatorKey] = combinedRuleOptions[type].operator.options[0].value, _extends2[valueKey] = '', _extends2));
    }, {});
    return _extends({
      id: uuid(),
      type: type
    }, defaultOperatorValues);
  }, [combinedRuleOptions]);
  var createAbsoluteRules = useCallback(function () {
    return Object.keys(absoluteRuleOptions).map(function (type) {
      var _ref2;

      var _getRuleDetails2 = getRuleDetails({
        type: type
      }),
          operatorKey = _getRuleDetails2.operatorKey,
          valueKey = _getRuleDetails2.valueKey;

      return _ref2 = {
        id: uuid(),
        type: type
      }, _ref2[operatorKey] = absoluteRuleOptions[type].operator.options[0].value, _ref2[valueKey] = '', _ref2;
    });
  }, [absoluteRuleOptions]);
  var createNewGroup = useCallback(function () {
    return {
      id: uuid(),
      not: false,
      advancedTargeting: false,
      absolute: createAbsoluteRules(),
      combined: [createNewRule()],
      combinator: 'and'
    };
  }, [createNewRule, createAbsoluteRules]);

  var handleAddGroup = function handleAddGroup() {
    setData(_extends({}, data, {
      groups: [].concat(data.groups, [createNewGroup()])
    }));
  };

  useEffect(function () {
    if (!Object.keys(data).length) {
      setData({
        combinator: 'and',
        groups: [createNewGroup()]
      });
    }
  }, [data, setData, createNewGroup]);

  var handleRemoveRule = function handleRemoveRule(groupId, ruleId) {
    return function () {
      var groups = cloneDeep(data.groups).reduce(function (acc, group) {
        if (group.id === groupId) {
          group.combined = group.combined.filter(function (rule) {
            return rule.id !== ruleId;
          });
        } // only add groups with at least one condition
        // (delete group on last rule delete)


        if (group.combined.length) {
          acc.push(group);
        }

        return acc;
      }, []);
      setData(_extends({}, data, {
        groups: groups
      }));
    };
  };

  var handleAddRule = function handleAddRule(groupId) {
    return function () {
      var groups = cloneDeep(data.groups).map(function (group) {
        if (group.id === groupId) {
          group.combined.push(createNewRule());
        }

        return group;
      });
      setData(_extends({}, data, {
        groups: groups
      }));
    };
  }; // can't delete the last rule from the last group


  var canDelete = useMemo(function () {
    var _data$groups, _data$groups2;

    return ((_data$groups = data.groups) === null || _data$groups === void 0 ? void 0 : _data$groups.length) > 1 || ((_data$groups2 = data.groups) === null || _data$groups2 === void 0 ? void 0 : _data$groups2[0].combined.length) > 1;
  }, [data]);
  var combinatorOptions = useMemo(function () {
    return [{
      value: 'and',
      label: andLabel
    }, {
      value: 'or',
      label: orLabel
    }];
  }, [andLabel, orLabel]);
  return /*#__PURE__*/React.createElement(Box, rest, /*#__PURE__*/React.createElement(Typography, {
    variant: "base12Bold",
    color: "baseGrayLight",
    mb: 1
  }, label), (_data$groups3 = data.groups) === null || _data$groups3 === void 0 ? void 0 : _data$groups3.map(function (group, index) {
    return /*#__PURE__*/React.createElement(Box, {
      key: group.id
    }, /*#__PURE__*/React.createElement(Group, {
      disabled: disabled,
      group: group,
      name: name + ".groups[" + index + "]",
      canDelete: canDelete,
      advancedTargeting: group.advancedTargeting,
      combinedRuleOptions: combinedRuleOptions,
      absoluteRuleOptions: absoluteRuleOptions,
      removeRuleIcon: removeRuleIcon,
      addRuleLabel: addRuleLabel,
      typeLabel: typeLabel,
      advancedTargetingLabel: advancedTargetingLabel,
      andLabel: andLabel,
      orLabel: orLabel,
      onRemoveRule: handleRemoveRule,
      onAddRule: handleAddRule
    }), index < data.groups.length - 1 && /*#__PURE__*/React.createElement(CombinatorField, {
      name: name + ".combinator",
      options: combinatorOptions,
      disabled: disabled,
      my: 4
    }));
  }), !disabled && /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    mt: 4,
    disabled: disabled,
    onClick: handleAddGroup
  }, addGroupLabel));
};
var validatorProps = process.env.NODE_ENV !== "production" ? PropTypes.shape({
  validator: PropTypes.func,
  error: PropTypes.node
}) : {};
var ruleOptionsProps = process.env.NODE_ENV !== "production" ? PropTypes.objectOf(PropTypes.shape({
  label: PropTypes.node,
  placeholder: PropTypes.string,
  validate: PropTypes.arrayOf(validatorProps),
  operator: PropTypes.shape({
    label: PropTypes.node,
    placeholder: PropTypes.string,
    validate: PropTypes.arrayOf(validatorProps),
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.node,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }))
  }),
  value: PropTypes.shape({
    label: PropTypes.node,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    suffix: PropTypes.string,
    suffixSpace: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    validate: PropTypes.arrayOf(validatorProps)
  })
})).isRequired : {};
RuleBuilder.propTypes = process.env.NODE_ENV !== "production" ? {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.node.isRequired,
  andLabel: PropTypes.node.isRequired,
  orLabel: PropTypes.node.isRequired,
  addRuleLabel: PropTypes.node.isRequired,
  addGroupLabel: PropTypes.node.isRequired,
  typeLabel: PropTypes.node.isRequired,
  advancedTargetingLabel: PropTypes.node.isRequired,
  removeRuleIcon: PropTypes.string.isRequired,
  combinedRuleOptions: ruleOptionsProps,
  absoluteRuleOptions: ruleOptionsProps
} : {};
RuleBuilder.defaultProps = {
  disabled: false
};