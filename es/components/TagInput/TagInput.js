var _templateObject;

var _excluded = ["label", "placeholder", "loading", "required", "disabled", "readOnly", "error", "warning", "valid", "variant", "id", "name", "value", "onChange", "autoComplete", "autoFocus", "onInputClick", "importHandler", "exportHandler", "noPreserveSpace", "forceAddTagKeys", "maxTags"];

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import propTypes from '@styled-system/prop-types';
import css from '@styled-system/css';
import { Typography, Box, Flex } from '@etvas/etvaskit';
import { default as containerVariants } from './variants.container';
import { default as inputVariants } from './variants.input';
import { tagShape } from './shape';
import { Tag } from './Tag';
import { SubLabel } from './SubLabel';
export var TagInput = forwardRef(function (_ref, ref) {
  var label = _ref.label,
      placeholder = _ref.placeholder,
      loading = _ref.loading,
      required = _ref.required,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      error = _ref.error,
      warning = _ref.warning,
      valid = _ref.valid,
      variant = _ref.variant,
      id = _ref.id,
      name = _ref.name,
      value = _ref.value,
      onChange = _ref.onChange,
      autoComplete = _ref.autoComplete,
      autoFocus = _ref.autoFocus,
      onInputClick = _ref.onInputClick,
      importHandler = _ref.importHandler,
      exportHandler = _ref.exportHandler,
      noPreserveSpace = _ref.noPreserveSpace,
      forceAddTagKeys = _ref.forceAddTagKeys,
      maxTags = _ref.maxTags,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = useState(''),
      inputValue = _useState[0],
      setInputValue = _useState[1];

  var tags = useMemo(function () {
    return importHandler(value);
  }, [value, importHandler]);
  var currentVariant = useMemo(function () {
    if (disabled || loading) return 'disabled';else if (error) return 'error';else if (warning) return 'warning';else if (valid) return 'valid';
    return variant;
  }, [loading, disabled, error, warning, valid, variant]);

  var handleTagRemove = function handleTagRemove(index) {
    return function () {
      var newTags = [].concat(tags);
      newTags.splice(index, 1);
      onChange(exportHandler(newTags));
    };
  };

  var handleTagAdd = function handleTagAdd() {
    onChange(exportHandler([].concat(tags, [inputValue.trim()])));
  };

  var handleInputChange = useCallback(function (event) {
    return setInputValue(event.target.value);
  }, []);

  var handleInputKeyPress = function handleInputKeyPress(event) {
    if ([].concat(forceAddTagKeys, ['Enter']).includes(event.key)) {
      event.preventDefault();

      if (inputValue.trim()) {
        handleTagAdd();
        setInputValue('');
      }
    }
  };

  var handleInputKeyUp = function handleInputKeyUp(event) {
    if (event.key === 'Backspace' && !inputValue) {
      handleTagRemove(-1)();
    }
  };

  var handleInputBlur = function handleInputBlur() {
    if (inputValue.trim()) {
      handleTagAdd();
    }

    setInputValue('');
  };

  return /*#__PURE__*/React.createElement(Container, _extends({
    flexDirection: "column",
    width: 1
  }, rest), !!label && /*#__PURE__*/React.createElement(Box, {
    mb: 1
  }, /*#__PURE__*/React.createElement(Typography, {
    as: "label",
    htmlFor: id,
    variant: "base12Bold",
    color: "baseMetal",
    width: "fit-content"
  }, label)), /*#__PURE__*/React.createElement(Flex, {
    alignItems: "center",
    position: "relative",
    width: 1
  }, /*#__PURE__*/React.createElement(StyledInputContainer, {
    variant: currentVariant
  }, tags.map(function (tag, index) {
    return /*#__PURE__*/React.createElement(Tag, {
      value: tag // eslint-disable-next-line react/no-array-index-key
      ,
      key: index,
      disabled: disabled,
      onRemove: handleTagRemove(index),
      my: 1
    });
  }), !disabled && maxTags >= tags.length && /*#__PURE__*/React.createElement(StyledInput, {
    variant: currentVariant,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    ariaDisabled: readOnly || disabled,
    disabled: disabled,
    error: error,
    hasLabel: label,
    id: id,
    name: name,
    onChange: handleInputChange,
    placeholder: readOnly ? '' : placeholder,
    readOnly: readOnly,
    ref: ref,
    required: required,
    type: "text",
    value: inputValue,
    onClick: onInputClick,
    onKeyPress: handleInputKeyPress,
    onKeyUp: handleInputKeyUp,
    onBlur: handleInputBlur
  }))), /*#__PURE__*/React.createElement(SubLabel, {
    noPreserveSpace: noPreserveSpace,
    variant: currentVariant,
    mt: 1
  }, error));
});
var Container = styled(Flex)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  user-select: none;\n  overflow: hidden;\n  &:focus-within {\n    label {\n      color: ", ";\n    }\n  }\n"])), themeGet('colors.textInputFocused'));
var StyledInputContainer = styled.div(variant({
  variants: containerVariants
}), css({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  py: '3px'
}));
var StyledInput = styled.input(variant({
  variants: inputVariants
}));

var defaultImportHandler = function defaultImportHandler(value) {
  return value;
};

var defaultExportHandler = function defaultExportHandler(value) {
  return value;
};

TagInput.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, propTypes.input, tagShape, {
  loading: PropTypes.bool,
  readOnly: PropTypes.bool,
  error: PropTypes.node,
  warning: PropTypes.bool,
  valid: PropTypes.bool,
  variant: PropTypes.string,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  onInputClick: PropTypes.func,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  importHandler: PropTypes.func,
  exportHandler: PropTypes.func,
  noPreserveSpace: PropTypes.bool,
  maxTags: PropTypes.number,
  forceAddTagKeys: PropTypes.arrayOf(PropTypes.string)
}) : {};
TagInput.defaultProps = {
  autoFocus: false,
  minHeight: 40,
  noBottomSpace: false,
  readOnly: false,
  value: '',
  variant: 'default',
  importHandler: defaultImportHandler,
  exportHandler: defaultExportHandler,
  forceAddTagKeys: [],
  maxTags: 20
};