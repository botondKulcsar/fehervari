import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import img1 from '../../assets/imgs/_DSC4637.jpg'
import img2 from '../../assets/imgs/_DSC4700.jpg'
import img3 from '../../assets/imgs/_DSC4739.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const CarouselComponent = () => {
  return (
    <Carousel interval={4000} showArrows={true} autoPlay showStatus={false} showThumbs={false} >
      <div>
        <img src={img1} alt='img1' />
      </div>
      <div>
        <img src={img2} alt='img2' />
      </div>
      <div>
        <img src={img3} alt='img3' />
      </div>
    </Carousel>
  )
}

export default CarouselComponent
