"use strict";

exports.__esModule = true;
exports.useEventCallback = void 0;

var _react = require("react");

var useEventCallback = function useEventCallback(dependencies) {
  var ref = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    var fn = dependencies[0];
    ref.current = fn;
  }, [dependencies]);
  return (0, _react.useCallback)(function () {
    var fn = ref.current;
    return fn();
  }, [ref]);
};

exports.useEventCallback = useEventCallback;