import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@etvas/etvaskit';
import { GridButton } from './GridButton';
export var GridButtons = function GridButtons(_ref) {
  var item = _ref.item,
      actions = _ref.actions;
  var availableActions = actions.filter(function (action) {
    return !action.hide;
  });
  return /*#__PURE__*/React.createElement(Flex, {
    width: "100%",
    justifyContent: "flex-end"
  }, availableActions.map(function (action, i) {
    return /*#__PURE__*/React.createElement(GridButton, {
      width: "auto",
      key: action.buttonText,
      disabled: action.disabled,
      onClick: function onClick(e) {
        e.stopPropagation();
        action.action(item);
      },
      mr: i !== availableActions.length - 1 ? 6 : 0
    }, action.buttonText);
  }));
};
GridButtons.propTypes = process.env.NODE_ENV !== "production" ? {
  item: PropTypes.any,
  actions: PropTypes.arrayOf(PropTypes.object)
} : {};