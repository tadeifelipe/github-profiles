import React, { Component } from 'react';
import './style.css';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            name: '',
            avatar_url: '',
            followers: '',
            public_repos: '',
            repos: [
                
            ]
        }
    }

    handleInput = (event) => {
        const { name, value} = event.target;
        this.setState({
            [name]:[value]
        })
    }

    handleSearch = () =>{
       fetch(`https://api.github.com/users/${this.state.username}`)
       .then(res => {
           return res.json();
       })
       .then(res => {
            console.log(res);

            //find repos
            fetch(`https://api.github.com/users/${this.state.username}/repos`)
            .then(res => {
                return res.json();        
            })
            .then(res => {
                for(const repo of res){
                    console.log(repo);
                }
            })
            .catch(err => console.log(err));
       })
       .catch(err => console.log(err));
    }
    
    render(){
        const { username } = this.state;
        return (
            <>
            <div className="find">
                <form className="form">
                    <input type="text" 
                           placeholder="username" 
                           className="username" 
                           name ="username" 
                           value={username}
                           onChange={this.handleInput}></input>
                    <button type="button" className="search" onClick={this.handleSearch}></button>
                </form>               
            </div>
            <div className="profile">
                <div className="info">

                </div>
                <div className="repos">

                </div>
            </div>
            </>
        )
    };
}

export default Search;