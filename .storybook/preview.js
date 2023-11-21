import React from 'react'

import { BrandingProvider, GlobalStyle, ThemeProvider } from '@etvas/etvaskit'
import { buildTheme } from '@etvas/etvaskit'

import { theme } from '../stories/theme'

export const decorators = [
  storyFn => (
    <BrandingProvider>
      <ThemeProvider theme={buildTheme(theme)}>
        <GlobalStyle />
        {storyFn()}
      </ThemeProvider>
    </BrandingProvider>
  )
]