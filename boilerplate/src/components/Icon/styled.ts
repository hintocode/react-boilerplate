import styled from 'styled-components'

export const StyledIcon = styled.i<{ size?:number, color?:string }>`
  display: inline-flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme, size }) => size ? theme.rem(size) : '1.25em'};

  svg {
    width: 1em;
    height: 1em;
  }

  path {
    fill: ${({ theme, color }) => color ? theme.colors[color] : 'currentColor'};
  }
`
