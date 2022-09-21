import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
class Contact extends Component {
    render(){
        return(
            <div>
                <h2>Contact me</h2>
        <p>This is my contact. Got questions?</p>
        <p style={{ marginBottom: "2rem"}}>You can email me at shubhamborkar421@gmail.com or you can click on these links below.</p>

          
        
         <FontAwesomeIcon icon={["fab","github"]} size="2x" />

            <a href="https://github.com/sgbfirst50"
            style={{
                textShadow:"0 1px 0 rgba(0,0,0,0.1)",
                margin: "0rem 2rem 0rem 0.5rem",
                textDecoration: "none",
                color:"#ced4da"
            }}

            >Github</a>        


         Contact:     <a href="tel:8296280464">8296280464</a>
   </div>
 
                 )
             }
        }
export default Contact;