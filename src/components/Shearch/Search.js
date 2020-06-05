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
            repos:[

            ]
        }
    }

    handleInput = (event) => {
        const {value} = event.target;
        this.setState({
            username:[value]
        })
    }

    handleSearch = () =>{
        if(this.state.username === ''){
            alert('Username não pode ser vazio.');
        }

    //    fetch(`https://api.github.com/users/${this.state.username}`)
    //    .then(res => {
    //        return res.json();
    //    })
    //    .then(res => {
    //         this.setState({
    //             name: res['name'],
    //             avatar_url: res['avatar_url'],
    //             followers: res['followers'],
    //             public_repos: res['public_repos']
    //         });         

    //         //find repos
    //         fetch(`https://api.github.com/users/${this.state.username}/repos`)
    //         .then(res => {
    //             return res.json();        
    //         })
    //         .then(res => {
    //             for (const repo of res) {
    //                 this.setState({
    //                     repos:[...this.state.repos,repo]
    //                 })
    //             }
    //             this.handleProfile();
    //         })
    //         .catch(err => console.log(err));
    //    })
    //    .catch(err => console.log(err));
    }

    handleProfile = () =>{
        document.getElementById('profile').style.visibility = 'visible';
         const ELEMENTS = {
             avatar: document.getElementById('img'),
             name: document.getElementById('name')
         }
        
         ELEMENTS.avatar.src = this.state.avatar_url;
         ELEMENTS.name.innerHTML = this.state.name;
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
            </>
        )
    };
}

export default Search;