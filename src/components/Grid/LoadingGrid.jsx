import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ActivityIndicator, BlockSkeleton } from '@etvas/etvaskit'

export const LoadingGrid = ({ busyVariant, busySkeletonNumber }) =>
  busyVariant === 'blockSkeleton' && busySkeletonNumber > 0 ? (
    <>
      {Array.from({ length: busySkeletonNumber }, (_, i) => i + 1).map(el => (
        <BlockSkeleton key={el} height='44px' mb={1} />
      ))}
    </>
  ) : (
    <Shadow>
      <ActivityIndicator
        variant='runningbar'
        colors={{ background: 'transparent', primary: 'accent' }}
      />
    </Shadow>
  )

LoadingGrid.propTypes = {
  busyVariant: PropTypes.oneOf(['blockSkeleton', 'runningBar']),
  busySkeletonNumber: PropTypes.number
}

const Shadow = styled.div`
  width: 100%;
  min-height: 240px;
`
