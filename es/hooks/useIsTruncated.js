import { useCallback, useState, useLayoutEffect } from 'react';
export var useIsTruncated = function useIsTruncated(element) {
  var isElementTruncated = useCallback(function () {
    if (!element.current) {
      return false;
    }

    return element.current.scrollWidth > element.current.clientWidth;
  }, [element]);

  var _useState = useState(isElementTruncated()),
      isTruncated = _useState[0],
      setIsTruncated = _useState[1];

  useLayoutEffect(function () {
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