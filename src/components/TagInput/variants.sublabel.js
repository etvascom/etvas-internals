import { etvasTheme } from '@etvas/etvaskit'

const DEFAULT_STYLE = {
  color: 'textDefault',
  fontFamily: etvasTheme.fonts.primary,
  fontWeight: etvasTheme.fontWeights.lighter,
  fontSize: etvasTheme.fontSizes[0],
  lineHeight: etvasTheme.lineHeights.base,
  letterSpacing: etvasTheme.letterSpacings.base
}

const ERROR_STYLE = {
  ...DEFAULT_STYLE,
  color: 'statusError'
}

const WARNING_STYLE = {
  ...DEFAULT_STYLE,
  color: 'statusWarning'
}

const VALID_STYLE = {
  ...DEFAULT_STYLE
}

const DISABLED_STYLE = {
  ...DEFAULT_STYLE
}

export default {
  default: DEFAULT_STYLE,
  error: ERROR_STYLE,
  warning: WARNING_STYLE,
  valid: VALID_STYLE,
  disabled: DISABLED_STYLE
}
