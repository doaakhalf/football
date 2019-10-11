require('./mongoConfig');
const PORT=process.env.PORT||2070
///////////////////////////////
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

//////////////////////////////
const expressValidator = require('express-validator');
/////////////////
var path = require('path'); 
const usersRouter = require(__dirname + '/routes/users-routes');
const stadiumRouter = require(__dirname + '/routes/stadium-route');
// const postsRouter = require('./routes/posts');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
/////////////////////////////////

app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(session({secret: 'krunal', saveUninitialized: false, resave: false}));
///////////////////////

app.set('views', __dirname + '/views');
app.use(express.json());
app.set('view engine', 'ejs')
//////////////////////////////

/////route//////
app.use('/users', usersRouter);
app.use('/stadium',stadiumRouter);


app.listen(PORT, () => {
    console.log("started");
})