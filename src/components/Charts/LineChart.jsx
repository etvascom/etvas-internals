import React, { useMemo } from 'react'
import HighCharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import PropTypes from 'prop-types'

const getOptions = ({ categories, series, ...rest }) => ({
  chart: {
    type: 'spline'
  },
  legend: {
    align: 'left',
    verticalAlign: 'top',
    layout: 'vertical',
    itemMarginBottom: 24
  },
  plotOptions: {
    spline: {
      marker: {
        enabled: true,
        symbol: 'circle'
      }
    }
  },
  title: {
    text: ''
  },
  xAxis: {
    categories
  },
  series,
  ...rest
})

export const LineChart = ({ categories, series, ...rest }) => {
  const options = useMemo(() => getOptions({ categories, series, ...rest }), [
    categories,
    series,
    rest
  ])

  return <HighchartsReact highcharts={HighCharts} options={options} />
}

LineChart.propTypes = {
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
