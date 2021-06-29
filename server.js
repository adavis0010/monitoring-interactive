const express = require('express');
const path = require('path');
const app = express();

app.use(express.json())

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '/public/index.html'))
    // whatever the directory is, join that path to the path in the string
})

const port = process.env.PORT || 4545;

app.listen(port, function() {
   console.log(`Server running on ${port}`)
})


//Endpoints

