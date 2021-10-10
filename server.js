const express = require('express')
const app = express()

const PORT = process.env.port || 3000



app.use('/',(req,res) => {
  res.send("Hello World ssss")
})





app.listen(PORT, () => {
    console.log("server is running on port", PORT)
});
  
module.exports = app