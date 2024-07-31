import css from '@styled-system/css'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Box, Button, Dropdown, Flex, Typography } from '@etvas/etvaskit'

const GridFooter = ({ paginationConfig }) => {
  if (!paginationConfig) {
    return null
  }

  const { actions, pageLimit, loading, resultsPerPage, labels } =
    paginationConfig

  const nextLabel = labels?.next ?? 'Next'
  const previousLabel = labels?.previous ?? 'Previous'
  const showLabel = labels?.show ?? 'Show'
  const resultsLabel = labels?.results ?? 'Results'

  return (
    <Box>
      <Flex justifyContent='flex-end'>
        <ItemDisplayCounter
          mr={2}
          disabled={loading}
          initialElements={pageLimit}
          resultsPerPage={resultsPerPage}
          onChange={actions?.changeCounter}
          showLabel={showLabel}
          resultsLabel={resultsLabel}
        />
        <StyledButton
          mr={2}
          onClick={actions?.prev?.handlePrev}
          disabled={actions?.prev?.disabled}>
          {previousLabel}
        </StyledButton>
        <StyledButton
          onClick={actions?.next?.handleNext}
          disabled={actions?.next?.disabled}>
          {nextLabel}
        </StyledButton>
      </Flex>
    </Box>
  )
}

GridFooter.propTypes = {
  paginationConfig: PropTypes.shape({
    resultsPerPage: PropTypes.arrayOf(PropTypes.number),
    loading: PropTypes.bool,
    pageLimit: PropTypes.number,
    actions: PropTypes.shape({
      changeCounter: PropTypes.func,
      next: PropTypes.shape({
        handleNext: PropTypes.func,
        disabled: PropTypes.bool
      }),
      prev: PropTypes.shape({
        handlePrev: PropTypes.func,
        disabled: PropTypes.bool
      })
    }),
    labels: PropTypes.shape({
      next: PropTypes.node,
      previous: PropTypes.node,
      show: PropTypes.node,
      results: PropTypes.node
    })
  })
}

const StyledButton = styled(Button)(
  css({
    backgroundColor: 'background',
    color: 'textDefault',
    '&:not([disabled])': {
      '&:hover': { backgroundColor: 'inputGray' },
      '&:active': { backgroundColor: 'inputGray' },
      '&:focus': { backgroundColor: 'inputGray' }
    },
    '&:disabled': {
      backgroundColor: 'background'
    }
  })
)

const ItemDisplayCounter = ({
  onChange,
  disabled,
  resultsPerPage,
  initialElements,
  showLabel,
  resultsLabel,
  ...props
}) => (
  <Flex alignItems='center' {...props}>
    <Typography variant='inputLabel' mr={1}>
      {showLabel}
    </Typography>
    <Dropdown
      noBottomSpace
      value={initialElements}
      valueRender={value => (
        <>
          {value} {resultsLabel}
        </>
      )}
      onChange={onChange}
      disabled={disabled}>
      {resultsPerPage.map(el => (
        <Dropdown.Option key={el} value={el}>
          {el} {resultsLabel}
        </Dropdown.Option>
      ))}
    </Dropdown>
  </Flex>
)

ItemDisplayCounter.defaultProps = {
  resultsPerPage: [5, 10, 25]
}
ItemDisplayCounter.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  resultsPerPage: PropTypes.arrayOf(PropTypes.number),
  initialElements: PropTypes.number,
  showLabel: PropTypes.node,
  resultsLabel: PropTypes.node
}

export default GridFooter
