const {Router} = require('express');
const IndexController = require('../controllers/indexController');

class TransferenciasRouter{
    
    indexController = new IndexController();
    router = Router();
    numTransacciones = 0;

    constructor(){

        this.router.get('/', (req, res)=>{
            res.render('tranferencias');
        });

        this.router.post('/transaccion', (req, res)=>{
            const datos = req.body;
            console.log(datos);
            this.createBlock(datos);
            res.render('transaccion', {date:datos});
        });
    }


    createBlock(datos){
        
        if(this.numTransacciones <= 3){
            this.indexController.guardarBloques(datos);
            this.numTransacciones++;
        }else{
            this.indexController.crearBloqueUsuarios();
            this.numTransacciones = 0;
        }
    }
}

module.exports = TransferenciasRouter;