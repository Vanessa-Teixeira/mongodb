
const mongoose = require ('mongoose');


function connection () {
    mongoose.connect ('mongodb://localhost:27017/fullstackeletro',
    {useNewUrlParser:true , useUnifiedTopology:true})
    
    .then (() => {
    
    console.log ("MongoDb conectado com sucesso")

    }) 
    .catch ((error) =>{
        console.log(error)
    })

}
module.exports = connection()
    