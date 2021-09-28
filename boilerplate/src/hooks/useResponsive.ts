import { useState, useEffect } from 'react'
import debounce from 'lodash/debounce'
import theme from '@theme'

function useResponsive({ resizeDebounceTime = 300 } = {}):ResponsiveState {
  const [state, setState] = useState(getResponsiveState())
  const handleResizeStart = () => {
    setState({ ...state, resizing: true })
    window.removeEventListener('resize', handleResizeStart)
  }
  const handleResizeEnd = debounce(() => {
    setState(getResponsiveState())
    window.addEventListener('resize', handleResizeStart)
  }, resizeDebounceTime)

  useEffect(() => {
    window.addEventListener('resize', handleResizeStart)
    window.addEventListener('resize', handleResizeEnd)

    return () => {
      window.removeEventListener('resize', handleResizeStart)
      window.removeEventListener('resize', handleResizeEnd)
    }
  }, [])

  return state
}

function getResponsiveState():ResponsiveState {
  const { innerWidth: width, innerHeight: height } = window
  const orientation = (width > height) ? 'landscape' : 'portrait'

  return {
    screen: {
      width,
      height,
      orientation
    },
    resizing: false,
    breakpoints: Object.entries(theme.breakpoints).reduce((acc, [key, value]) => {
      return Object.assign(acc, { [key]: width >= value })
    }, {})
  }
}

export default useResponsive
export type ResponsiveState = {
  screen: {
    width: number,
    height: number,
    orientation: 'landscape'|'portrait',
  },
  resizing: boolean,
  breakpoints: { [key:string]:boolean }
}
