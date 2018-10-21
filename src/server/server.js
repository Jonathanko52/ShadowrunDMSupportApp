const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const port = process.env.PORT || 5000;
const authController = require('./controllers/authController')
const taskController = require('./controllers/taskController')

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/assets', express.static(__dirname + './../../assets'))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname + './../../views/login.html'));
});

//checks if user is present in elepaht, attaches id
app.post('/signin', 
    authController.checkUser,
    authController.attachCookie,  
    (req,res,next)=>{res.sendFile(path.join(__dirname + './../../views/index.html'))}
)

//adds new user to elephantSQL,  attaches cookie, creates a mlab table for them, and returns to login page
app.post('/register',
    authController.registerUser,
    authController.attachCookieOnRegister,
    taskController.createSheet,
    (req,res,next)=>{res.sendFile(path.join(__dirname + './../../views/login.html'))})
    // (req,res,next)=>{res.json()}
    


//saves current state to mLab
app.post('/updateDatabase',
    taskController.saveSheet, 
    (req,res,next)=>{
        console.log("PAST SAVE SHEET")
        res.end()
})

app.post('/createInDatabase',taskController.createSheet, (req,res,next)=>{
    console.log("PAST CREATE SHEET")
    res.end()
})

app.get('/retrieveFromDatabase',taskController.retrieveSheet,(req,res,next)=>{
    console.log("PASSED RETRIEVE SHEET")
    res.end()
})

app.listen(port, ()=>{
    console.log(`Listening on ${port}`);
});