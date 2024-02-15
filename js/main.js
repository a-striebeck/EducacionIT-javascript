const baseCost = 1.16;
let M2 = prompt("Ingrese los M2");
let fm = 0;
let insurancePrice;
let dwellingType = prompt("Selecciona la vivienda a cotizar: \n" + "('Casa', 'P.H.', 'Dto. Edificio')");

function calculateInsurance() {

    
    switch(dwellingType) {
        case "Casa":
            fm = 1.009
            break
        case "P.H.":
            fm = 1.005
            break
        case "Dto. Edificio":
            fm = 1.002
            break
        default:
            console.error("El tipo elegido no esta contemplado");
    }
    
    if (fm > 1.000 && parseInt(M2)) {
        insurancePrice = fm * M2 * baseCost;
        console.log("Resultado de la Póliza: $ " + insurancePrice);
    } else {
        console.warn("Hubo un error en los datos ingresados.");
    }
    
}

calculateInsurance();

