var _excluded = ["type"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

export var getRuleDetails = function getRuleDetails(_ref) {
  var type = _ref.type,
      rule = _objectWithoutPropertiesLoose(_ref, _excluded);

  var operatorKey = type + "Operator";
  var valueKey = type + "Value";
  return {
    type: type,
    operator: rule[operatorKey],
    value: rule[valueKey],
    operatorKey: operatorKey,
    valueKey: valueKey
  };
};