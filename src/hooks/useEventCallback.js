import { useCallback, useRef, useEffect } from 'react'

export const useEventCallback = dependencies => {
  const ref = useRef()

  useEffect(() => {
    const [fn] = dependencies
    ref.current = fn
  }, [dependencies])

  return useCallback(() => {
    const fn = ref.current
    return fn()
  }, [ref])
}
