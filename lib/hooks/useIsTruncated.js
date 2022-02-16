"use strict";

exports.__esModule = true;
exports.useIsTruncated = void 0;

var _react = require("react");

var useIsTruncated = function useIsTruncated(element) {
  var isElementTruncated = (0, _react.useCallback)(function () {
    if (!element.current) {
      return false;
    }

    return element.current.scrollWidth > element.current.clientWidth;
  }, [element]);

  var _useState = (0, _react.useState)(isElementTruncated()),
      isTruncated = _useState[0],
      setIsTruncated = _useState[1];

  (0, _react.useLayoutEffect)(function () {
    setIsTruncated(isElementTruncated());

    var resizeListener = function resizeListener() {
      return setIsTruncated(isElementTruncated());
    };

    window.addEventListener('resize', resizeListener);
    return function () {
      window.removeEventListener('resize', resizeListener);
    };
  }, [isElementTruncated]);
  return isTruncated;
};

exports.useIsTruncated = useIsTruncated;