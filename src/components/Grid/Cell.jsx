import React, { useMemo, useState } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  Box,
  Button,
  Checkbox,
  Icon,
  Touchable,
  Typography,
  themed
} from '@etvas/etvaskit'

import Tooltip from '../Tooltip'
import { TruncateGridInfo } from './index'

const renderText = renderedValue => (
  <TruncateGridInfo minWidth='0'>
    <Typography variant='labelSmall' truncate color='textCardTitle'>
      {renderedValue}
    </Typography>
  </TruncateGridInfo>
)

const Cell = ({ item, column, checked, extended, ...props }) => {
  const [isChecked, setChecked] = useState(checked)
  const contents = useMemo(() => {
    if (column.hide) {
      if (
        typeof column.hide === 'boolean' ||
        (column.hide instanceof Function && column.hide(item))
      ) {
        return <Box width='100%' height='100%' />
      }
    }
    if (column.checkbox) {
      const _handleChange = async () => {
        const chk = await column.onToggleCheck(item)
        setChecked(chk)
      }
      return (
        <Checkbox
          size={24}
          id={`${column.id || column._id}`}
          checked={isChecked}
          onChange={_handleChange}
        />
      )
    }
    if (column.icon) {
      return <Icon name={column.icon} size='medium' color='inputIcon' />
    }
    if (column.iconButton) {
      return (
        <IconButton
          variant='link'
          icon={column.iconButton}
          disabled={column.isDisabled ?? false}
          iconColor='inputIcon'
          align={column.align}
          onClick={e => {
            column.action(item, extended)
            e.stopPropagation()
          }}
        />
      )
    }
    if (column.render) {
      return column.render(item, extended)
    }
    if (column.attribute) {
      if (column.attribute instanceof Function) {
        return renderText(column.attribute(item))
      }
      return renderText(item[column.attribute])
    }

    return ''
  }, [column, isChecked, item, extended])

  const cellContent = (
    <StyledTouchable
      as='div'
      icon={!!column.icon}
      align={column.align}
      disabled={column.isDisabled ?? false}
      activeOpacity={0.75}
      effect='opacity'
      width='100%'
      {...props}>
      {contents}
    </StyledTouchable>
  )

  return column.tooltip ? (
    <Tooltip {...column.tooltip}>{cellContent}</Tooltip>
  ) : (
    cellContent
  )
}

const StyledTouchable = styled(Touchable)`
  ${themed('Grid.cell')};
  display: flex;
  justify-content: ${props => props.align || 'left'};
  align-items: center;
`

Cell.propTypes = {
  extended: PropTypes.bool,
  item: PropTypes.object,
  column: PropTypes.object,
  checked: PropTypes.bool
}

const IconButton = styled(Button)`
  width: 100%;
  height: 100%;

  :not([disabled]):hover svg {
    fill: ${({ theme }) => theme.colors.brand};
  }
`
export default Cell
