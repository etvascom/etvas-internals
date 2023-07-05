import styled from 'styled-components'
import { variant } from 'styled-system'

import { Typography } from '@etvas/etvaskit'

import { default as sublabelVariants } from './variants.sublabel'

export const SubLabel = styled(Typography)`
  min-height: ${({ noPreserveSpace }) => (noPreserveSpace ? 0 : '16px')};
  ${variant({ variants: sublabelVariants })}
`
