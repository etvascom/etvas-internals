import React from 'react'

import { Tooltip } from '../src'

export default {
  title: 'Components/Tooltip'
}

export const TooltipExample = () => (
  <div style={{ padding: '300px' }}>
    <Tooltip content='Info' placement='top'>
      Hover to see more
    </Tooltip>
  </div>
)
