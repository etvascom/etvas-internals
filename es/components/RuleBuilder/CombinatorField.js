var _excluded = ["name", "disabled", "options"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { Combinator } from './Combinator';
export var CombinatorField = function CombinatorField(_ref) {
  var name = _ref.name,
      disabled = _ref.disabled,
      options = _ref.options,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  // eslint-disable-next-line no-unused-vars
  var _useField = useField(name),
      value = _useField[0].value,
      _ = _useField[1],
      setValue = _useField[2].setValue;

  return /*#__PURE__*/React.createElement(Combinator, _extends({
    value: value,
    onChange: setValue,
    options: options,
    disabled: disabled
  }, rest));
};
CombinatorField.propTypes = process.env.NODE_ENV !== "production" ? {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.node
  })).isRequired
} : {};