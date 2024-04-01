const express = require('express');
const app = express();

const port = 3000;

// app.get('/', (req,res) => res.send('test'))
app.get('/messages', (req,res) => {
    const messages = [ "Hello", "hi", "its working"];

    res.send(messages);
})

app.listen(port, () => console.log('app running'))