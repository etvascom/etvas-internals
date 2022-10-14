import { useCallback, useRef, useEffect } from 'react';
export var useClearField = function useClearField(dependencies) {
  var ref = useRef();
  useEffect(function () {
    var fn = dependencies[0];
    ref.current = fn;
  }, [dependencies]);
  return useCallback(function () {
    return ref.current('');
  }, []);
};