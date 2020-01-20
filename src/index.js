const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

const IndexRouter = require('./routes/index');
const PagosRouter = require('./routes/pagosRouter');
const TransferenciasRouter = require('./routes/transferenciasRoutes');
class Servidor{

    app = express();

    indexRouter = new IndexRouter();
    pagosRouter = new PagosRouter();
    transferenciasRouter = new TransferenciasRouter();

    constructor(){
        this.configurarServidor();
        this.configuarcionView();
        this.middelware();
        this.rutas();
        this.app.use(express.static(path.join(__dirname, 'public')));
    }


    configurarServidor(){
        this.app.set('port', process.env.PORT || 3000);
    }

    configuarcionView(){
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.engine('.hbs', exphbs({
            defaultLayout: 'main',
            layoutsDir: path.join(this.app.get('views'), 'layouts'),
            partialsDir:path.join(this.app.get('views'), 'partials'),
            extname: '.hbs',
    //helpers:require('./lib/handlebars')
        }));

        this.app.set('view engine', '.hbs');
    }

    middelware(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }

    rutas(){

        this.app.use('/', this.indexRouter.router);
        this.app.use('/pagos', this.pagosRouter.router);
        this.app.use('/transferencias', this.transferenciasRouter.router);
    }

    iniciarServidor(){
        this.app.listen(this.app.get('port'), ()=>{
            console.log('El servidor esta activo en el puerto', this.app.get('port'));
        });
    }
}

const server = new Servidor();
server.iniciarServidor();