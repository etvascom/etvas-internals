var _excluded = ["categories", "series"],
    _excluded2 = ["categories", "series"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useMemo } from 'react';
import HighCharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';

var getOptions = function getOptions(_ref) {
  var categories = _ref.categories,
      series = _ref.series,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  return _extends({
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
      categories: categories
    },
    series: series
  }, rest);
};

export var ColumnChart = function ColumnChart(_ref2) {
  var categories = _ref2.categories,
      series = _ref2.series,
      rest = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  var options = useMemo(function () {
    return getOptions(_extends({
      categories: categories,
      series: series
    }, rest));
  }, [categories, series, rest]);
  return /*#__PURE__*/React.createElement(HighchartsReact, {
    highcharts: HighCharts,
    options: options
  });
};
ColumnChart.propTypes = process.env.NODE_ENV !== "production" ? {
  categories: PropTypes.arrayOf(PropTypes.oneOf([PropTypes.number, PropTypes.string])).isRequired,
  series: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.oneOf([PropTypes.number, PropTypes.string]))
  })).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string)
} : {};