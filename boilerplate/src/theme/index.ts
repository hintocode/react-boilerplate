
import 'styled-components'
import { Theme } from './types'
import * as tokens from './tokens'
import * as helpers from './helpers'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

const theme:Theme = { ...tokens, ...helpers }

export default theme
export { default as GlobalStyles } from './styles'
