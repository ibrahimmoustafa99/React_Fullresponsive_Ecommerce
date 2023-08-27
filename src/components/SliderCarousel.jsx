import Carousel from 'react-bootstrap/Carousel';
import './syles/slider.css'
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={img1} alt='' text="First slide" />
        <Carousel.Caption>
          <h3>MEN'S CLOTHING</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} alt='' text="First slide" />
        <Carousel.Caption>
          <h3>WOMEN'S CLOTHING</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} alt='' text="First slide" />
        <Carousel.Caption>
          <h3>JEWELLERY</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;