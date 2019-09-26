import * as React from 'react'

import Footer from 'common/footer'
import Head from 'common/head'
import * as api from './gallery/api'
import ImageGallery from './gallery/image-gallery'

const Gallery = () => {
  const [images, setImages] = React.useState([])
  React.useEffect(() => {
    api.getGalleryList()
      .then((response) => {
        setImages(response.images)
      })
  })
  return (
    <div>
      <Head>
        <title>
        Alex Chang | Gallery
        </title>
      </Head>
      <h1>Gallery</h1>
      <ImageGallery images={images} />
      <Footer />
    </div>
  )
}

export default Gallery
