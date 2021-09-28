export type Theme = {
  // tokens
  fonts: { [key:string]:string },
  colors: { [key:string]:string },
  sizes: { [key:string]:number },
  layers: { [key:string]:number },
  breakpoints: { [key:string]:number },
  breakpointsAlias: { [key:string]:string },
  grid: { [key:string]:number },
  defaults: { [key:string]:any },
  // helpers
  rem: (value:number, context?:number) => string,
  transparentize: (hex:string, alpha:number) => string,
  mediaQuery: { [key:string]:(css:string, options?:{ mobileFirst?:boolean }) => string }
}
