const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.port || 3500;

// app.use(express.static(path.join(__dirname, 'src/')));
app.use(express.static(__dirname));


app.get('/api/myRoute', (req, res) =>{
    res.send({'hello': 'World'});
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(PORT, ()=> {
    console.log('Running on port ' + PORT);
});