import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Box } from '@etvas/etvaskit'

const sizes = {
  tiny: { width: '26px', height: '16px' },
  small: { width: '41px', height: '18px' },
  large: { width: '80px', height: '41px' }
}

export const Switcher = ({
  toggled,
  onChange,
  type = 'small',
  height,
  width,
  toggledBackground,
  disabled,
  ...props
}) => {
  if (type && !height) {
    height = sizes?.[type]?.height || sizes.small.height
  }

  if (type && !width) {
    width = sizes?.[type]?.width || sizes.small.width
  }

  return (
    <Box width={width} {...props}>
      <SwitchButton
        aria-checked={toggled}
        role='switch'
        onClick={onChange}
        toggled={toggled}
        heightSize={height}
        disabled={disabled}
        toggledBackground={toggledBackground}>
        <SwitchSpan heightSize={height} top='2px' left='2px' />
      </SwitchButton>
    </Box>
  )
}

Switcher.propTypes = {
  toggled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['tiny', 'small', 'large']),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  toggledBackground: PropTypes.string,
  disabled: PropTypes.bool
}

const getBackground = ({ toggled, disabled, toggledBackground, theme }) => {
  if (disabled) {
    return theme.colors.baseGrayLighter
  }

  if (!toggled) {
    return '#AAAAAA'
  }

  if (!toggledBackground) {
    return 'linear-gradient(90deg, #00C0FC 0%, #5788EC 100%)'
  }

  return theme.colors[toggledBackground] || toggledBackground
}

const SwitchButton = styled.button`
  appearance: none;
  border: none;
  width: 100%;
  min-width: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  height: ${({ heightSize }) => heightSize};
  border-radius: 60px;
  position: relative;
  background: ${getBackground};

  &:focus {
    outline: none;
    > span {
      box-shadow: 0 0 2px 2px gray;
    }
  }
`

const SwitchSpan = styled.span`
  position: absolute;
  border-radius: 50%;
  transition: 0.2s;
  background: #f3f3f3;
  box-shadow: 4px 4px 15px rgba(243, 243, 243, 0.25);

  ${SwitchButton}[aria-checked="true"] & {
    left: calc(100% - ${({ left }) => left});
    transform: translateX(-100%);
  }

  ${SwitchButton}:active & {
    width: ${({ heightSize }) => heightSize};
  }

  ${({ top, left, heightSize }) => `
    top: ${top};
    left: ${left};
    width: calc(${heightSize} - 2 * ${left}); 
    height: calc(${heightSize} - 2 * ${top});
  `}
`
