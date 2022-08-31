"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _etvaskit = require("@etvas/etvaskit");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DEFAULT_DISABLED_STYLE = {
  cursor: 'not-allowed',
  pointerEvents: 'none'
};
var DEFAULT_STYLE = {
  minHeight: '32px',
  background: _etvaskit.etvasTheme.colors.backgroundLightGray,
  paddingX: 2,
  borderSize: "" + _etvaskit.etvasTheme.borders[1],
  borderColor: 'inputBorderGray',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderRadius: 3,
  boxSizing: 'border-box',
  color: 'textInputActive',
  width: '100%',
  outline: 'none',
  '::placeholder': {
    color: 'textInputPlaceholder'
  },
  ':hover': {
    borderColor: 'brandLight'
  },
  ':focus': {
    borderColor: 'brandLight'
  },
  ':disabled': _extends({}, DEFAULT_DISABLED_STYLE, {
    background: 'backgroundGray'
  })
};

var ERROR_STYLE = _extends({}, DEFAULT_STYLE, {
  borderSize: "" + _etvaskit.etvasTheme.borders[1],
  borderColor: 'error',
  ':hover': {
    borderColor: 'error'
  },
  ':focus': {
    borderColor: 'error'
  },
  ':disabled': _extends({}, DEFAULT_DISABLED_STYLE, {
    backgroundColor: 'backgroundGray',
    color: 'textInputDisabled',
    borderColor: 'error'
  })
});

var WARNING_STYLE = _extends({}, DEFAULT_STYLE, {
  borderSize: "" + _etvaskit.etvasTheme.borders[1],
  borderColor: 'warning',
  ':hover': {
    borderColor: 'warning'
  },
  ':focus': {
    borderColor: 'warning'
  },
  ':disabled': _extends({}, DEFAULT_DISABLED_STYLE, {
    background: 'backgroundGray',
    color: 'textInputDisabled'
  })
});

var VALID_STYLE = _extends({}, DEFAULT_STYLE);

var DISABLED_STYLE = _extends({}, DEFAULT_STYLE, DEFAULT_DISABLED_STYLE, {
  backgroundColor: 'backgroundGray',
  borderColor: 'inputGray',
  color: 'textInputDisabled',
  ':hover': {
    borderColor: 'inputGray'
  }
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