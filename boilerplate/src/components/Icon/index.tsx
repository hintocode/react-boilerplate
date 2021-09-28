import React, { FunctionComponent } from 'react'
import glyphs from './glyphs'
import { StyledIcon } from './styled'

const Icon:FunctionComponent<IconProps> = ({ name, size, color, ...props }) => {
  const Glyph = glyphs[name]

  return (
    <StyledIcon size={size} color={color} {...props} aria-label={name}>
      {Glyph ? <Glyph /> : null}
    </StyledIcon>
  )
}

export default Icon
export { glyphs }
export type IconProps = {
  name: string,
  size?: number,
  color?: string
}
