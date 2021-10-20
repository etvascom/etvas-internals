import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from '@etvas/etvaskit'
import { GridButton } from './GridButton'

export const GridButtons = ({ item, actions }) => {
  const availableActions = actions.filter(action => !action.hide)
  return (
    <Flex width='100%' justifyContent='flex-end'>
      {availableActions.map((action, i) => (
        <GridButton
          width='auto'
          key={action.buttonText}
          disabled={action.disabled}
          loading={action.loading}
          onClick={e => {
            e.stopPropagation()
            action.action(item)
          }}
          mr={i !== availableActions.length - 1 ? 6 : 0}>
          {action.buttonText}
        </GridButton>
      ))}
    </Flex>
  )
}

GridButtons.propTypes = {
  item: PropTypes.any,
  actions: PropTypes.arrayOf(PropTypes.object)
}
