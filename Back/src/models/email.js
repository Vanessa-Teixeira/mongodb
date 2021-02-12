const {Schema,model} = require('mongoose')

const EmailSchema = new Schema({

    id:{
        type: Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
   

})

    



modelo = model("email" , EmailSchema)

module.exports = modelo