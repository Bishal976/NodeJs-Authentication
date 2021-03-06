import React from "react"
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import { useAuth0 } from "@auth0/auth0-react";

export default function App() {
    const {isLoading} = useAuth0();
    if (isLoading) return <div>Loading...</div>
    
    return ( 
        <>
        <BrowserRouter>
           <Routes>
               <Route path="/" element={<Home/>}></Route>
           </Routes>
       </BrowserRouter> 
           
        </>
  )
}
