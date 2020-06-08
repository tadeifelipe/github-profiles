import React, { Component } from 'react';
import './style.css';
import logo from '../../assets/github.svg';

class Header extends Component {  
    render(){              
        return (
            <div className="container">        
                <div>              
                    <img src={logo} alt={'Logo'} style={{height: '40px', color:'white'}}/> 
                <label> Github Profiles</label>     
                </div>
            
                <div>
                    <button id="theme" className="button"></button>
                </div>
            </div>     
        )
    };
}

export default Header;
