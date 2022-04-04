const express = require("express")

const app = express()

const porta = 7777 || process.env.PORT


module.exports ={app,porta}

/*carregando de forma automatizada*/

const consign = require("consign")

consign().include("./routes").into(app)
