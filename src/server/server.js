const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const authController = require('./controllers/authController')
const taskController = require('./controllers/taskController')

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/assets', express.static(__dirname + './../../assets'))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname + './../../views/login.html'));
});

// app.get('/', (req,res)=>{
//     res.sendFile(path.join(__dirname + './../../views/index.html'));
// });

app.post('/signin', authController.checkUser, authController.attachCookie, authController.checkCookie,
    (req,res,next)=>{res.sendFile(path.join(__dirname + './../../views/index.html'))}
)

app.post('/register',authController.registerUser,
(req,res,next)=>{res.sendFile(path.join(__dirname + './../../views/login.html'))})



app.post('/updateDatabase',taskController.saveSheet, (req,res,next)=>{res.sendFile(path.join(__dirname + './../../views/index.html'))})
app.post('/createInDatabase',taskController.createSheet, (req,res,next)=>{res.sendFile(path.join(__dirname + './../../views/index.html'))})


app.listen(3333, ()=>{
    console.log('Listening on 3333');
});