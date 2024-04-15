const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const app = express();

const port = 3000;

app.use(cors());
app.use(bodyParser.json())

const messages = [ {user: "A", text: "yes"}, {user: "A", text: "test"}, {user: 0, text: "is working"}];
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
    
    // --> simple start
    // let msg = req.body
    // messages.push(msg.message);
    // res.json(msg);

    // --> second set of getting userId from header
    // console.log(req.header('Authorization'));
    // const userId = req.header("Authorization");
    // const user = users[userId];
    // let msg = { user: user.userName, text: req.body.message };
    // messages.push(msg);
    // res.json(msg);

    // --> getting authentification payload
    const token = req.header("Authorization");
    const userId = jwt.decode(token, '123')
    const user = users[userId];
    let msg = { user: user.userName, text: req.body.message };
    messages.push(msg);
    res.json(msg);

})

app.post("/register", (req, res) => {
    let registerData = req.body;
    let newIndex = users.push(registerData)
    // --> without JWT
    // registerData.id = newIndex - 1;
    // res.json(registerData);
    // console.log(users);

    // using jwt for token
    let userId = newIndex - 1;
    // payload for first parameter - userId, secret for the second '23'
    let token = jwt.sign(userId, '123');
    res.json(token)


});

app.listen(port, () => console.log('app running'))