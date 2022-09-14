import React, { useEffect, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useField, useFormikContext } from 'formik';
import { v4 } from 'uuid';
import { Flex, Typography, SubdomainInput } from '@etvas/etvaskit';
import { SubLabel } from './TagInput/SubLabel';
export var IntervalField = function IntervalField(_ref) {
  var id = _ref.id,
      name = _ref.name,
      label = _ref.label,
      placeholder = _ref.placeholder,
      noPreserveSpace = _ref.noPreserveSpace,
      disabled = _ref.disabled,
      separator = _ref.separator,
      stringSeparator = _ref.stringSeparator,
      suffix = _ref.suffix,
      suffixSpace = _ref.suffixSpace;

  var _useField = useField(name),
      value = _useField[0].value,
      _useField$ = _useField[1],
      touched = _useField$.touched,
      error = _useField$.error,
      setValue = _useField[2].setValue;

  var _useFormikContext = useFormikContext(),
      submitCount = _useFormikContext.submitCount;

  var _error = touched && error;

  var displayedError = submitCount > 0 ? _error : value && _error;

  var _useMemo = useMemo(function () {
    var idOrNameId = id || name + "-" + v4();
    return [idOrNameId + "-left", idOrNameId + "-right"];
  }, [id, name]),
      idLeft = _useMemo[0],
      idRight = _useMemo[1];

  useEffect(function () {
    if (value && !(value === null || value === void 0 ? void 0 : value.toString().includes(stringSeparator))) {
      setValue("" + value + stringSeparator);
    }
  }, [value, setValue, stringSeparator]);
  var placeholderSplit = placeholder === null || placeholder === void 0 ? void 0 : placeholder.split('-');
  var placeholderLeft = placeholderSplit === null || placeholderSplit === void 0 ? void 0 : placeholderSplit.shift(),
      placeholderRight = placeholderSplit === null || placeholderSplit === void 0 ? void 0 : placeholderSplit.pop();
  var valueSplit = value === null || value === void 0 ? void 0 : value.toString().split(stringSeparator);
  var leftValue = valueSplit === null || valueSplit === void 0 ? void 0 : valueSplit.shift(),
      rightValue = valueSplit === null || valueSplit === void 0 ? void 0 : valueSplit.pop();
  var handleLeftChange = useCallback(function (event) {
    var val = event.target.value;
    var right = value ? value === null || value === void 0 ? void 0 : value.split(stringSeparator).pop() : '';
    setValue("" + val + stringSeparator + right);
  }, [setValue, value, stringSeparator]);
  var handleRightChange = useCallback(function (event) {
    var val = event.target.value;
    var left = value ? value === null || value === void 0 ? void 0 : value.split(stringSeparator).shift() : '';
    setValue("" + left + stringSeparator + val);
  }, [setValue, value, stringSeparator]);
  return /*#__PURE__*/React.createElement(Flex, {
    width: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Flex, {
    width: 1,
    justifyContent: "space-between",
    alignItems: "flex-end"
  }, /*#__PURE__*/React.createElement(SubdomainInput, {
    id: idLeft,
    label: label,
    disabled: disabled,
    type: "number",
    placeholder: placeholderLeft,
    suffix: suffix,
    suffixSpace: suffixSpace || 0,
    prefix: "",
    value: leftValue,
    onChange: handleLeftChange,
    error: !!displayedError,
    noBottomSpace: true,
    required: true
  }), /*#__PURE__*/React.createElement(Typography, {
    variant: "base12Bold",
    px: 2,
    mb: "14px"
  }, separator), /*#__PURE__*/React.createElement(SubdomainInput, {
    id: idRight,
    disabled: disabled,
    type: "number",
    placeholder: placeholderRight,
    suffix: suffix,
    suffixSpace: suffixSpace || 0,
    prefix: "",
    value: rightValue,
    onChange: handleRightChange,
    error: !!displayedError,
    noBottomSpace: true,
    required: true
  })), /*#__PURE__*/React.createElement(SubLabel, {
    noPreserveSpace: noPreserveSpace,
    variant: "error",
    mt: 1
  }, displayedError));
};
IntervalField.propTypes = process.env.NODE_ENV !== "production" ? {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  noPreserveSpace: PropTypes.bool,
  disabled: PropTypes.bool,
  separator: PropTypes.string,
  stringSeparator: PropTypes.string,
  suffix: PropTypes.string,
  suffixSpace: PropTypes.number
} : {};
IntervalField.defaultProps = {
  separator: '-',
  stringSeparator: '.'
};