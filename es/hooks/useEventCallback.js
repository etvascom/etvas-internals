import { useCallback, useRef, useEffect } from 'react';
export var useEventCallback = function useEventCallback(dependencies) {
  var ref = useRef();
  useEffect(function () {
    var fn = dependencies[0];
    ref.current = fn;
  }, [dependencies]);
  return useCallback(function () {
    var fn = ref.current;
    return fn();
  }, [ref]);
};