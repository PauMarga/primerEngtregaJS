alert ('Hola! Te damos la bienvenida a nuestro sitio')

function elegirOpcion (){
    opcion = Number (prompt('Contanos que en que podemos ayudarte: \n 1- Quiero comprar productos \n 2- Quiero finalizar la compra \n 3- Prefiero cancelar y volver en otro momento'));
}

function comprar (){
    producto = Number (prompt ('Elegí el producto que queres:\n 1- Producto 1 \n 2- Producto 2 \n 3- Producto 3'));
    if (producto === 1){
        alert ('Genial! Elegiste el producto 1 (precio 1000)');
    }
    if (producto === 2){
        alert ('Genial! Elegiste el producto 2 (precio 2000)');
    }
    if (producto === 3){
        alert ('Genial! Elegiste el producto 3 (precio 3000)');
    }
}

function elegirSegundaOpcion (){
    nuevaOpcion = Number (prompt ('Si queres terminar tu compra, ingresa 1, si queres cancelar, ingresa 2'));
    if (nuevaOpcion === 1){
        switch(producto){
            case 1:
                confirm ('Te contamos que el envío tiene un costo de 200. El precio total que debes pagar es: '+ sumar (precioProducto1,costoEnvio));
                alert ('Muchas gracias por tu compra!')
                break;
            case 2:
                confirm ('Te contamos que el envío tiene un costo de 200. El precio total que debes pagar es: '+ sumar (precioProducto2,costoEnvio));
                alert ('Muchas gracias por tu compra!')
                break;
            case 3:
                confirm ('Te contamos que el envío tiene un costo de 200. El precio total que debes pagar es: '+ sumar (precioProducto3,costoEnvio));
                alert ('Muchas gracias por tu compra!')
                break;
        }
    }else{
        alert ('Muchas gracias por su visita, esperamos verte nuevamente.');
    }
}


let opcion = 0
let producto = 0
let nuevaOpcion = 0

let precioProducto1 = 1000
let precioProducto2 = 2000
let precioProducto3 = 3000
let costoEnvio = 200

function sumar (a,b){
    return a + b;
}

elegirOpcion ();

while (opcion !== 3){
    if (opcion === 1){
    comprar();
    elegirSegundaOpcion ();
    opcion = 3;
    }
    if (opcion === 2){
    alert ('Aun no elegiste un producto');
    comprar ();
    elegirSegundaOpcion ();
    opcion = 3;
    }
}


