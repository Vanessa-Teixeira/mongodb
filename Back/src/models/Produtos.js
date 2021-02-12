const {Schema,model} = require('mongoose')

const ProdutoSchema = new Schema({

    id:{
        type: Number,
        required:true
    },
    categoria:{
        type:String,
        required:true
    },
    descricao:{
        type:String,
        required:true
    },
    preco:{
        type:Number,
        required:true
    },
    precofinal:{
        type:Number,
        required:true
    },
    imagem:{
        type:String,
        required:true
    }

})

    



modelo = model("produto" , ProdutoSchema)

module.exports = modelo