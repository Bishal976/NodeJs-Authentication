import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../Images/Slider1.jpg';
import './css/Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
// import Image from 'react-bootstrap/Image'
function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">RPH Food Stall</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
        <Nav.Link href="#contact">Contact</Nav.Link>
        <Nav.Link href="#action2">My Orders</Nav.Link></Nav>
        <Nav.Link className="ml-auto" href="#action2"><Button variant="primary">CART</Button>{' '}</Nav.Link>
        {/* //shows previous placed orders along with the current one! */}
        <Nav.Link className="ml-auto" href="#action2"><img className="profile" src={logo}/></Nav.Link> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;