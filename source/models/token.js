'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const TokenSchema = Schema({
    token:{
        type: String,
        unique: true
    }
})

module.exports= mongoose.model('tokens',TokenSchema)