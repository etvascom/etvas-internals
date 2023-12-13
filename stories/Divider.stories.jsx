import { Card, Typography } from '@etvas/etvaskit'

import { Divider } from '../src'

export default {
  title: 'Components/Divider'
}

export const DividerExample = () => (
  <Card>
    <Typography>first line</Typography>
    <Divider />
    <Typography>second line</Typography>
  </Card>
)
