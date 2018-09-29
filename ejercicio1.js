var arregloProd = []
var Ventas = []
var Stock_Cero = []
var acum = 0
var cont = 0

function menu() {
    var num = -1;
    var n = true;
    while (n) {
        num = prompt("1. Agregar producto | 2.Modificar StocK | 3.Registrar venta y reducir stock| 4.Mostrar promedio de ventas realizadas|  5.Mostrar productos con stock 0 | 6. Mostrar productos | 7.Salir del sistema.");

        switch (parseInt(num)) {
            case 1:
                codigos = prompt("INGRESE EL CÓDIGO DEL NUEVO PRODUCTO");
                descripcion = prompt("INGRESE LA DESCRIPCION");
                tipo = prompt("INGRESE TIPO");
                precio = prompt("INGRESE PRECIO");
                stocks = prompt("INGRESE STOCKS");

                productoNuevo = {
                    codigos, descripcion, tipo, precio, stocks
                };
                console.log(productoNuevo);

                arregloProd.push(productoNuevo);

                break;
            case 2:

                var buscar = prompt("INGRESE EL CÓDIGO DEL PRODUCTO A MODIFICAR EL STOCK");
                arregloProd.forEach(element => {

                    if (buscar == element.codigos) {
                        var nuevo = prompt("INGRESE EL NUEVO STOCK DEL PRODUCTO");
                        element.stocks = nuevo;
                    }




                });
                break;


            case 3:

                var buscar = prompt("INGRESE EL CÓDIGO DEL PRODUCTO A VENDER");
                cont = cont + 1;
                arregloProd.forEach(element => {

                    if (buscar == element.codigos) {
                        var ventas = prompt("INGRESE EL NÚMERO DE VENTAS DEL PRODUCTO");
                        var tot = parseInt(element.stocks) - ventas;
                        acum = acum + element.precio * ventas;

                        if (tot < 0) {
                            prompt("PRODUCTO INSUFICIENTE")
                        }
                        else {
                            element.stocks = tot;
                        }
                    }

                });


                /* console.log("CONT " + cont + " ACUM " + acum) */
                break;


            case 4:


                var prom = acum / cont;
                console.log("EL PROMEDIO DE VENTAS ES " + prom)
                break;

            case 5:


                arregloProd.forEach(element => {

                    if (parseInt(element.stocks) == 0) {

                        Stock_Cero.push(element);
                    }

                });


                if (Stock_Cero.length == 0) {
                    console.log("NO HAY PRODUCTOS CON STOCK 0");
                }
                else {
                    console.log(Stock_Cero);
                }

                break;

            case 6:

                console.log(arregloProd);

                break;

            case 7:


                n = false;
                break;
        }
    }

}
