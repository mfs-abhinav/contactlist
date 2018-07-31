// importing module
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

// port no
const port = process.env.PORT || 8080;

// contact to mongodb
mongoose.connect('mongodb://abhinav:abhinav0212@ds261521.mlab.com:61521/contactlist', {
    useNewUrlParser: true
});

// on coonection
mongoose.connection.on('connected', ()=>{
    console.log('Connected to database mongo @27017');
});

// on coonection
mongoose.connection.on('error', (err)=>{
    if (err) {
        console.log('Error in database connection: ' + err);
    }
});

// adding middleware
app.use(cors());
app.use(bodyparser.json());

// static file
app.use(express.static(path.join(__dirname, 'public')));

// testing server
app.get('/', (req, res)=>{
    res.send('node server testing..');
});

app.use('/api', route);

app.listen(port, ()=>{
    console.log("Serever started at port: "+ port);
});