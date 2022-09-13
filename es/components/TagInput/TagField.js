function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { useField, useFormikContext } from 'formik';
import { tagShape } from './shape';
import { TagInput } from './TagInput';
export var TagField = forwardRef(function (props, ref) {
  var _useFormikContext = useFormikContext(),
      submitCount = _useFormikContext.submitCount;

  var _useField = useField(props),
      field = _useField[0],
      meta = _useField[1],
      helpers = _useField[2];

  var id = props.id || props.name + "-" + v4();
  var error = meta.touched && meta.error;
  var displayedError = submitCount > 0 ? error : field.value && error;
  return /*#__PURE__*/React.createElement(TagInput, _extends({}, props, field, {
    exportHandler: exportHandler(props.separator),
    importHandler: importHandler(props.separator),
    onChange: helpers.setValue,
    value: field.value,
    id: id,
    error: displayedError,
    forceAddTagKeys: [props.separator],
    ref: ref
  }));
});

var exportHandler = function exportHandler(separator) {
  return function (values) {
    return values.join(separator);
  };
};

var importHandler = function importHandler(separator) {
  return function (values) {
    return values.split(separator).filter(function (val) {
      return !!val;
    }).map(function (val) {
      return val.trim();
    });
  };
};

TagField.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, tagShape, {
  separator: PropTypes.string
}) : {};
TagField.defaultProps = {
  separator: ','
};