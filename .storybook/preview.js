import React from 'react'
import { addDecorator } from '@storybook/react'
import { BrandingProvider, ThemeProvider, GlobalStyle } from '@etvas/etvaskit'

addDecorator(storyFn => (
  <BrandingProvider>
    <ThemeProvider>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  </BrandingProvider>
))
