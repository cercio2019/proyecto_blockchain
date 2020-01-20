const {Router}= require('express');


class IndexRouter{

    router = Router();

    constructor(){
        this.router.get('/', (req, res)=>{
            res.render('index');
        });
    }
}

module.exports = IndexRouter;