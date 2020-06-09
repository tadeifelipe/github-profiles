const path = require('path');
const express = require('express');
const app = express();
const porta = process.env.PORT || 3000; 

const publicPath = path.join(__dirname, '..', 'public');

app.use (express.static (publicPath));

app.get('*', (req, res) => {
    res.sendfile(path.join(publicPath,'index.html'));
});

app.listen (porta, () => { 
   console.log (`Servidor ativo`); 
});
