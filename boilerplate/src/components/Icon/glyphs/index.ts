import { FunctionComponent } from 'react'
import chevronRight from './chevron-right'
import facebook from './facebook'
import instagram from './instagram'
import twitter from './twitter'

const glyphs: { [key:string]:FunctionComponent } = {
  'chevron-right': chevronRight,
  'facebook': facebook,
  'instagram': instagram,
  'twitter': twitter
}

export default glyphs
