const express = require("express")

const rotaInicial = (req, res) => {
    res.json("Back-end respondendo")
}

const app = express()
app.use(express.json())
const porta = 3000

app.get('/', rotaInicial)

app.listen(porta, () => {
    console.log(`Servidor respondendo em: http://localhost:${porta}`)
})