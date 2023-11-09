var express = require('express')
var router = express.Router();
var bicicletaController =require('../../controllers/api/bicicletaControllerAPI');

router.get('/', bicicletaController.Bicicleta_List);
router.post('/create', bicicletaController.Bicicletas_create);
router.delete('/delete', bicicletaController.Bicicletas_delete);

module.exports = router