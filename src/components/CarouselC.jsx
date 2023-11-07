import Carousel from 'react-bootstrap/Carousel';
import './CarouselC.css'

function CarouselC() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <img src='/img1.jpg' alt="" />
        <Carousel.Caption>
          <h3>Bolas</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/img2.webp' alt="" />
        <Carousel.Caption>
          <h3>Esportes</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/img3.jpeg' alt="" />
        <Carousel.Caption>
          <h3>Tenis</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselC;