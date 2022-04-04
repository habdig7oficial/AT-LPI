const express = require("express")

const app = express()

const porta = 7777 || process.env.PORT


module.exports ={app,porta}
