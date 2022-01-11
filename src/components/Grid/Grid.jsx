import React, { useEffect, useMemo, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Typography, Icon, Flex, Box, themed } from '@etvas/etvaskit'

import Row from './Row'
import Header from './GridHeader'

import { doSort } from './sorting'
import GridFooter from './GridFooter'
import { LoadingGrid } from './LoadingGrid'

const Grid = ({
  extendedField,
  renderExtended: RenderExtended,
  forceExtended,
  busy,
  name,
  columns,
  items,
  emptyGridText,
  hasHeader,
  onRowClick,
  initialSort,
  rowKeyAttribute,
  paginationConfig,
  isDisabledRow,
  rowColor,
  busyVariant,
  busySkeletonNumber
}) => {
  const [sortConfig, setSortConfig] = useState(() => {
    if (initialSort?.by) {
      const asc = initialSort.asc === true || initialSort.asc === undefined
      const column = columns.find(
        col => col.sort && col.name === initialSort.by
      )
      if (column) {
        return {
          field: column.sort,
          asc,
          sortTranslate: column.sortTranslate
        }
      }
    }
    return {}
  })
  const [extendedItem, setExtendedItem] = useState('')
  const isExpandableRow = !!RenderExtended

  useEffect(() => {
    setExtendedItem(forceExtended || '')
  }, [forceExtended])

  const gridColumns = useMemo(() => {
    if (!extendedField) {
      return columns
    }

    return [
      ...columns,
      {
        name: 'extended',
        width: '64px',
        align: 'center',
        render: (item, extended) => {
          if (extended) {
            return <Icon name='menuUp' size='small' color='inputIcon' />
          }
          return <Icon name='menuDown' size='small' color='inputIcon' />
        },
        action: (item, extended) => {
          if (!extended) {
            setExtendedItem(item[extendedField])
          } else {
            setExtendedItem('')
          }
        }
      }
    ]
  }, [columns, extendedField])

  const toggleSort = field => {
    const column = columns.find(col => col.sort === field)

    if (field !== sortConfig.field) {
      setSortConfig({ field, asc: true, sortTranslate: column.sortTranslate })
      return
    }

    if (sortConfig.asc) {
      setSortConfig({
        ...sortConfig,
        asc: false,
        sortTranslate: column.sortTranslate
      })
      return
    }

    setSortConfig({})
  }

  if (!busy && items?.length === 0) {
    return (
      <Flex height='64px' alignItems='center' justifyContent='center'>
        <Typography variant='base14Light' color='baseMetal'>
          {emptyGridText}
        </Typography>
      </Flex>
    )
  }

  const handleOnRowClick = item => {
    if (onRowClick) {
      return onRowClick(item)
    }

    if (!isExpandableRow) {
      return
    }

    if (item[extendedField] === extendedItem) {
      setExtendedItem('')
    } else {
      setExtendedItem(item[extendedField])
    }
  }

  return (
    <>
      <Box mb={6}>
        {hasHeader && (
          <Header
            columns={gridColumns}
            toggleSort={toggleSort}
            sortConfig={sortConfig}
          />
        )}
        {busy ? (
          <LoadingGrid
            busyVariant={busyVariant}
            busySkeletonNumber={busySkeletonNumber}
          />
        ) : (
          sortItems(items, sortConfig).map(item => (
            <ItemWrapper
              scroll={
                item[extendedField] === extendedItem &&
                forceExtended === extendedItem
              }
              key={item[rowKeyAttribute]}>
              <Row
                key={`${name}-row-${item.id ?? item._id}`}
                item={item}
                prefix={name}
                columns={gridColumns}
                extended={item[extendedField] === extendedItem}
                isClickableRow={isExpandableRow || !!onRowClick}
                rowColor={rowColor}
                rowAction={handleOnRowClick}
                isDisabledRow={isDisabledRow(item)}
              />
              {item[extendedField] === extendedItem ? (
                <ExtendedWrapper>
                  {item['key'] ? (
                    <RenderExtended item={item} />
                  ) : (
                    <RenderExtended {...item} />
                  )}
                </ExtendedWrapper>
              ) : null}
            </ItemWrapper>
          ))
        )}
      </Box>
      <GridFooter paginationConfig={paginationConfig} />
    </>
  )
}

const ItemWrapper = ({ children, scroll }) => {
  const viewRef = useRef()

  useEffect(() => {
    if (viewRef.current && scroll) {
      viewRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [viewRef, scroll])

  return <div ref={viewRef}>{children}</div>
}

ItemWrapper.propTypes = {
  children: PropTypes.any,
  scroll: PropTypes.bool
}

const sortItems = (items, sortConfig) => {
  const fieldName = sortConfig?.field
  if (!fieldName) {
    return items
  }

  const ascendant = sortConfig?.asc ? 1 : -1
  const sortFunction = sortConfig?.sort || doSort
  const translate = sortConfig?.sortTranslate || (item => item[fieldName])

  return items
    .slice(0)
    .sort((a, b) => ascendant * sortFunction(translate(a), translate(b)))
}

const ExtendedWrapper = styled.div`
  margin-bottom: 4px;
  background-color: ${themed('colors.backgroundCustomers')};
  border: 1px solid ${themed('colors.lighterOutline')};
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`

Grid.propTypes = {
  hasHeader: PropTypes.bool,
  extendedField: PropTypes.string,
  renderExtended: PropTypes.any,
  forceExtended: PropTypes.string,
  busy: PropTypes.bool,
  name: PropTypes.string,
  columns: PropTypes.array,
  initialSort: PropTypes.shape({
    by: PropTypes.string,
    asc: PropTypes.bool
  }),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string
    })
  ),
  emptyGridText: PropTypes.node,
  onRowClick: PropTypes.func,
  paginationConfig: PropTypes.object,
  rowKeyAttribute: PropTypes.string,
  busyVariant: PropTypes.oneOf(['blockSkeleton', 'runningBar']),
  isDisabledRow: PropTypes.func,
  busySkeletonNumber: PropTypes.number,
  rowColor: PropTypes.func
}

Grid.defaultProps = {
  hasHeader: true,
  emptyGridText: 'No items found',
  rowKeyAttribute: 'id',
  busyVariant: 'runningBar',
  isDisabledRow: () => false,
  busySkeletonNumber: 5,
  rowColor: item => 'baseWhite'
}

export default Grid
