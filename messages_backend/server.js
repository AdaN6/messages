const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();

const port = 3000;

app.use(cors());
app.use(bodyParser.json())

const messages = [ {user:0, text: "yes"}, {user: 0, text: "test"}, {user: 0, text: "is working"}];
const users = [{userName: "A", password: "1"}];

// app.get('/', (req,res) => res.send('test'))
app.get('/messages', (req,res) => {
    // const messages = [ "yes", "test", "is working"];

    res.send(messages);
})

app.get("/messages/:id", (req, res) => {
  // console.log(req.params.id)
  res.send(messages[req.params.id]);
});

app.post('/messages', (req,res) => {
    // console.log(req.header('Authorization'));
    const userId = req.header("Authorization");
    const user = user[userId];
    // let msg = req.body
    let msg = { user: user.userName, text: req.body.message };
    console.log(msg)
    // console.log(msg);
    messages.push(msg);
    res.json(msg);
    // console.log(messages);
})

app.post("/register", (req, res) => {
    let registerData = req.body;
    let newIndex = users.push(registerData)
    registerData.id = newIndex - 1;
    console.log(users);

    res.json(registerData);
});

app.listen(port, () => console.log('app running'))