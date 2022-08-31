import PropTypes from 'prop-types';
export var tagShape = {
  value: PropTypes.any,
  name: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  validate: PropTypes.func,
  label: PropTypes.node,
  placeholder: PropTypes.node,
  required: PropTypes.bool
};