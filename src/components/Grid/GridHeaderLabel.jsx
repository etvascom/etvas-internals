import { useRef } from 'react'

import PropTypes from 'prop-types'

import { Typography } from '@etvas/etvaskit'

import { useIsTruncated } from '../../hooks'
import Tooltip from '../Tooltip'

const GridHeaderLabel = ({ children, tooltipContent }) => {
  const headerRef = useRef()
  const isTruncated = useIsTruncated(headerRef)

  const text = (
    <Typography variant='inputLabel' truncate ref={headerRef} mb={0}>
      {children}
    </Typography>
  )

  return isTruncated ? (
    <Tooltip minWidth='0' content={tooltipContent} distance='50px'>
      {text}
    </Tooltip>
  ) : (
    text
  )
}

GridHeaderLabel.propTypes = {
  children: PropTypes.node,
  tooltipContent: PropTypes.node
}

export default GridHeaderLabel
