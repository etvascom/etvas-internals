import React from 'react'

import { action } from '@storybook/addon-actions'

import { Box, Button } from '@etvas/etvaskit'

import { Grid, GridMainComponent } from '../src'

export default {
  title: 'Components/Grid'
}

const getExampleGrid = () => ({
  name: 'example-list',
  extendedField: 'id',
  renderExtended: ExtendedContent,
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
    },
    {
      name: 'editAction',
      iconButton: 'edit',
      tooltip: {
        content: 'Edit'
      },
      action: action('Edit action clicked'),
      align: 'center',
      width: '1fr'
    }
  ]
})

const getGridLongHeader = () => ({
  name: 'example-list',
  extendedField: 'id',
  renderExtended: ExtendedContent,
  columns: [
    {
      name: 'left-spacing',
      width: '16px'
    },
    {
      name: 'name',
      header: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
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
      header: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      attribute: item => item.value,
      sort: 'value',
      width: '1fr'
    },
    {
      name: 'description',
      header: 'Lorem ipsum dolor sit amet consectetur.',
      attribute: item => item.description,
      sort: 'description',
      width: '2fr'
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
    },
    {
      name: 'editAction',
      iconButton: 'edit',
      tooltip: {
        content: 'Edit'
      },
      action: action('Edit action clicked'),
      align: 'center',
      width: '1fr'
    }
  ]
})

const getItems = () => [
  {
    id: '1',
    name: 'test 1',
    value: 16,
    description: 'description 1'
  },
  { id: '2', name: 'test 12', value: 768677, description: 'description 12' },
  {
    id: '3',
    name: 'test 4',
    value: 0,
    description: 'this is a long description'
  },
  {
    id: '3',
    name: 'this is a super long name and will need to be truncated by the grid',
    value: 0,
    description:
      'this is a super long description and will also need to be truncated by the grid'
  }
]

export const Example = args => {
  const grid = getExampleGrid()
  const items = getItems()

  return (
    <Grid name={grid.name} columns={grid.columns} items={items} busy={false} />
  )
}

export const ExtendedGrid = args => {
  const grid = getExampleGrid()
  const items = getItems()

  return (
    <Grid
      name={grid.name}
      columns={grid.columns}
      items={items}
      busy={false}
      extendedField={grid.extendedField}
      renderExtended={grid.renderExtended}
    />
  )
}

const ExtendedContent = () => <h1>Extended Content</h1>

export const LoadingGrid = args => {
  const grid = getExampleGrid()
  const items = getItems()

  return (
    <Grid
      name={grid.name}
      columns={grid.columns}
      items={items}
      busy={true}
      busyVariant='blockSkeleton'
      busySkeletonNumber={5}
    />
  )
}

export const ColorGridRow = args => {
  const grid = getExampleGrid()
  const items = getItems()

  const getColor = item => {
    if (item.value === 0) {
      return 'statusWarning'
    }
    if (item.value === 768677) {
      return 'purple'
    }
    if (item.value === 16) {
      return '#666'
    }
  }

  return (
    <Grid
      name={grid.name}
      columns={grid.columns}
      items={items}
      rowColor={getColor}
    />
  )
}

export const EmptyGrid = () => {
  const grid = getExampleGrid()

  return <Grid name={grid.name} columns={grid.columns} items={[]} />
}

export const GridWithLongHeaders = () => {
  const grid = getGridLongHeader()
  const items = getItems()

  return (
    <Box m={10}>
      <Grid name={grid.name} columns={grid.columns} items={items} />
    </Box>
  )
}
