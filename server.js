const express = require('express');
const Rollbar = require('rollbar');
const path = require('path');
const app = express();

const rollbar = new Rollbar({
    accessToken: 'f3c8166fe8624cb3aef294fca722ac0f',
    captureUncaught: true,
    captureUnhandledRejections: true,
})

app.use(express.json())

app.get('/', function(req,res){
    rollbar.log('Hello world!')
    res.sendFile(path.join(__dirname, '/public/index.html'))
    // whatever the directory is, join that path to the path in the string
})

const port = process.env.PORT || 4545;

app.listen(port, function() {
   console.log(`Server running on ${port}`)
})


//Endpoints

