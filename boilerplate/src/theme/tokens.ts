export const fonts:{ [key:string]:string } = {
  default: '"Martel Sans", sans-serif'
}

export const colors:{ [key:string]:string } = {
  primary: '#E12D54',
  primaryHighlight: '#BB2A4A',
  primaryContrastText: '#FFFFFF',
  secondary: '#544CDB',
  secondaryHighlight: '#4943B8',
  secondaryContrastText: '#FFFFFF',
  yellow: '#FFCC49',
  peach: '#FFBBA5',
  purple: '#856BFD',
  error: '#F42434',
  success: '#77BC1F',
  white: '#FFFFFF',
  ice: '#F3F7FA',
  grey: '#DEE2E9',
  greyLight: '#E9EDF0',
  greyDark: '#647797',
  black: '#000000',
  blackLight: '#131D20'
}

export const sizes:{ [key:string]:number } = {
  header: 72
}

export const layers:{ [key:string]:number } = {
  header: 9,
  modal: 10
}

export const breakpoints:{ [key:string]:number } = {
  default: 0,
  tablet: 768,
  desktop: 1024,
  large: 1280,
  wide: 1440
}

export const breakpointsAlias:{ [key:string]:string } = {
  default: 'xs',
  tablet: 'sm',
  desktop: 'md',
  large: 'lg',
  wide: 'xl'
}

export const grid:{ [key:string]:number } = {
  columns: 12,
  gutter: 12
}

export const defaults:{ [key:string]:any } = {
  scalar: 8,
  radius: 8,
  duration: '.3s'
}
