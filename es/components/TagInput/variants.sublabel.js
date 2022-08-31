function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { etvasTheme } from '@etvas/etvaskit';
var DEFAULT_STYLE = {
  color: 'textDefault',
  fontFamily: etvasTheme.fonts.primary,
  fontWeight: etvasTheme.fontWeights.lighter,
  fontSize: etvasTheme.fontSizes[0],
  lineHeight: etvasTheme.lineHeights.base,
  letterSpacing: etvasTheme.letterSpacings.base
};

var ERROR_STYLE = _extends({}, DEFAULT_STYLE, {
  color: 'statusError'
});

var WARNING_STYLE = _extends({}, DEFAULT_STYLE, {
  color: 'statusWarning'
});

var VALID_STYLE = _extends({}, DEFAULT_STYLE);

var DISABLED_STYLE = _extends({}, DEFAULT_STYLE);

export default {
  "default": DEFAULT_STYLE,
  error: ERROR_STYLE,
  warning: WARNING_STYLE,
  valid: VALID_STYLE,
  disabled: DISABLED_STYLE
};