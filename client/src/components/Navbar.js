import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './css/Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import { useAuth0 } from "@auth0/auth0-react";
import Signup from './Signup';
import Signout from './Signout';

function NavScrollExample() {
  
  const {user, isAuthenticated} = useAuth0();
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
          {/* <Nav.Link className="ml-auto" href="#action2"><Button variant="primary">CART</Button>{' '}</Nav.Link> */}
          {isAuthenticated ? (<Signout/>) : (<Signup />)}
        </Navbar.Collapse>
      
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

{/* <img className="profile" src={user.picture} alt="image not available" /> */}