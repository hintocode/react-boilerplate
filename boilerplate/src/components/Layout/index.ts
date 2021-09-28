import styled from 'styled-components'

export const Container = styled.div<{ flex?:boolean, justify?:string, align?:string }>`
  width: 100%;
  max-width: 72rem;
  padding: 0 1rem;
  margin: 0 auto;

  ${({ flex, justify = 'flex-start', align = 'center' }) => flex ? `
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
  ` : null}
`

export const Row = styled.div<{ justify?:string, align?:string }>`
  display: flex;
  width: calc(100% + ${({ theme }) => theme.rem(theme.grid.gutter)});
  flex-wrap: wrap;
  position: relative;
  left: -${({ theme }) => theme.rem(theme.grid.gutter / 2)};
  margin-top: -${({ theme }) => theme.rem(theme.grid.gutter / 2)};
  justify-content: ${({ justify = 'flex-start' }) => justify};
  align-items: ${({ align = 'center' }) => align};
`

export const Col = styled.div<{ size:number|{ [key:string]:number }, justify?:string, align?:string }>`
  display: flex;
  width: 100%;
  flex-shrink: 0;
  flex-direction: column;
  padding: ${({ theme }) => theme.rem(theme.grid.gutter / 2)};
  justify-content: ${({ justify = 'flex-start' }) => justify};
  align-items: ${({ align = 'flex-start' }) => align};

  ${({ size, theme }) => {
    if (typeof size === 'number') {
      return `width: ${Math.min(1, size / theme.grid.columns) * 100}%;`
    }

    return `
      ${Object.keys(theme.breakpoints).filter(key => size.hasOwnProperty(theme.breakpointsAlias[key])).map(key => `
        ${theme.mediaQuery[key](`
          width: ${Math.min(1, size[theme.breakpointsAlias[key]] / theme.grid.columns) * 100}%;
        `)}
      `).join('')}
    `
  }}
`

export const Spacer = styled.div<{ size?:number }>`
  width: 100%;
  height: ${({ theme, size = 1 }) => theme.rem(theme.defaults.scalar * size)};
`

export const Hr = styled.hr`
  margin: ${({ theme }) => theme.rem(16)} 0;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.greyLight};
`
