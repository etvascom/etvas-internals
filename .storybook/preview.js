import React from 'react'

import isPropValid from '@emotion/is-prop-valid'
import { StyleSheetManager } from 'styled-components'

import { BrandingProvider, GlobalStyle, ThemeProvider } from '@etvas/etvaskit'
import { buildTheme } from '@etvas/etvaskit'

import { theme } from '../stories/theme'

export const decorators = [
  storyFn => (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <BrandingProvider>
        <ThemeProvider theme={buildTheme(theme)}>
          <GlobalStyle />
          {storyFn()}
        </ThemeProvider>
      </BrandingProvider>
    </StyleSheetManager>
  )
]

function shouldForwardProp(propName, target) {
  if (typeof target === 'string') {
    return isPropValid(propName)
  }

  return true
}
