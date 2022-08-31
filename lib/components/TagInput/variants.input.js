"use strict";

exports.__esModule = true;
exports["default"] = void 0;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DEFAULT_DISABLED_STYLE = {
  cursor: 'not-allowed',
  pointerEvents: 'none'
};
var DEFAULT_STYLE = {
  background: 'transparent',
  color: 'textInputActive',
  outline: 'none',
  height: '24px',
  my: 1,
  border: 'none',
  minWidth: '100px',
  flex: '1 1 auto',
  '::placeholder': {
    color: 'textInputPlaceholder'
  }
};

var ERROR_STYLE = _extends({}, DEFAULT_STYLE, {
  borderColor: 'error',
  ':disabled': _extends({}, DEFAULT_DISABLED_STYLE, {
    color: 'textInputDisabled'
  })
});

var WARNING_STYLE = _extends({}, DEFAULT_STYLE, {
  ':disabled': _extends({}, DEFAULT_DISABLED_STYLE, {
    color: 'textInputDisabled'
  })
});

var VALID_STYLE = _extends({}, DEFAULT_STYLE);

var DISABLED_STYLE = _extends({}, DEFAULT_STYLE, DEFAULT_DISABLED_STYLE, {
  color: 'textInputDisabled'
});

var _default = {
  "default": DEFAULT_STYLE,
  disabled: DISABLED_STYLE,
  error: ERROR_STYLE,
  warning: WARNING_STYLE,
  valid: VALID_STYLE
};
exports["default"] = _default;
module.exports = exports.default;