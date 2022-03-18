import { useEffect } from 'react'
import CardContainer from '../../components/CardContainer/CardContainer'
import CarouselComponent from '../../components/Carousel/CarouselComponent'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <CarouselComponent />
      <CardContainer />
    </>
  )
}

export default Home
