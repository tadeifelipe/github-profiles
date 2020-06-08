let dark = JSON.parse(localStorage.getItem('dark'));

const  handleTheme = () => {       
    if(dark){
        document.body.style.backgroundColor = '#24292e'
        document.querySelector('.button').style.backgroundColor = '#d1d5da';
    }
    else{
        document.body.style.backgroundColor = '#d1d5da';  
        document.querySelector('.button').style.backgroundColor = 'gray';
    }
}

const toggleTheme = () => {
    dark = !dark;
    localStorage.setItem('dark',`${dark}`); 
    handleTheme();          
}

document.getElementById('theme').addEventListener('click', toggleTheme);
handleTheme();