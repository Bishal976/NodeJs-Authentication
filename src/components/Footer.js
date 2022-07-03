import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';
import './css/Footer.css';



function footer() {
  return (
    <Container id="container">
      <Row>
            <Col id="contact">
                <div className="footer-image">
                    <img src="https://webstockreview.net/images/clipart-restaurant-restaurant-logo-2.png" height="150px" width="150px"/>
                </div>
            </Col>
              <Col>
                  <div className="footer-text">
                      <h2>About Us</h2> 
                  </div>
                  <Nav.Item>
                        <Nav.Link href="/home">Stories</Nav.Link>
                        <Nav.Link href="/home">Clients</Nav.Link>
                        <Nav.Link href="/home">Testimonials</Nav.Link>
                    </Nav.Item>
              </Col>
              <Col>
                  <div className="footer-text">
                      <h2>Services</h2> 
                  </div>
                  <div>
                      <p>Delivery</p>
                      <p>Pickup</p>
                        <p>Food booking</p>
                  </div>
              </Col>
              <Col>
                  <div className="footer-text">
                      <h2>Contact Us</h2> 
                      <p>Pradeep kumar</p>
                      <p>+91 8948392938</p>
                      <p>Pradeep@gmail.com</p>
                  </div>
              </Col>
              <Col>
                  <div className="footer-text">
                      <h2>Social</h2> 
                  </div>
                  <div>
                      <Nav.Item>
                        <Nav.Link href="/home">Instagram</Nav.Link>
                        <Nav.Link href="/home">Facebook</Nav.Link>
                        <Nav.Link href="/home">Twitter</Nav.Link>
                    </Nav.Item>
                  </div>
              </Col>
        
          </Row>
          <Row>
              <Col >
                  <Stack className="col-md-3 mx-auto">
                      <p>&copy; 2022 RPH HOSTEL Room 211</p>
                </Stack>
              </Col>
          </Row>
    </Container>
  );
}

export default footer;