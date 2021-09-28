import React, { FunctionComponent } from 'react'
import NextImage, { ImageProps } from 'next/image'

const Image:FunctionComponent<ImageProps> = props => (
  <NextImage
    {...props}
    loader={({ src }) => src} // https://nextjs.org/docs/api-reference/next/image#loader
  />
)

export default Image
