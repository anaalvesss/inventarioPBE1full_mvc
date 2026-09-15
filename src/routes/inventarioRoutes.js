const express = require("express");

const controller = require("../controllers/inventarioController");

const router = express.Router();

router.post("/", controller.criarItem);
router.get("/", controller.listarItens);
router.get("/:id", controller.buscarPorId);
router.put("/:id", controller.atualizarItem);
router.delete("/:id", controller.excluirItem);
router.get("/buscar/nome", controller.buscarPorNome);

router.get("/filtrar/local", controller.filtrarPorLocal);

router.get("/filtrar/valor", controller.filtrarPorValor);

router.get(
    "/patrimonio/:patrimonio",
    controller.verificarPatrimonio
);
router.get(
    "/total/valor",
    controller.valorTotal
);
module.exports = router;