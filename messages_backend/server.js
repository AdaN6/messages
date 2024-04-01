const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();

const port = 3000;

app.use(cors());
app.use(bodyParser.json())

// app.get('/', (req,res) => res.send('test'))
app.get('/messages', (req,res) => {
    const messages = [ "yes", "test", "is working"];

    res.send(messages);
})

app.post('/messages', (req,res) => {
    console.log(req.body);

    res.json({})
})

app.listen(port, () => console.log('app running'))