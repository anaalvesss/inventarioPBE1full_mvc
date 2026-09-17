const dados = require("../dados.json")

function autoIncrement(){
    const ultimoId =  Number(dados[dados.length - 1].id)
    return ultimoId + 1;
}

const create = (req, res) =>{
    const dados = read.body
    dados.add(dados)
    res.status(201).json(dados)
}

const read = (req, res) => {
    res.json(dados)
}

module.exports = {
    create,
    read
}