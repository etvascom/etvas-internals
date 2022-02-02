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
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
  series: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      data: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.arrayOf(
          PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.object
          ])
        )
      ])
    })
  ).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string)
}
