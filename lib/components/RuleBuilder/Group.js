"use strict";

exports.__esModule = true;
exports.Group = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _etvaskit = require("@etvas/etvaskit");

var _Rule = require("./Rule");

var _Combinator = require("./Combinator");

var _CombinatorField = require("./CombinatorField");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Group = function Group(_ref) {
  var disabled = _ref.disabled,
      canDelete = _ref.canDelete,
      group = _ref.group,
      advancedTargeting = _ref.advancedTargeting,
      name = _ref.name,
      combinedRuleOptions = _ref.combinedRuleOptions,
      absoluteRuleOptions = _ref.absoluteRuleOptions,
      removeRuleIcon = _ref.removeRuleIcon,
      addRuleLabel = _ref.addRuleLabel,
      advancedTargetingLabel = _ref.advancedTargetingLabel,
      andLabel = _ref.andLabel,
      orLabel = _ref.orLabel,
      onRemoveRule = _ref.onRemoveRule,
      onAddRule = _ref.onAddRule;
  var andCombinatorOptions = (0, _react.useMemo)(function () {
    return [{
      value: 'and',
      label: andLabel
    }];
  }, [andLabel]);
  var completeCombinatorOptions = (0, _react.useMemo)(function () {
    return [{
      value: 'and',
      label: andLabel
    }, {
      value: 'or',
      label: orLabel
    }];
  }, [andLabel, orLabel]);
  return /*#__PURE__*/_react["default"].createElement(_etvaskit.Box, {
    bg: "baseGrayLightest",
    p: 4
  }, group.combined.map(function (rule, ruleIndex) {
    return /*#__PURE__*/_react["default"].createElement(_etvaskit.Box, {
      key: rule.id
    }, /*#__PURE__*/_react["default"].createElement(_Rule.Rule, {
      disabled: disabled,
      name: name + ".combined[" + ruleIndex + "]",
      removeRuleIcon: canDelete && removeRuleIcon,
      rule: rule,
      options: combinedRuleOptions,
      onRemove: onRemoveRule(group.id, rule.id)
    }), ruleIndex < group.combined.length - 1 && /*#__PURE__*/_react["default"].createElement(_CombinatorField.CombinatorField, {
      name: name + ".combinator",
      options: completeCombinatorOptions,
      disabled: disabled,
      mb: 4
    }));
  }), disabled ? advancedTargeting ? /*#__PURE__*/_react["default"].createElement(_Combinator.Combinator, {
    options: andCombinatorOptions,
    value: "and",
    disabled: disabled,
    mb: 4
  }) : null : /*#__PURE__*/_react["default"].createElement(_etvaskit.Flex, {
    my: 4
  }, /*#__PURE__*/_react["default"].createElement(_etvaskit.Button, {
    variant: "link",
    disabled: disabled,
    onClick: onAddRule(group.id),
    mr: 8
  }, addRuleLabel), /*#__PURE__*/_react["default"].createElement(_etvaskit.CheckboxField, {
    label: advancedTargetingLabel,
    name: name + ".advancedTargeting",
    disabled: disabled
  })), advancedTargeting && group.absolute.map(function (rule, ruleIndex) {
    return /*#__PURE__*/_react["default"].createElement(_etvaskit.Box, {
      key: rule.id
    }, /*#__PURE__*/_react["default"].createElement(_Rule.Rule, {
      disabled: disabled,
      name: name + ".absolute[" + ruleIndex + "]",
      rule: rule,
      options: absoluteRuleOptions,
      onRemove: onRemoveRule(group.id, rule.id),
      isAbsolute: true
    }), ruleIndex < group.absolute.length - 1 && /*#__PURE__*/_react["default"].createElement(_Combinator.Combinator, {
      options: andCombinatorOptions,
      value: "and",
      disabled: disabled,
      mb: 4
    }));
  }));
};

exports.Group = Group;
Group.propTypes = process.env.NODE_ENV !== "production" ? {
  advancedTargeting: _propTypes["default"].bool,
  combinedRuleOptions: _propTypes["default"].object,
  absoluteRuleOptions: _propTypes["default"].object,
  addRuleLabel: _propTypes["default"].node,
  advancedTargetingLabel: _propTypes["default"].node,
  andLabel: _propTypes["default"].node,
  orLabel: _propTypes["default"].node,
  onRemoveRule: _propTypes["default"].func,
  onAddRule: _propTypes["default"].func,
  disabled: _propTypes["default"].bool,
  canDelete: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  removeRuleIcon: _propTypes["default"].string,
  group: _propTypes["default"].object
} : {};