const express = require('express')
const app = express()

const PORT = 3000 || process.env.PORT



app.use('/',(req,res) => {
  res.send("Hello World ssss")
})





app.listen(PORT, () => {
    console.log("server is running on port", PORT)
  });