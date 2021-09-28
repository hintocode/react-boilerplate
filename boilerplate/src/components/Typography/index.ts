import styled, { css } from 'styled-components'

const textStyles = css<TextProps>`
  ${({ theme, size }) => size ? `font-size: ${theme.rem(size)};` : null}
  ${({ uppercase }) => uppercase ? 'text-transform: uppercase;' : null}
  ${({ align }) => align ? `text-align: ${align};` : null}
  ${({ theme, color }) => color ? `color: ${theme.colors[color]};` : null}
`

export type TextProps = {
  size?: number,
  uppercase?: boolean,
  align?: 'left'|'center'|'justify'|'right',
  color?: string
}

export const Title = styled.h1<TextProps & { as?:'h2'|'h3'|'h4'|'h5'|'h6' }>`
  ${({ theme, as }) => {
    switch (as) {
    case 'h2':
      return `font-size: ${theme.rem(40)};`
    case 'h3':
      return `font-size: ${theme.rem(32)};`
    case 'h4':
      return `font-size: ${theme.rem(24)};`
    case 'h5':
      return `font-size: ${theme.rem(20)};`
    case 'h6':
      return `font-size: ${theme.rem(18)};`
    default:
      return `font-size: ${theme.rem(48)};`
    }
  }}
  font-weight: bold;
  line-height: 1;

  ${textStyles}
`

export const Paragraph = styled.p<TextProps>`
  line-height: 1.2;
  ${textStyles}
`

export const Label = styled.small<TextProps>`
  ${textStyles}
  font-size: ${({ theme }) => theme.rem(12)};
`

export const Link = styled.a<TextProps>`
  ${textStyles}
`
