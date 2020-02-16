import React from "react";
import {Route,Link,HashRouter } from "react-router-dom";
import Home from "./Homep";
import About from "./Aboutp";
import Worke from "./Workep";
import Contact from "./Contactp";




let Main=()=>{
    return(
        <HashRouter>
        <div className="main">
     <h1> AL Programmer</h1>
         <ul  className="header">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Worke">Worke</Link></li>

        <li><Link to="Contact">Contact</Link></li>
         </ul>
        <div className="content">
       <Route exact path="/" component={Home}/>
       <Route path="/About" component={About}/>
       <Route  path="/Worke" component={Worke}/>
       <Route path="/Contact" component={Contact}/>
        </div>
        </div>
        </HashRouter>
    )
}
export default Main;