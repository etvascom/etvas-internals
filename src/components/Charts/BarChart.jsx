import React, { useMemo } from 'react'
import HighCharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import PropTypes from 'prop-types'

const getOptions = ({ categories, series, ...rest }) => ({
  chart: {
    type: 'bar'
  },
  legend: {
    align: 'right',
    verticalAlign: 'top',
    layout: 'horizontal',
    itemMarginBottom: 24
  },
  plotOptions: {
    series: {
      stacking: 'normal'
    }
  },
  title: {
    text: ''
  },
  yAxis: {
    title: ''
  },
  xAxis: {
    categories
  },
  series,
  ...rest
})

export const BarChart = ({ categories, series, ...rest }) => {
  const options = useMemo(() => getOptions({ categories, series, ...rest }), [
    categories,
    series,
    rest
  ])

  return <HighchartsReact highcharts={HighCharts} options={options} />
}

BarChart.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.oneOf([PropTypes.number, PropTypes.string])
  ).isRequired,
  series: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      data: PropTypes.arrayOf(
        PropTypes.oneOf([PropTypes.number, PropTypes.string])
      )
    })
  ).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string)
}
