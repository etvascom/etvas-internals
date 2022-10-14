"use strict";

exports.__esModule = true;
exports.useClearField = void 0;

var _react = require("react");

var useClearField = function useClearField(dependencies) {
  var ref = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    var fn = dependencies[0];
    ref.current = fn;
  }, [dependencies]);
  return (0, _react.useCallback)(function () {
    return ref.current('');
  }, []);
};

exports.useClearField = useClearField;