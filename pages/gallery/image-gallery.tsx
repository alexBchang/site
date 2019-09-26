import * as React from 'react'

interface ImageGalleryProps {
  images: string[]
}
const ImageGallery = ({images}: ImageGalleryProps) => {
  const imageComps = images.map((image, i) => (<>
  <img className="thumbnail" alt={image} src={image} key={i} />
  <style jsx>
    {`
      .thumbnail {
        height: 20vw;
        width: 20vw;
        object-fit: cover;
      }
    `}
  </style>
  </>))
  return <div>{imageComps}</div>
}

export default ImageGallery