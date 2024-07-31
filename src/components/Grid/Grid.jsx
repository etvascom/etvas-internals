import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Box, Flex, Icon, Typography, themed } from '@etvas/etvaskit'

import GridFooter from './GridFooter'
import Header from './GridHeader'
import { LoadingGrid } from './LoadingGrid'
import Row from './Row'
import { doSort } from './sorting'

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
  busySkeletonNumber,
  allowMultipleExtendedItems,
  paginationNextLabel,
  paginationPreviousLabel,
  paginationShowLabel,
  paginationResultsLabel,
  ...props
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
  const [extendedItems, setExtendedItems] = useState([])
  const isExpandableRow = !!RenderExtended

  const isExtended = value => extendedItems.includes(value)
  const isItemExtended = item => extendedItems.includes(item[extendedField])

  const extendItem = useCallback(
    item => {
      if (allowMultipleExtendedItems) {
        setExtendedItems([...extendedItems, item[extendedField]])
      } else {
        setExtendedItems([item[extendedField]])
      }
    },
    [allowMultipleExtendedItems, extendedField, extendedItems]
  )

  const collapseItem = useCallback(
    item => {
      if (allowMultipleExtendedItems) {
        setExtendedItems(
          extendedItems.filter(
            extendedItem => extendedItem !== item[extendedField]
          )
        )
      } else {
        setExtendedItems([])
      }
    },
    [allowMultipleExtendedItems, extendedField, extendedItems]
  )

  const toggleItemExtended = item => {
    if (isExtended(item[extendedField])) {
      collapseItem(item)
    } else {
      extendItem(item)
    }
  }

  useEffect(() => {
    if (!forceExtended) {
      return
    }

    if (Array.isArray(forceExtended)) {
      setExtendedItems(forceExtended)
    } else {
      setExtendedItems([forceExtended])
    }
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
            extendItem(item)
          } else {
            collapseItem(item)
          }
        }
      }
    ]
  }, [collapseItem, columns, extendItem, extendedField])

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
      <Flex alignItems='center' justifyContent='center'>
        <Typography variant='base14Light' color='baseMetal' p={6}>
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

    toggleItemExtended(item)
  }

  return (
    <>
      <Box mb={6} {...props}>
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
              data-testid={`${name}-item`}
              data-value={item.id ?? item._id}
              scroll={isItemExtended(item) && isExtended(forceExtended)}
              key={item[rowKeyAttribute]}>
              <Row
                data-testid={`${name}-item-row`}
                key={`${name}-row-${item.id ?? item._id}`}
                item={item}
                prefix={name}
                columns={gridColumns}
                extended={isItemExtended(item)}
                isClickableRow={isExpandableRow || !!onRowClick}
                rowColor={rowColor}
                rowAction={handleOnRowClick}
                isDisabledRow={isDisabledRow(item)}
              />
              {isItemExtended(item) ? (
                <ExtendedWrapper data-testid={`${name}-item-extended`}>
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
      <GridFooter
        paginationConfig={paginationConfig}
        nextLabel={paginationNextLabel}
        previousLabel={paginationPreviousLabel}
        showLabel={paginationShowLabel}
        resultsLabel={paginationResultsLabel}
      />
    </>
  )
}

const ItemWrapper = ({ children, scroll, ...props }) => {
  const viewRef = useRef()

  useLayoutEffect(() => {
    if (viewRef.current && scroll) {
      // wait for next tick (after render)
      setTimeout(() => {
        viewRef.current.scrollIntoView({ behavior: 'smooth' })
      }, 0)
    }
  }, [viewRef, scroll])

  return (
    <div {...props} ref={viewRef}>
      {children}
    </div>
  )
}

ItemWrapper.propTypes = {
  'data-testid': PropTypes.string,
  'data-value': PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ),
  emptyGridText: PropTypes.node,
  onRowClick: PropTypes.func,
  paginationConfig: PropTypes.object,
  rowKeyAttribute: PropTypes.string,
  busyVariant: PropTypes.oneOf(['blockSkeleton', 'runningBar']),
  isDisabledRow: PropTypes.func,
  busySkeletonNumber: PropTypes.number,
  rowColor: PropTypes.func,
  paginationNextLabel: PropTypes.node,
  paginationPreviousLabel: PropTypes.node,
  paginationShowLabel: PropTypes.node,
  paginationResultsLabel: PropTypes.node,
  allowMultipleExtendedItems: PropTypes.bool
}

Grid.defaultProps = {
  hasHeader: true,
  emptyGridText: 'No items found',
  rowKeyAttribute: 'id',
  busyVariant: 'runningBar',
  isDisabledRow: () => false,
  busySkeletonNumber: 5,
  rowColor: item => 'baseWhite',
  allowMultipleExtendedItems: false,
  paginationNextLabel: 'Next',
  paginationPreviousLabel: 'Prev',
  paginationShowLabel: 'Show',
  paginationResultsLabel: 'Results'
}

export default Grid
