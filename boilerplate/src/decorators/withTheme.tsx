import React, { FunctionComponent } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '@theme'

/**
 * It wraps a component in ThemeProvider so theme-based properties can be inherited.
 * NOTICE: the whole application is already wrapped in ThemeProvider, so you don't need to decorate
 *         each component to let it to inherit properties from the theme; anyway, you may need to do
 *         this outside the application context, e.g. for testing purposes.
 */
export default function withTheme(Component:FunctionComponent):FunctionComponent {
  const DecoratedComponent = ({ ...props }) => (
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  )
  DecoratedComponent.displayName = `${Component.displayName}WithTheme`
  return DecoratedComponent
}
