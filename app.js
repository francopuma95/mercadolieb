const express = require ('express');
 const path = require('path');

const app = express();


const publicpath = path.resolve(__dirname,'./public');

app.use(express.static(publicpath));
  
app.listen(process.env.PORT || 3000, ()=> { 
console.log("Levantando un servidor con 3000");
 }) 


 app.get('/',(req,res ) => {
    res.sendFile(path.resolve(__dirname,'./views/index.html'));
 } )