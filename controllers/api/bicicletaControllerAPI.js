var Bicicleta = require('../../models/bicicleta');

exports.Bicicleta_List = function(req,res){
    res.status(200).json({
        bicicletas: Bicicleta.allBicis
    });
}

exports.Bicicletas_create = function(req, res){
    var bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
    bici.ubicacion = [parseFloat(req.body.lat), parseFloat(req.body.lng)]; 
    Bicicleta.add(bici);
    res.json({
        Bicicleta: bici
    });
}

exports.Bicicletas_delete = function(req, res){
    Bicicleta.removeById(req.body.id);
    res.status(204).send();
}

