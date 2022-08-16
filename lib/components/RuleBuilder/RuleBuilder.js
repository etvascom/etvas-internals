"use strict";

exports.__esModule = true;
exports.RuleBuilder = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uuid = require("uuid");

var _formik = require("formik");

var _lodash = require("lodash");

var _etvaskit = require("@etvas/etvaskit");

var _Group = require("./Group");

var _CombinatorField = require("./CombinatorField");

var _rule = require("./utils/rule");

var _excluded = ["name", "disabled", "label", "andLabel", "orLabel", "addRuleLabel", "addGroupLabel", "advancedTargetingLabel", "removeRuleIcon", "combinedRuleOptions", "absoluteRuleOptions"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var RuleBuilder = function RuleBuilder(_ref) {
  var _data$groups3;

  var name = _ref.name,
      disabled = _ref.disabled,
      label = _ref.label,
      andLabel = _ref.andLabel,
      orLabel = _ref.orLabel,
      addRuleLabel = _ref.addRuleLabel,
      addGroupLabel = _ref.addGroupLabel,
      advancedTargetingLabel = _ref.advancedTargetingLabel,
      removeRuleIcon = _ref.removeRuleIcon,
      combinedRuleOptions = _ref.combinedRuleOptions,
      absoluteRuleOptions = _ref.absoluteRuleOptions,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  // eslint-disable-next-line no-unused-vars
  var _useField = (0, _formik.useField)(name),
      data = _useField[0].value,
      _ = _useField[1],
      setData = _useField[2].setValue;

  var createNewRule = (0, _react.useCallback)(function () {
    var _Object$keys = Object.keys(combinedRuleOptions),
        type = _Object$keys[0];

    var defaultOperatorValues = Object.keys(combinedRuleOptions).reduce(function (acc, type) {
      var _extends2;

      var _getRuleDetails = (0, _rule.getRuleDetails)({
        type: type
      }),
          operatorKey = _getRuleDetails.operatorKey,
          valueKey = _getRuleDetails.valueKey;

      return _extends({}, acc, (_extends2 = {}, _extends2[operatorKey] = combinedRuleOptions[type].operator.options[0].value, _extends2[valueKey] = '', _extends2));
    }, {});
    return _extends({
      id: (0, _uuid.v4)(),
      type: type
    }, defaultOperatorValues);
  }, [combinedRuleOptions]);
  var createAbsoluteRules = (0, _react.useCallback)(function () {
    return Object.keys(absoluteRuleOptions).map(function (type) {
      var _ref2;

      var _getRuleDetails2 = (0, _rule.getRuleDetails)({
        type: type
      }),
          operatorKey = _getRuleDetails2.operatorKey,
          valueKey = _getRuleDetails2.valueKey;

      return _ref2 = {
        id: (0, _uuid.v4)(),
        type: type
      }, _ref2[operatorKey] = absoluteRuleOptions[type].operator.options[0].value, _ref2[valueKey] = '', _ref2;
    });
  }, [absoluteRuleOptions]);
  var createNewGroup = (0, _react.useCallback)(function () {
    return {
      id: (0, _uuid.v4)(),
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

  (0, _react.useEffect)(function () {
    if (!Object.keys(data).length) {
      setData({
        combinator: 'and',
        groups: [createNewGroup()]
      });
    }
  }, [data, setData, createNewGroup]);

  var handleRemoveRule = function handleRemoveRule(groupId, ruleId) {
    return function () {
      var groups = (0, _lodash.cloneDeep)(data.groups).reduce(function (acc, group) {
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
      var groups = (0, _lodash.cloneDeep)(data.groups).map(function (group) {
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


  var canDelete = (0, _react.useMemo)(function () {
    var _data$groups, _data$groups2;

    return ((_data$groups = data.groups) === null || _data$groups === void 0 ? void 0 : _data$groups.length) > 1 || ((_data$groups2 = data.groups) === null || _data$groups2 === void 0 ? void 0 : _data$groups2[0].combined.length) > 1;
  }, [data]);
  var combinatorOptions = (0, _react.useMemo)(function () {
    return [{
      value: 'and',
      label: andLabel
    }, {
      value: 'or',
      label: orLabel
    }];
  }, [andLabel, orLabel]);
  return /*#__PURE__*/_react["default"].createElement(_etvaskit.Box, rest, /*#__PURE__*/_react["default"].createElement(_etvaskit.Typography, {
    variant: "base12Bold",
    color: "baseGrayLight",
    mb: 1
  }, label), (_data$groups3 = data.groups) === null || _data$groups3 === void 0 ? void 0 : _data$groups3.map(function (group, index) {
    return /*#__PURE__*/_react["default"].createElement(_etvaskit.Box, {
      key: group.id
    }, /*#__PURE__*/_react["default"].createElement(_Group.Group, {
      disabled: disabled,
      group: group,
      name: name + ".groups[" + index + "]",
      canDelete: canDelete,
      advancedTargeting: group.advancedTargeting,
      combinedRuleOptions: combinedRuleOptions,
      absoluteRuleOptions: absoluteRuleOptions,
      removeRuleIcon: removeRuleIcon,
      addRuleLabel: addRuleLabel,
      advancedTargetingLabel: advancedTargetingLabel,
      andLabel: andLabel,
      orLabel: orLabel,
      onRemoveRule: handleRemoveRule,
      onAddRule: handleAddRule
    }), index < data.groups.length - 1 && /*#__PURE__*/_react["default"].createElement(_CombinatorField.CombinatorField, {
      name: name + ".combinator",
      options: combinatorOptions,
      disabled: disabled,
      my: 4
    }));
  }), !disabled && /*#__PURE__*/_react["default"].createElement(_etvaskit.Button, {
    variant: "link",
    mt: 4,
    disabled: disabled,
    onClick: handleAddGroup
  }, addGroupLabel));
};

exports.RuleBuilder = RuleBuilder;
var validatorProps = process.env.NODE_ENV !== "production" ? _propTypes["default"].shape({
  validator: _propTypes["default"].func,
  error: _propTypes["default"].node
}) : {};
var ruleOptionsProps = process.env.NODE_ENV !== "production" ? _propTypes["default"].objectOf(_propTypes["default"].shape({
  label: _propTypes["default"].node,
  placeholder: _propTypes["default"].string,
  validate: _propTypes["default"].arrayOf(validatorProps),
  operator: _propTypes["default"].shape({
    label: _propTypes["default"].node,
    placeholder: _propTypes["default"].string,
    validate: _propTypes["default"].arrayOf(validatorProps),
    options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      label: _propTypes["default"].node,
      value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
    }))
  }),
  value: _propTypes["default"].shape({
    label: _propTypes["default"].node,
    placeholder: _propTypes["default"].string,
    type: _propTypes["default"].string,
    suffix: _propTypes["default"].string,
    suffixSpace: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
    validate: _propTypes["default"].arrayOf(validatorProps)
  })
})).isRequired : {};
RuleBuilder.propTypes = process.env.NODE_ENV !== "production" ? {
  name: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  label: _propTypes["default"].node.isRequired,
  andLabel: _propTypes["default"].node.isRequired,
  orLabel: _propTypes["default"].node.isRequired,
  addRuleLabel: _propTypes["default"].node.isRequired,
  addGroupLabel: _propTypes["default"].node.isRequired,
  advancedTargetingLabel: _propTypes["default"].node.isRequired,
  removeRuleIcon: _propTypes["default"].string.isRequired,
  combinedRuleOptions: ruleOptionsProps,
  absoluteRuleOptions: ruleOptionsProps
} : {};
RuleBuilder.defaultProps = {
  disabled: false
};