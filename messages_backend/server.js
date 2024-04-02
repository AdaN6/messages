const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();

const port = 3000;

app.use(cors());
app.use(bodyParser.json())

const messages = [ "yes", "test", "is working"];

// app.get('/', (req,res) => res.send('test'))
app.get('/messages', (req,res) => {
    // const messages = [ "yes", "test", "is working"];

    res.send(messages);
})

app.post('/messages', (req,res) => {
    let msg = req.body
    console.log(msg);
    messages.push(msg.message);
    res.json(msg);
    console.log(messages);
})

app.listen(port, () => console.log('app running'))