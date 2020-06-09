import React, { Component } from 'react';
import './style.css';
import star from '../../assets/star.png'

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            name: '',
            avatar_url: '',
            followers: '',
            public_repos: ''
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

       fetch(`https://api.github.com/users/${this.state.username}`)
       .then(res => {
           return res.json();
       })
       .then(res => {
            this.setState({
                name: res['name'],
                avatar_url: res['avatar_url'],
                followers: res['followers'],
                public_repos: res['public_repos']
            });         

            //find repos
            fetch(`https://api.github.com/users/${this.state.username}/repos`)
            .then(res => {
                return res.json();        
            })
            .then(res => {
                var repos = '';

                for (const repo of res) {                    
                    repos = [...repos,repo]
                }

                this.handleProfile();
                this.handleRepos(repos);
            })
            .catch(err => console.log(err));
       })
       .catch(err => console.log(err));
    }

    handleProfile = () =>{
        document.getElementById('profile').style.visibility = 'visible';
         const ELEMENTS = {
             avatar: document.getElementById('img'),
             name: document.getElementById('name'),
             username: document.getElementById('username'),
             followers: document.getElementById('followers'),
             repos: document.getElementById('qtd_repos')
         }
        
         ELEMENTS.avatar.src = this.state.avatar_url;
         ELEMENTS.name.innerHTML = this.state.name;
         ELEMENTS.username.innerHTML = this.state.username;
         ELEMENTS.followers.innerHTML = `${this.state.followers} followers`;     
         ELEMENTS.repos.innerHTML = `${this.state.public_repos} repos` ;               
    }

    handleRepos = repos => {
        var divs = '';
        repos.forEach(repo => {
            divs += `<div class="repo">
                        <div class="repoContent">
                            ${repo['name']}
                            <div>
                                ${repo['stargazers_count']} <img src=${star} alt="star"/>    
                            </div>                                                                         
                            <label>${repo['description']}</label>
                        </div>
                    </div>`;
        });
        document.getElementById('repos').innerHTML = divs;
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