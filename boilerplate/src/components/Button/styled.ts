import styled from 'styled-components'
import styledMap from 'styled-map'

export const StyledButton = styled.button<{ fullWidth?:boolean, justify?:string, disabled?:boolean }>`
  appearance: none;
  display: inline-flex;
  ${({ fullWidth }) => fullWidth ? 'width: 100%;' : null}
  justify-content: ${({ justify = 'center' }) => justify};
  align-items: center;
  padding: ${({ theme }) => theme.rem(12)};
  border: none;
  border-radius: ${({ theme }) => theme.rem(32)};
  background-color: ${({ theme }) => styledMap`
    primary: ${theme.colors.primary};
    secondary: ${theme.colors.secondary};
    disabled: ${theme.colors.grey};
    default: ${theme.colors.greyDark};
  `};
  font-size: ${({ theme }) => theme.rem(14)};
  color: ${({ theme }) => styledMap`
    primary: ${theme.colors.primaryContrastText};
    secondary: ${theme.colors.secondaryContrastText};
    disabled: ${theme.colors.greyDark};
    default: ${theme.colors.white};
  `};
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  pointer-events: ${({ disabled }) => disabled ? 'none' : 'all'};
  transition-property: background-color, color, opacity;
  transition-duration: ${({ theme }) => theme.defaults.duration};

  &:hover {
    background-color: ${({ theme }) => styledMap`
      primary: ${theme.colors.primaryHighlight};
      secondary: ${theme.colors.secondaryHighlight};
      default: ${theme.colors.grey};
    `};
    color: ${({ theme }) => styledMap`
      primary: ${theme.colors.primaryContrastText};
      secondary: ${theme.colors.secondaryContrastText};
      default: ${theme.colors.greyDark};
    `};
  }
`

export const StyledButtonLabel = styled.span<{ fit?:boolean }>`
  display: block;
  ${({ fit }) => fit ? 'flex-grow: 1;' : null}
  padding: 0 ${({ theme }) => theme.rem(12)};
  font-size: inherit;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  color: inherit;
`
