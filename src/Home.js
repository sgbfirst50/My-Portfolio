import React, {Component} from "react";
import "./Home.css"
import Typical from 'react-typical'

class Home extends Component {
    render(){
        return(
            <div className="home"> 
                   
                <p><h2>I'm Shubham Borkar</h2> {' '}
                    
                   <Typical
                      loop={Infinity}
                      Wrapper="b"
                      steps={[
                         'Programmer',
                         1000,
                         'Designer',
                         1000,
                         'Designer',
                         1000,
                        ]}
                   />
                
                </p>
                </div>
        )
    }
}
export default Home;