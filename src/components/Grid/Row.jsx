import { useMemo } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Box, themed } from '@etvas/etvaskit'

import Cell from './Cell'

const Row = ({
  item,
  columns,
  prefix,
  extended,
  isClickableRow,
  isDisabledRow,
  rowAction,
  rowColor,
  ...props
}) => {
  const gridTemplateColumns = useMemo(
    () => columns.map(column => column.width).join(' '),
    [columns]
  )

  return (
    <StyledRow
      gridTemplateColumns={gridTemplateColumns}
      extended={extended}
      isClickableRow={isClickableRow}
      onClick={() => rowAction(item)}
      isDisabledRow={isDisabledRow}
      color={rowColor(item)}
      {...props}
    >
      {columns.map(column => (
        <Cell
          key={`${prefix}-cell-${column.name}`}
          column={column}
          item={item}
          data-testid={`${prefix}-${column.name}`}
          extended={extended}
        />
      ))}
    </StyledRow>
  )
}

const StyledRow = styled(Box)`
  ${themed('Grid.row')};
  grid-template-columns: ${props => props.gridTemplateColumns};
  ${props => props.extended && themed('Grid.row-extended')}
  cursor: ${({ isClickableRow }) => isClickableRow && 'pointer'};
  ${({ isDisabledRow }) => isDisabledRow && `opacity: 50%;`}
  background-color: ${({ color, theme }) => theme.colors[color] ?? color};
`

Row.propTypes = {
  extended: PropTypes.bool,
  item: PropTypes.object,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  ),
  prefix: PropTypes.string,
  rowAction: PropTypes.func,
  rowColor: PropTypes.func,
  isClickableRow: PropTypes.bool,
  isDisabledRow: PropTypes.bool
}

export default Row
