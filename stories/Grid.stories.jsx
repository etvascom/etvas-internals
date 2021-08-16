import React from 'react'
import { Button } from '@etvas/etvaskit'
import { Grid, GridMainComponent, TruncateGridInfo } from '../src'

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
      tooltip: { content: 'This is the name' },
      width: '240px'
    },
    {
      name: 'value',
      header: 'Value',
      attribute: 'value',
      sort: 'value',
      render: item => (
        <TruncateGridInfo width='100%'>{item.value}</TruncateGridInfo>
      ),
      width: '240px'
    },
    {
      name: 'description',
      header: 'Description',
      attribute: 'description',
      sort: 'description',
      render: item => (
        <TruncateGridInfo width='100%'>{item.description}</TruncateGridInfo>
      ),
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
