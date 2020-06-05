import React, {Component} from 'react';
import './style.css';
import star from '../../assets/star.png'

class Perfil extends Component{
    render(){
        return(
            <div id="user" className="user">
                <div id="profile" className="profile">              
                    <img id = "img" src="https://avatars2.githubusercontent.com/u/48634267?v=4" alt="Avatar of user"/>
                    <p id = "name" className="name">Felipe Tadei</p>              
                </div>
                <div id="repos" className="repos">
                    <div class="repo">
                        <div class="repoContent">
                            <a >Teste repo</a>                                                  
                            <img src={star} alt="star"/>
                            <label>Descricao teste para rep</label>
                        </div>
                    </div>
                    <div  class="repo"></div>
                    <div  class="repo"></div>
                    <div  class="repo"></div>
                    <div  class="repo"></div>
                    <div  class="repo"></div>
                    <div  class="repo"></div>
                    <div  class="repo"></div>
                    <div  class="repo"></div>
                    <div  class="repo"></div>
                </div>
            </div>
            
        );
    }
}

export default Perfil;