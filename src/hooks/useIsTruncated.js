import { useCallback, useState, useLayoutEffect } from 'react'

export const useIsTruncated = element => {
  const isElementTruncated = useCallback(() => {
    if (!element.current) {
      return false
    }
    return element.current.scrollWidth > element.current.clientWidth
  }, [element])

  const [isTruncated, setIsTruncated] = useState(isElementTruncated())

  useLayoutEffect(() => {
    setIsTruncated(isElementTruncated())
    const resizeListener = () => setIsTruncated(isElementTruncated())
    window.addEventListener('resize', resizeListener)
    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [isElementTruncated])

  return isTruncated
}
