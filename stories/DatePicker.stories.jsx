import React, { useState } from 'react'
import { Box, Card, Flex } from '@etvas/etvaskit'
import { Calendar, DateRangePicker, DatePicker } from '../src'

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  decorators: [
    Story => (
      <div style={{ margin: '2rem' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    displayFormat: {
      values: [{ name: 'default', value: 'dddd, LL' }],
      custom: [{ name: 'custom', value: 'ddd, D MMMM YYYY' }]
    },
    dayFormat: { values: [{ name: 'default', value: 'D' }] },
    monthFormat: { values: [{ name: 'default', value: 'MMMM' }] },
    yearFormat: { values: [{ name: 'default', value: 'YYYY' }] },
    weekdayFormat: { values: [{ name: 'default', value: 'dd' }] },
    monthSelector: { values: [{ name: 'default', value: true }] },
    monthNavigation: { values: [{ name: 'default', value: true }] },
    monthNavigationWithinYear: { values: [{ name: 'default', value: false }] },
    yearSelector: { values: [{ name: 'default', value: true }] },
    startOfTime: { values: [{ name: 'default', value: '1860-01-01' }] },
    endOfTime: { values: [{ name: 'default', value: '2180-12-31' }] }
  }
}

const Template = args => {
  const [date, setDate] = useState('1973-11-26')

  return (
    <Card maxWidth='400px' my={4} p={4}>
      <DatePicker {...args} value={date} onChange={setDate} />
    </Card>
  )
}

export const Simple = Template.bind({})

Simple.args = {
  dayFormat: 'D',
  monthFormat: 'MMMM',
  yearFormat: 'YYYY',
  weekdayFormat: 'dd',
  monthSelector: true,
  monthNavigation: true,
  monthNavigationWithinYear: false,
  yearSelector: true,
  startOfTime: '1860-01-01',
  endOfTime: '2180-12-31'
}

export const DateRange = () => {
  const [dateRange, setDateRange] = useState()

  const onChangeDateRange = value => {
    setDateRange(value)
  }

  return (
    <DateRangePicker
      value={dateRange}
      label='Date Range Picker'
      placeholder='Select new range'
      onChange={onChangeDateRange}
      displayFormat='dddd DD MMMM YYYY'
      yearDisplayStart={2021}
      yearDisplayEnd={2022}
      startOfTime='2021-01-05'
      endOfTime='2022-03-15'
    />
  )
}
