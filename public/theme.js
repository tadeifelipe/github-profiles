let dark = JSON.parse(localStorage.getItem('dark'));

const  handleTheme = () => {       
    if(dark){
        document.body.style.backgroundColor = '#24292e'
        document.querySelector('.button').style.backgroundColor = '#d1d5da';
        document.getElementById('title').style.color = '#d1d5da';
        document.getElementById('username').style.color = '#d1d5da';
        document.getElementById('followers').style.color = '#d1d5da';
        document.getElementById('qtd_repos').style.color = '#d1d5da';
    }
    else{
        document.body.style.backgroundColor = '#d1d5da';  
        document.querySelector('.button').style.backgroundColor = 'gray';
        document.getElementById('title').style.color = 'black';
        document.getElementById('username').style.color = 'black';
        document.getElementById('followers').style.color = 'black';
        document.getElementById('qtd_repos').style.color = 'black';
    }
}

const toggleTheme = () => {
    dark = !dark;
    localStorage.setItem('dark',`${dark}`); 
    handleTheme();          
}

document.getElementById('theme').addEventListener('click', toggleTheme);
handleTheme();