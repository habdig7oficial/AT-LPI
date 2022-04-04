const servidor = require("./config/servidor")

let app = servidor.app

let porta = servidor.porta

app.listen(porta, function () {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})


/*Importando a Rota manualmente */

let index = require("./routes/index.js")(app)

