'use strict'
const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')

function createToken(account){
    const payload= {
        sub: account._id,
        iat: moment().unix(),
        exp: moment().add(14,'days').unix()
    }

   return jwt.encode(payload,config.SECRET_TOKEN)
}

function decodeToken(Token){
    const decoded = new Promise((resolve,reject)=>{
        try{
            const payload = jwt.decode(Token,config.SECRET_TOKEN)
            if(payload.exp<=moment().unix()){
                reject({
                    status:401,
                    message: 'el token a expirado'
                })
            }
            resolve(payload)
            
        }catch(err){
            reject({
                status:500,
                message:'Token invalido'
            })
        }
    })

    return decoded
}

module.exports={
    createToken,
    decodeToken
}