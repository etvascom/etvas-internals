import React from 'react'

import css from '@styled-system/css'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Box, Button, Dropdown, Flex, Typography } from '@etvas/etvaskit'

const GridFooter = ({ paginationConfig }) => {
  if (!paginationConfig) {
    return null
  }

  const { actions, pageLimit, loading, resultsPerPage } = paginationConfig

  return (
    <Box>
      <Flex justifyContent='flex-end'>
        <ItemDisplayCounter
          mr={2}
          disabled={loading}
          initialElements={pageLimit}
          resultsPerPage={resultsPerPage}
          onChange={actions?.changeCounter}
        />
        <StyledButton
          mr={2}
          onClick={actions?.prev?.handlePrev}
          disabled={actions?.prev?.disabled}>
          Prev
        </StyledButton>
        <StyledButton
          onClick={actions?.next?.handleNext}
          disabled={actions?.next?.disabled}>
          Next
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
  ...props
}) => (
  <Flex alignItems='center' {...props}>
    <Typography variant='inputLabel' mr={1}>
      Show
    </Typography>
    <Dropdown
      noBottomSpace
      value={initialElements}
      valueRender={value => `${value} Results`}
      onChange={onChange}
      disabled={disabled}>
      {resultsPerPage.map(el => (
        <Dropdown.Option key={el} value={el}>
          {el} Results
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
  initialElements: PropTypes.number
}

export default GridFooter
