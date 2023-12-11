import { BarChart, ColumnChart, LineChart } from '../src'

export default {
  title: 'Components/Charts'
}

const colors = ['#54BEF6', '#F7D935', '#0040E3', '#B91C6B']

const categories = [
  'January 2021',
  'February 2021',
  'March 2021',
  'April 2021',
  'May 2021',
  'June 2021',
  'July 2021',
  'August 2021'
]

const series = [
  { name: 'EyeOnID', data: [12, 6, 7, 1, 17, 21, 5, 18] },
  { name: 'Reachtag', data: [20, 4, 1, 5, 9, 6, 10, 8] },
  { name: 'SPB', data: [8, 2, 16, 3, 1, 23, 5, 3] },
  { name: 'WeGift', data: [1, 5, 2, 18, 4, 5, 1, 2] }
]

export const LineChartExample = () => (
  <LineChart categories={categories} series={series} colors={colors} />
)

export const ColumnChartExample = () => (
  <ColumnChart categories={categories} series={[series[0]]} colors={colors} />
)

export const BarChartExample = () => (
  <BarChart
    categories={categories}
    series={[series[0], series[1]]}
    colors={colors}
  />
)
