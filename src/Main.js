import React, {Component} from "react";
import {Route,NavLink,Link,HashRouter} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import {library} from "@fortawesome/fontawesome-svg-core";

import{
    fab,
    faTwitterSquare,
    faFacebook,
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

library.add(fab, faTwitterSquare,
    faFacebook,
    faLinkedin,
    faGithub);


class Main extends Component{
    render(){
        return(
            <HashRouter>
            <div>

              
              

                <ul className="header">
                    <li><Link className="logo" to="/">SB</Link></li>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>


                
                <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />


                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;