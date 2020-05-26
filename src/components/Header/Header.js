import React from 'react';
import './style.css';
import logo from '../../assets/github.svg';

const Header = () =>{  
    return(
        <div className="container">        
            <div>              
                <img src={logo} alt={'Logo'} style={{height: '40px', color:'white'}}/> 
            <label> Github Profiles</label>     
            </div>
           
            <div>
                <button className="button"></button>
            </div>
        </div>
    );
}

export default Header;
