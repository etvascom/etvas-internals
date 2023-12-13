import React, { Fragment, useMemo } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Box, Icon, Touchable, themed } from '@etvas/etvaskit'

import GridHeaderLabel from './GridHeaderLabel'

const sortTypes = [0, 1, 2, 3]

const HeaderCell = ({ column, sortType }) => (
  <StyledWrapper>
    {sortType ? (
      <Box>
        <StyledOrderIcons>
          <Icon
            size='small'
            name='menuUp'
            color={sortType === 3 ? 'brand' : 'textLabelDefault'}
          />
          <Icon
            size='small'
            name='menuDown'
            color={sortType === 2 ? 'brand' : 'textLabelDefault'}
          />
        </StyledOrderIcons>
      </Box>
    ) : null}

    {column.headerComponent ? (
      column.headerComponent
    ) : (
      <GridHeaderLabel tooltipContent={column.header}>
        {column.header}
      </GridHeaderLabel>
    )}
  </StyledWrapper>
)

const Header = ({ columns, toggleSort, sortConfig }) => {
  const gridTemplateColumns = useMemo(
    () => columns.map(column => column.width).join(' '),
    [columns]
  )

  const getSortType = column => {
    if (!column.sort) return 0
    else if (column.sort !== sortConfig.field) return 1
    else if (sortConfig.asc) return 2
    return 3
  }

  return (
    <StyledRow gridTemplateColumns={gridTemplateColumns}>
      {columns.map(column => (
        <Fragment key={column.name}>
          {column.sort ? (
            <Touchable
              key={`header-${column.name}`}
              onClick={() => toggleSort(column.sort)}
              minWidth={0}>
              <HeaderCell column={column} sortType={getSortType(column)} />
            </Touchable>
          ) : (
            <HeaderCell
              key={`header-${column.name}`}
              column={column}
              sortType={0}
            />
          )}
        </Fragment>
      ))}
    </StyledRow>
  )
}

const StyledRow = styled(Box)`
  ${themed('Grid.header')};
  grid-template-columns: ${props => props.gridTemplateColumns};
`

const StyledWrapper = styled(Box)`
  display: flex;
  justify-content: ${props => props.align || 'left'};
  align-items: center;
`

const StyledOrderIcons = styled(Box)`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 4px;

  > svg:first-child {
    margin-bottom: -5px;
  }

  > svg:last-child {
    margin-top: -5px;
  }
`

HeaderCell.propTypes = {
  column: PropTypes.object,
  sortType: PropTypes.oneOf(sortTypes)
}

Header.propTypes = {
  toggleSort: PropTypes.func,
  sortConfig: PropTypes.object,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  )
}

export default Header
