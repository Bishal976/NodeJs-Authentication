import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Nav } from 'react-bootstrap';

export default function Signout() {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <Nav.Link className="ml-auto"><Button onClick={() => logout()} variant="danger" >Log Out</Button>{' '}</Nav.Link>
    )
  );
}