import React, { Component } from 'react';
import './style.css';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            avatar_url: '',
            followers: '',
            public_repos: '',
            repos: [
                
            ]
        }
    }
    
    render(){
        return (
            <div className="profile">
                <div className="info">

                </div>
                <div className="repos">

                </div>
            </div>
        )
    };
}

export default Search;