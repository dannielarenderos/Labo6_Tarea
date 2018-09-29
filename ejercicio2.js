
prompt("---- CONVERTIDOR ----  Metros <=> Centímetros |  Kilómetros <=> Metros | Pies <=> Metros |   Celsius <=> Fahrenheit | Kelvin <=> Fahrenheit |  Kelvin <=> Celsius.  --> Ingrese cualquier tecla" )

function MenuConver(num, uni_tengo, unidad_quiero, tipo) {


    var unidad;
    /*  Metros <=> Centímetros.
      Kilómetros <=> Metros.
      Pies <=> Metros.
      Celsius <=> Fahrenheit.
      Kelvin <=> Fahrenheit.
      Kelvin <=> Celsius. */

    switch (tipo) {
        case "l":
            if (uni_tengo == "m") {
                switch (unidad_quiero) {
                    case "cm":
                        unidad = num * 100;
                        console.log(unidad + unidad_quiero)

                        break;

                    case "km":
                        unidad = num / 1000;
                        console.log(unidad + unidad_quiero)

                        break;


                    case "pie":
                        unidad = num * 3;
                        console.log(unidad + unidad_quiero)

                        break;

                    default:

                        console.log(" Si quiere de m a ----> cm = centimentros | km = kilometros | pie = pies")
                        break;
                }
                break;
            }

            if (unidad_quiero == "m") {

                switch (uni_tengo) {
                    case "cm":
                        unidad = num / 100;
                        console.log(unidad + unidad_quiero)

                        break;

                    case "km":
                        unidad = num * 1000;
                        console.log(unidad + unidad_quiero)

                        break;


                    case "pie":
                        unidad = num / 3;
                        console.log(unidad + unidad_quiero)

                        break;

                    default:

                        console.log(" Si quiere convertir a m ----> cm = centimentros | km = kilometros | pie = pies")
                        break;
                }
            }

            else {
                console.log(" m = metros | cm = centímetros | km = kilometros | pie = pies")
            }

        case "t":
            if (uni_tengo == "k") {
                switch (unidad_quiero) {
                    case "c":
                        unidad = num-273.15;
                        console.log(unidad + unidad_quiero)
                        break;

                    case "f":
                        unidad =  ((9/5)*(num-273.15))+32;
                        console.log(unidad + unidad_quiero)

                        break;


                        default:
                        console.log(" Si quiere de Kelvin a --> c = celsius | f = fahrenheit")
                        break;
                }
            }

            if (uni_tengo == "f") {
                switch (unidad_quiero) {
                    case "c":
                        unidad = (5/9)*(num-32);
                        console.log(unidad + unidad_quiero)
                        break;

                    case "k":
                        unidad =  ((5/9)*(num-32))+273.15;
                        console.log(unidad + unidad_quiero)

                        break;


                        default:
                        console.log("Si quiere de fahrenheit a -->  c = celsius | k = kelvin")
                        break;
                }
            }



            if (uni_tengo == "c") {
                switch (unidad_quiero) {
                    case "k":
                        unidad = num + 273.15;
                        console.log(unidad + unidad_quiero)
                        break;

                    case "f":
                        unidad =  ( (9/5)*num)+32;
                        console.log(unidad + unidad_quiero)

                        break;


                        default:
                        console.log(" Si quiere de Celsius a --> k = kelvin | f = fahrenheit")
                        break;
                }
            }
            break;



        default:

        console.log( " Escriba  l = longitud | t = temperatura")
            break;
    }
}