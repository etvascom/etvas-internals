import { forwardRef, useEffect, useRef, useState } from 'react'

import PropTypes from 'prop-types'

import { Box, Button, Flex, Typography } from '@etvas/etvaskit'

import { Switcher } from '../Switcher'

export const GridColumnVisibilityConfig = ({
  columns,
  visibleColumns,
  onChange
}) => {
  const [isConfigPanelOpen, setIsConfigPanelOpen] = useState(false)
  const boxRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        isConfigPanelOpen &&
        boxRef.current &&
        !boxRef.current.contains(event.target)
      ) {
        setIsConfigPanelOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [boxRef, isConfigPanelOpen])

  const handleToggleConfigPanel = event => {
    setIsConfigPanelOpen(prev => !prev)
    event.stopPropagation()
  }

  return (
    <Box position='absolute' top={1} right={1} mt={2}>
      <Flex flexDirection='column' alignItems='flex-end'>
        <Button
          variant='link'
          color='baseGray'
          width={8}
          icon='cog'
          onClick={handleToggleConfigPanel}
        />

        {isConfigPanelOpen && (
          <ConfigPanel
            ref={boxRef}
            columns={columns}
            visibleColumns={visibleColumns}
            onChange={onChange}
            mt={2}
            mr={-3}
          />
        )}
      </Flex>
    </Box>
  )
}

GridColumnVisibilityConfig.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      visible: PropTypes.bool.isRequired
    })
  ).isRequired,
  visibleColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired
}

const ConfigPanel = forwardRef(
  ({ columns, onChange, visibleColumns, ...rest }, ref) => {
    const handleCheckboxChange = columnName => {
      const isVisible = visibleColumns.includes(columnName)

      const updatedColumns = isVisible
        ? visibleColumns.filter(name => name !== columnName)
        : [...visibleColumns, columnName]

      onChange(updatedColumns)
    }

    return (
      <Box
        max-width='200px'
        p={4}
        bg='baseGrayLighter'
        borderRadius={4}
        boxShadow='0 2px 4px rgba(0, 0, 0, 0.1)'
        ref={ref}
        {...rest}>
        {columns.map(column => (
          <Flex key={column.name} mb={2} justifyContent='flex-end'>
            <Typography variant='base14Bold' mr={2}>
              {column.header}
            </Typography>

            <Switcher
              width='32px'
              toggled={visibleColumns.includes(column.name)}
              onChange={() => handleCheckboxChange(column.name)}
            />
          </Flex>
        ))}
      </Box>
    )
  }
)

ConfigPanel.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      visible: PropTypes.bool.isRequired
    })
  ).isRequired,
  visibleColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired
}

export default GridColumnVisibilityConfig
