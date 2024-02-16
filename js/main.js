const baseCost = 1.16;
let insurancePrice = 0;
let M2 = prompt("Ingrese los M2");
let tDwellingType = prompt("Selecciona la vivienda a cotizar: \n ('Casa', 'P.H.', 'Dto. Edificio')");
let tLocation = prompt("Selecciona la ubicación de la vivienda: \n ('CABA', 'Tandil', 'Costa Atlántica')")
let propertyFM = 0;
let locationFM = 0;

if (tDwellingType != '') {
    for (const dwellingType of propertyData){
        if (propertyData.dwellingType === tDwellingType) {
            propertyFM = pFactor;
            break;
        }
    }
}

if (tLocation != '') {
    for (const location of locationData) {
        if (locationData.location === tLocation) {
            locationFM = lFactor;
            break;
        }
    }  
}

if (propertyFM && locationFM && parseInt(M2)) {
    insurancePrice = propertyFM * locationFM * M2 * baseCost;
    console.log("Resultado de la Póliza: $ " + insurancePrice);
} else {
    console.warn("Hubo un error en los datos ingresados.");
}
