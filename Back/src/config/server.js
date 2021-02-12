const express = require ('express')
const app = express ()
const cors = require ('cors')
app.use(express.json())

app.use(cors())


const port = 3800

app.listen(port,() =>{
    
    console.log("http://localhost:" + port)

})

module.exports = app