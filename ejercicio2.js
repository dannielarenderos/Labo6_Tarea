
    prompt("Metros <=> Centímetros |  Kilómetros <=> Metros | Pies <=> Metros |   Celsius <=> Fahrenheit | Kelvin <=> Fahrenheit |  Kelvin <=> Celsius.")

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

                    console.log("cm = centimentros | km = kilometros | pie = pies")
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

                    console.log("cm = centimentros | km = kilometros | pie = pies")
                        break;
                }
            }

            else {
                console.log("POR FAVOR ESCRIBIR LAS MEDIDAS CORRESPONDIENTES")
            }

        case "t":



        
            break;


        default:
            break;
    }
}