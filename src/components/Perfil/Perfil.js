import React, {Component} from 'react';
import './style.css';
import git from '../../assets/github-image.png';
import followers from '../../assets/friend.png';
import repos from '../../assets/agenda.png';

class Perfil extends Component{
    render(){
        return(
            <div id="user" className="user">
                <div id="profile" className="profile">              
                    <img id = "img" src="" alt="Avatar of user"/>
                    <p id = "name" className="name">Felipe Tadei</p>
                    <div className="info">
                        <div>
                            <img src={git} alt={'gituser'}/>
                            <label id="username"></label> 
                        </div>
                        <div>
                            <img src={followers} alt={'followers'}/>
                            <label id="followers" ></label>     
                        </div>
                        <div>
                            <img src={repos} alt={'repos'}/>
                            <label id="qtd_repos"></label> 
                        </div>
                    </div>              
                </div>
                <div id="repos" className="repos">                   
                </div>
            </div>
            
        );
    }
}

export default Perfil;