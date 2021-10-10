const express = require('express')
const app = express()
require('dotenv').config()




app.use('/',(req,res) => {
  res.send("Hello World sssss")
})





app.listen(process.env.PORT, () => {
    console.log("server is running on port", process.env.PORT)
});
  
module.exports = app