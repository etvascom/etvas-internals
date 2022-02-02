import React, { useMemo } from 'react'
import HighCharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import PropTypes from 'prop-types'

const getOptions = ({ categories, series, ...rest }) => ({
  chart: {
    type: 'column'
  },
  legend: {
    enabled: false
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
  yAxis: {
    title: ''
  },
  xAxis: {
    categories
  },
  series,
  ...rest
})

export const ColumnChart = ({ categories, series, ...rest }) => {
  const options = useMemo(() => getOptions({ categories, series, ...rest }), [
    categories,
    series,
    rest
  ])

  return <HighchartsReact highcharts={HighCharts} options={options} />
}

ColumnChart.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired,
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
