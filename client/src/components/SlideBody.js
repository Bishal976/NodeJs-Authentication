import Carousel from 'react-bootstrap/Carousel';
import logo from '../Images/Slider1.jpg';
import logo1 from '../Images/Slider2.jpeg';
function IndividualIntervalsExample() {
  const style={height:"450px",maxWidth:"60%",margin:"auto"};
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={logo1}
          alt="First slide"
          style={style}
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={logo}
          alt="Second slide"
          style={style}
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={logo}
          alt="Third slide"
          style={style}
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;