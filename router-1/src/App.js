import React from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Navbar from "./Components/Navbar/index";
import {Home} from "./Components/Home";
import {Contact} from "./Components/Contact";
import {About} from "./Components/About/About";
import {Services} from "./Components/Services";
import {Login} from "./Components/Login";

function App() {
  return (
   <BrowserRouter>
      <Navbar>
         <Link style = {{marginLeft: "80px", marginTop: "20px", color: "white", textDecoration: "none"}} to = "/">Home</Link>
          <Link style = {{marginLeft: "80px", marginTop: "20px", color: "white", textDecoration: "none"}}  to = "/about-us">About</Link>
          <Link style = {{marginLeft: "80px", marginTop: "20px", color: "white", textDecoration: "none"}}  to = "/contact">Contact</Link>

          <Link style = {{marginLeft: "80px", marginTop: "20px", color: "white", textDecoration: "none"}}  to = "/services">Services</Link>
          <Link style = {{marginLeft: "80px", marginTop: "20px", color: "white", textDecoration: "none"}}  to = "/login">Login</Link>
      </Navbar>
      <Switch>
        <Route exact path = "/">
          {/* <Home></Home> */}
          Home page
        </Route>
        <Route path = "/contact">
          {/* <Contact /> */}
          Contact Page
        </Route>
        <Route path = "/about-us">
          {/* <About /> */}
          About Page
        </Route>
        <Route path = "/services">
          {/* <Services /> */}
          Services Page
        </Route>
        <Route path = "/login">
          {/* <Login /> */}
          Login Page
        </Route>
      </Switch>
   </BrowserRouter>
  )
}

export default App