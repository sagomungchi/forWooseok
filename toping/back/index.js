const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('Hello, server!')
})

app.get('/about', (req, res)=>{
    res.send('hello, about');
})

app.listen(8640, ()=>{
    console.log('server is running on htt[://localhost:8080');
});