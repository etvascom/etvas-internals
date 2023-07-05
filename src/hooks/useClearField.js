import { useCallback, useEffect, useRef } from 'react'

export const useClearField = dependencies => {
  const ref = useRef()

  useEffect(() => {
    const [fn] = dependencies
    ref.current = fn
  }, [dependencies])

  return useCallback(() => ref.current(''), [])
}
