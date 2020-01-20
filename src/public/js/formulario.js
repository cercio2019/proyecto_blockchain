const botntrans = document.getElementById('transferForm');

function imprimirMensaje(mensaje){
    const message = document.getElementById('mensaje-formulario');
    message.setAttribute('class', 'alert alert-danger text-center m-2');
    message.innerHTML = mensaje;            
}

botntrans.addEventListener('submit', function(e){

    let message;
    const cedula = document.getElementById('cedula').value;
    const nombre = document.getElementById('nombre').value;
    const ci_b = document.getElementById('ci_b').value;
    const nomb_b = document.getElementById('nomb_b').value;
    const nro_c = document.getElementById('nro_c').value;
    const cant_b = document.getElementById('cant_b').value;


    if(cedula === '' && nombre ==='' && ci_b==='' && nomb_b===''
    && nro_c==='' && cant_b==='') {
        message = 'Porfavor llene todo los campos para realizar la transferencia';
        imprimirMensaje(message);
        e.preventDefault();
    }
    else if(cedula === ''){
        message = 'porfavor introduzca la cedula del responsable';
        imprimirMensaje(message);
        e.preventDefault();
    }
    else if(nombre === ''){
        message ='Por favor introduzca su nombre y apellido';
        imprimirMensaje(message);
        e.preventDefault();
    }
    else if(ci_b === ''){
        message ='Por favor introduzca la cedula de la persona beneficiada ';
        imprimirMensaje(message);
        e.preventDefault();
    }
    else if(nomb_b === ''){
        message ='Por favor introduzca el nombre y apellido del beneficiado';
        imprimirMensaje(message);
        e.preventDefault();
    }
    else if(nro_c === ''){
        message ='Por favor introduzca el numero de cuenta del beneficiado';
        imprimirMensaje(message);
        e.preventDefault();
    }
    else if(cant_b === ''){
        message ='Por favor introduzca la cantidad a transferir';
        imprimirMensaje(message);
        e.preventDefault();
    }

});








