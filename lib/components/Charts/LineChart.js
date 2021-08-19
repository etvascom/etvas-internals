"use strict";

exports.__esModule = true;
exports.LineChart = void 0;

var _react = _interopRequireWildcard(require("react"));

var _highcharts = _interopRequireDefault(require("highcharts"));

var _highchartsReactOfficial = _interopRequireDefault(require("highcharts-react-official"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["categories", "series"],
    _excluded2 = ["categories", "series"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getOptions = function getOptions(_ref) {
  var categories = _ref.categories,
      series = _ref.series,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  return _extends({
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
    yAxis: {
      title: ''
    },
    xAxis: {
      categories: categories
    },
    series: series
  }, rest);
};

var LineChart = function LineChart(_ref2) {
  var categories = _ref2.categories,
      series = _ref2.series,
      rest = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  var options = (0, _react.useMemo)(function () {
    return getOptions(_extends({
      categories: categories,
      series: series
    }, rest));
  }, [categories, series, rest]);
  return /*#__PURE__*/_react["default"].createElement(_highchartsReactOfficial["default"], {
    highcharts: _highcharts["default"],
    options: options
  });
};

exports.LineChart = LineChart;
LineChart.propTypes = process.env.NODE_ENV !== "production" ? {
  categories: _propTypes["default"].arrayOf(_propTypes["default"].oneOf([_propTypes["default"].number, _propTypes["default"].string])).isRequired,
  series: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    name: _propTypes["default"].string,
    data: _propTypes["default"].arrayOf(_propTypes["default"].oneOf([_propTypes["default"].number, _propTypes["default"].string]))
  })).isRequired,
  colors: _propTypes["default"].arrayOf(_propTypes["default"].string)
} : {};