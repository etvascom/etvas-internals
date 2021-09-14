import React from 'react'
import { Button } from '@etvas/etvaskit'
import { Grid, GridMainComponent } from '../src'

export default {
  title: 'Components/Grid'
}

const getExampleGrid = () => ({
  name: 'example-list',
  columns: [
    {
      name: 'left-spacing',
      width: '16px'
    },
    {
      name: 'name',
      header: 'Name',
      render: item => (
        <GridMainComponent
          dotColor={item.name.length % 2 ? 'positive' : 'error'}>
          {item.name}
        </GridMainComponent>
      ),
      sort: 'name',
      tooltip: { content: 'This is a tooltip' },
      width: '240px'
    },
    {
      name: 'value',
      header: 'Value',
      attribute: item => item.value,
      sort: 'value',
      width: '240px'
    },
    {
      name: 'description',
      header: 'Description',
      attribute: item => item.description,
      sort: 'description',
      width: '240px'
    },
    {
      name: 'retry',
      render: () => (
        <Button variant='link' onClick={() => {}} disabled={false}>
          Act
        </Button>
      ),
      align: 'center',
      width: '1fr'
    }
  ]
})

const getItems = () => [
  {
    name: 'test 1',
    value: 16,
    description: 'description 1'
  },
  {
    name: 'test 12',
    value: 768677,
    description: 'description 12'
  },
  {
    name: 'test 4',
    value: 0,
    description: 'this is a long description'
  }
]

export const Example = args => {
  const grid = getExampleGrid()
  const items = getItems()

  return (
    <Grid name={grid.name} columns={grid.columns} items={items} busy={false} />
  )
}
