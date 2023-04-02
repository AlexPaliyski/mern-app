const express = require('express')
const app = express()
const port = 3000
const { seed_football_matches, register, doesUserExists, getAllMatches} = require('./database/setup-db');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const {json} = require("express");
const cors = require('cors');

const dayLength = 1000 * 24 * 60 *60;
app.use(cors());
app.use(sessions({
    secret: generateSessionId(10),
    saveUninitialized:true,
    cookie: { maxAge: dayLength },
    resave: false
}));

// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serving public file
app.use(express.static(__dirname));

app.use(cookieParser());

const isUserLoggedIn = (req, res, next) => {
    if (req.session.user) {
        next()
    }
    next()
    // throw Error('You are not logged in!')
}

// Roots
app.get('/matches', isUserLoggedIn, (req, res) => {
    res.send(JSON.stringify(getAllMatches()))
})
app.post('/login', (req, res) => {
    console.log(req.body.username);
    console.log(req.body.password);
    if (doesUserExists(req.body.username, req.body.password)) {
        req.session.user = req.body.username;
        res.redirect(req.session.user);
    }
    else {
        throw Error('User with such username and password does not exists');
    }
})
app.post('/', (req, res) => {
    console.log('aaaa')
    res.send(req.body)
});
app.post('/register', (req, res) => {
    console.log(req.body.username);
    console.log(req.body.password);
    try {
        register(req.body.username, req.body.password);
        req.session.user = req.body.username;
        res.send(req.body.username);
    }
    catch(error) {
        res.send(error.message);
    }
});
app.post('/logout', (req, res) => {
    req.session.user = '';
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

console.log("Passed from here");
// seed_football_matches();

function generateSessionId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
/*console.log('aaaaaaaaaaaaaaa');
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify( {username:'test2', password:'111111'})
}
fetch('http://localhost:3000/login', requestOptions)
    //.then(response => console.log(response))
.catch(ex => console.log(ex));*/
