const app = require ('./src/config/server')
  
const express = require('express');
const cors = require('cors');
const connection = require ('./src/config/connection')
const Produtos = require('./src/models/Produtos')
const Email = require ('./src/models/email')



//select

app.get ("/produtos",async(req,res) => {
    
    let prodResult =await Produtos.find()

    res.json(prodResult)
    console.log (prodResult)
})

//insert

//app.post ("/email " ,async(req,res) => {
    //const {email} = req.body
    //let loginResult= await Email.create ()
    //req.json(loginResult)
    


    app.get ("/email",async(req,res) => {
    
        let Result =await Email.find()
        res.json(Result)
})



        
    