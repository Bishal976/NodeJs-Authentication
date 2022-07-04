import React from "react"
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

export default function Signup() {
    const {loginWithRedirect, isAuthenticated} = useAuth0();
    return ( 
        !isAuthenticated && (
            <>
                <Nav.Link className="ml-auto"><Button onClick={()=> loginWithRedirect()} variant="success" >Log In</Button>{' '}</Nav.Link>
            </>
            )
  )
}

