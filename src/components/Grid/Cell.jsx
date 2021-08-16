import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Checkbox, Icon, themed, Touchable, Typography } from '@etvas/etvaskit'
import Tooltip from '../Tooltip'

const getCellWithAttribute = (item, column) => (
  <Typography variant='labelSmall' color='textCardTitle'>
    {item[column.attribute]}
  </Typography>
)

const Cell = ({ item, column, checked, extended, cellAction, ...props }) => {
  const [isChecked, setChecked] = useState(checked)
  const contents = useMemo(() => {
    if (column.hide) {
      return
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
      const iconButton = (
        <IconButton
          as='button'
          align={column.align}
          disabled={column.isDisabled ?? false}
          onClick={e => {
            column.action(item, extended)
            e.stopPropagation()
          }}>
          <Icon name={column.iconButton} size='medium' color='inputIcon' />
        </IconButton>
      )
      return (
        <StyledTouchable
          as='div'
          align={column.align}
          onClick={cellAction}
          width='100%'
          {...props}>
          {column.tooltip ? (
            <Tooltip {...column.tooltip}>{iconButton}</Tooltip>
          ) : (
            iconButton
          )}
        </StyledTouchable>
      )
    }
    if (column.render) {
      return column.render(item, extended)
    }
    if (column.attribute) {
      return getCellWithAttribute(item, column)
    }

    return ''
  }, [column, isChecked, item, cellAction, props, extended])

  const cellContent = (
    <StyledTouchable
      as='div'
      icon={!!column.icon}
      align={column.align}
      disabled={column.isDisabled ?? false}
      activeOpacity={0.75}
      effect='opacity'
      onClick={column.action ?? cellAction}
      width='100%'
      {...props}>
      {contents}
    </StyledTouchable>
  )

  if (column.iconButton) {
    return <>{contents}</>
  }

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

const IconButton = styled(StyledTouchable)`
  appearance: none;
  border: none;
  background-color: transparent;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover path {
    fill: ${({ disabled }) => !disabled && themed('colors.brand')} !important;
  }
`

Cell.propTypes = {
  extended: PropTypes.bool,
  item: PropTypes.object,
  column: PropTypes.object,
  checked: PropTypes.bool,
  cellAction: PropTypes.func
}

export default Cell
