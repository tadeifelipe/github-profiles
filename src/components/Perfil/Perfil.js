import React, {Component} from 'react';
import './style.css';


class Perfil extends Component{
    render(){
        return(
            <div id="user" className="user">
                <div id="profile" className="profile">              
                    <img id = "img" src="" alt="Avatar of user"/>
                    <p id = "name" className="name"></p>              
                </div>
                <div id="repos" className="repos">                   
                </div>
            </div>
            
        );
    }
}

export default Perfil;