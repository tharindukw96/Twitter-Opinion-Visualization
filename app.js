const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');

// set the view engine to ejs
app.set('view engine', 'ejs');

//favicon ico
app.use('/favicon.ico', express.static('images/favicon.ico'));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/',function(req,res){
    res.render('home');
})

app.use((req,res,next)=>{
    const errror= new Error('Not Found!');
    error.status = 404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error: {
            messge : error.mesage
        }
    })
});
module.exports = app;