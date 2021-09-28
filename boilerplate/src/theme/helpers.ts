import { breakpoints } from './tokens'

/**
 * It provides a size conversion from pixels to rem
 * @param {number} value 
 * @param {number} context 
 * @returns {string}
 */
export function rem(value:number, context:number = 16):string {
  return `${value/context}rem`
}

/**
 * It provides a color conversion from hex to rgba
 * @param {string} hex 
 * @param {number} alpha 
 * @returns {string}
 */
export function transparentize(hex:string, alpha:number):string {
  const normalizedHex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`)
  const channels = normalizedHex.substring(1).match(/.{2}/g)
  if (!channels) return hex
  const [r, g, b] = channels.map(channel => parseInt(channel, 16))
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

/**
 * A collection of shortcuts for media queries
 * @example
 *    // mobile first (default)
 *    mediaQuery.desktop(`
 *      ...css rules
 *    `)
 *    // desktop first
 *    mediaQuery.desktop(`
 *      ...css rules
 *    `, { mobileFirst: false })
 */
export const mediaQuery = Object.entries(breakpoints).reduce((acc, [key, value]) => Object.assign(acc, {
  [key]: (css:string, options?:{ mobileFirst?:boolean }) => {
    if (options?.mobileFirst === false) {
      return (value > 1) ? `@media screen and (max-width: ${value - 1}px) { ${css} }` : css
    }
    return (value > 0) ? `@media screen and (min-width: ${value}px) { ${css} }` : css
  }
}), {})
