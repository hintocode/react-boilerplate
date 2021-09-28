import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    background-color: ${({ theme }) => theme.colors.ice};
    font-family: ${({ theme }) => theme.fonts.default};
    font-size: 100%;
    font-variant-ligatures: none;
    text-size-adjust: none;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    min-width: 320px;
    height: 100%;
    overflow-x: hidden;
    margin: 0;
    font-size: ${({ theme }) => theme.rem(16)};
    color: ${({ theme }) => theme.colors.blackLight};
  }

  main {
    background-color: ${({ theme }) => theme.colors.white};
  }

  #app {
    display: inline;
  }

  h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    font-size: inherit;
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ol,
  ul {
    padding: 0;
    list-style: none;
  }

  figure {
    margin: 0;
  }

  img, svg {
    max-width: 100%;
    max-height: 100%;
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.greyLight};
    color: ${({ theme }) => theme.colors.greyDark};
  }

  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }

  ::-moz-placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }

  :-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }

  :-moz-placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    transition: background-color linear 3600s;
    -webkit-text-fill-color: inherit;
    -webkit-box-shadow: 0 0 0 64rem ${({ theme }) => theme.colors.white} inset;
  }
`

export default GlobalStyles
