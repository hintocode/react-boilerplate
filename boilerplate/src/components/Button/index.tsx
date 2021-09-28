import React, { FunctionComponent } from 'react'
import Icon, { IconProps } from '../Icon'
import { StyledButton, StyledButtonLabel } from './styled'

const Button:FunctionComponent<ButtonProps> = ({ label, labelProps, iconStart, iconEnd, ...props }) => (
  <StyledButton {...props.href ? { as: 'a' } : null} {...props}>
    {!!iconStart && <Icon {...iconStart} />}
    {!!label && <StyledButtonLabel {...labelProps}>{label}</StyledButtonLabel>}
    {!!iconEnd && <Icon {...iconEnd} />}
  </StyledButton>
)

export default Button
export type ButtonProps = {
  label?: string,
  iconStart?: IconProps,
  iconEnd?: IconProps,
  href?: string,
  primary?: boolean,
  secondary?: boolean,
  disabled?: boolean,
  fullWidth?: boolean,
  justify?: string,
  labelProps?: { [key:string]:any }
}
