const express = require('express')
const app = express();
const cors = require('cors');
app.use(cors());


app.get('/names', (req,res) =>{
    res.send('amnuel')
})

app.listen(5000,()=>{
    console.log('Server is running!')
})
