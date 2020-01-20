const formPagos = document.getElementById('form-pagos');

function mensajePago(mensaje){
    const message = document.getElementById('mensajes-pagos');
    message.setAttribute('class', 'alert alert-danger text-center m-2');
    message.innerHTML = mensaje;            
}


formPagos.addEventListener('submit', function(e){
    let mensaje;
    const empresa = document.getElementById('empresa').value,
        documento = document.getElementById('documento').value,
        cliente = document.getElementById('nombre_cliente').value,
        cuenta = document.getElementById('cuenta').value,
        pago = document.getElementById('cantidad_pagar').value;

    if(empresa==='' && documento==='' && cliente==='' && cuenta==='' && pago===''){
        mensaje= 'Por favor llenar todo los campos para realizar el pago correspondiente';
        mensajePago(mensaje);
        e.preventDefault();
    }
    else if(empresa===''){
        mensaje = 'Por favor seleccione el servicio que desea pagar';
        mensajePago(mensaje);
        e.preventDefault();
    }
    else if(documento===''){
        mensaje = 'Por favor introduzca el nro de cliente o documento de identificacion';
        mensajePago(mensaje);
        e.preventDefault();
    }
    else if(cliente===''){
        mensaje = 'Por favor introduzca su nombre completo';
        mensajePago(mensaje);
        e.preventDefault();
    }
    else if(cuenta===''){
        mensaje = 'Por favor introduzca su numero de cuenta para realizar le pago';
        mensajePago(mensaje);
        e.preventDefault();
    }
    else if(pago===''){
        mensaje = 'Por favor indique la cantidad de dinero con la se realizara el pago correspondiente';
        mensajePago(mensaje);
        e.preventDefault();
    }

});