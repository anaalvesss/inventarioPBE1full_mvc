const express = require("express");
const inventarioRoutes = require("./src/routes/inventarioRoutes");
const app = express();

const PORT = 3000;
app.use(express.json());
app.get("/", (req, res) => {
    res.status(200).json({
        mensagem: "API de Inventário em funcionamento!",
        rota: "/inventario"
    });
});
app.use("/inventario", inventarioRoutes);

app.use((req, res) => {
    res.status(404).json({
        erro: "Rota não encontrada."
    });
});
app.listen(PORT, () => {
    console.log(`Servidor funcionando em http://localhost:${PORT}`);
});