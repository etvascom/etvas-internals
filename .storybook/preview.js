import React from 'react'

import { addDecorator } from '@storybook/react'

import { BrandingProvider, GlobalStyle, ThemeProvider } from '@etvas/etvaskit'
import { buildTheme } from '@etvas/etvaskit'

import { theme } from '../stories/theme'

addDecorator(storyFn => (
  <BrandingProvider>
    <ThemeProvider theme={buildTheme(theme)}>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  </BrandingProvider>
))
