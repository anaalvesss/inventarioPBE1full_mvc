const fs = require("fs");

const path = require("path");

const arquivo =
    path.join(
        __dirname,
        "../../data/inventario.json"
    );

function lerDados() {

    const dados =
        fs.readFileSync(
            arquivo,
            "utf8"
        );


    return JSON.parse(dados);
}
function salvarDados(dados) {

    fs.writeFileSync(

        arquivo,

        JSON.stringify(
            dados,
            null,
            4
        ),

        "utf8"
    );
}
function proximoId(dados) {

    if (dados.length === 0) {

        return 1;
    }


    const maiorId =
        Math.max(
            ...dados.map(
                item => item.id
            )
        );


    return maiorId + 1;
};
exports.listar = () => {

    return lerDados();
};
exports.buscarPorId = (id) => {

    const dados =
        lerDados();


    return dados.find(
        item => item.id === id
    );
};
exports.buscarPorPatrimonio =
    (patrimonio) => {

        const dados =
            lerDados();


        return dados.find(

            item =>
                item.patrimonio
                    .toLowerCase() ===
                String(patrimonio)
                    .toLowerCase()

        );
    }; 

exports.criar = (dadosRecebidos) => {

    const dados =
        lerDados();


    const novoItem = {

        id: proximoId(dados),

        item:
            dadosRecebidos.item,

        local:
            dadosRecebidos.local,

        dataRegistro:
            dadosRecebidos.dataRegistro,

        valor:
            Number(
                dadosRecebidos.valor
            ),

        patrimonio:
            dadosRecebidos.patrimonio

    };


    dados.push(novoItem);


    salvarDados(dados);


    return novoItem;
};

exports.atualizar =
    (id, dadosRecebidos) => {

        const dados =
            lerDados();


        const indice =
            dados.findIndex(
                item =>
                    item.id === id
            );
        if (indice === -1) {

            return null;
        }
        const itemAtualizado = {

            id: id,

            item:
                dadosRecebidos.item,

            local:
                dadosRecebidos.local,

            dataRegistro:
                dadosRecebidos.dataRegistro,

            valor:
                Number(
                    dadosRecebidos.valor
                ),

            patrimonio:
                dadosRecebidos.patrimonio
        };


        dados[indice] =
            itemAtualizado;


        salvarDados(dados);


        return itemAtualizado;
    };

exports.excluir = (id) => {

    const dados =
        lerDados();


    const indice =
        dados.findIndex(
            item =>
                item.id === id
        );


    if (indice === -1) {

        return null;
    }


    const itemRemovido =
        dados.splice(
            indice,
            1
        )[0];


    salvarDados(dados);


    return itemRemovido;
};

exports.buscarPorNome =
    (nome) => {

        const dados =
            lerDados();
        return dados.filter(

            item =>
                item.item
                    .toLowerCase()
                    .includes(
                        String(nome)
                            .toLowerCase()
                    )

        );
    };

exports.filtrarPorLocal =
    (local) => {

        const dados =
            lerDados();
        return dados.filter(

            item =>
                item.local
                    .toLowerCase()
                    .includes(
                        String(local)
                            .toLowerCase()
                    )
        );
    };
exports.filtrarPorValor =
    (valor) => {
        const dados =
            lerDados();
        return dados.filter(
            item =>
                item.valor > valor
        );
    };
exports.valorTotal = () => {
    const dados =
        lerDados();
    return dados.reduce(
        (total, item) => {
            return total + item.valor;
        },
        0
    );
};