const DEFAULT_DISABLED_STYLE = {
  cursor: 'not-allowed',
  pointerEvents: 'none'
}

const DEFAULT_STYLE = {
  fontFamily: 'primary',
  fontWeight: '300',
  fontSize: 2,
  textTransform: 'unset',
  lineHeight: '20px',
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
}

const ERROR_STYLE = {
  ...DEFAULT_STYLE,
  borderColor: 'error',
  ':disabled': {
    ...DEFAULT_DISABLED_STYLE,
    color: 'textInputDisabled'
  }
}

const WARNING_STYLE = {
  ...DEFAULT_STYLE,
  ':disabled': {
    ...DEFAULT_DISABLED_STYLE,
    color: 'textInputDisabled'
  }
}

const VALID_STYLE = {
  ...DEFAULT_STYLE
}

const DISABLED_STYLE = {
  ...DEFAULT_STYLE,
  ...DEFAULT_DISABLED_STYLE,
  color: 'textInputDisabled'
}

export default {
  default: DEFAULT_STYLE,
  disabled: DISABLED_STYLE,
  error: ERROR_STYLE,
  warning: WARNING_STYLE,
  valid: VALID_STYLE
}
