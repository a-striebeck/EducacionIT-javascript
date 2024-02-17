document.addEventListener("DOMContentLoaded", function() {

    const baseCost = 1.16;
    let propertyFM = 0;
    let locationFM = 0;
    const costoM2 = 1.16;
    const selectedProperty = document.querySelector("select#propiedad");
    const selectedLocation = document.querySelector("select#ubicacion");
    const inputM2 = document.querySelector("input#metros2");
    const button = document.querySelector("button#button");

    function selectPropertyType() {
        let propertyType;
        for (let property of propertyData) {
            propertyType += "<option>" + property.dwellingType + "</option>";
        }
        selectedProperty.innerHTML = propertyType;
    }

    function selectLocation() {
        let currentLocation = "";
        for (let location of locationData) {
            currentLocation += "<option>" + location.name + "</option>";
        }
        selectedLocation.innerHTML = currentLocation;
    }

    function getPropertyFactor() {
        if (selectedProperty.value !== '') {
            for (let property of propertyData) {
                if (property.dwellingType === selectedProperty.value) {
                    return property.pFactor;
                }
            }
        }
    }

    function getLocationFactor() {
        if (selectedLocation.value !== '') {
            for (let location of locationData) {
                if (location.name == selectedLocation.value) {
                    return location.lFactor;
                }
            }
        }
    }

    button.onclick = function () {
        if (getPropertyFactor() && getLocationFactor() && parseInt(inputM2.value) !== '') {
            let insurancePrice = getPropertyFactor() * getLocationFactor() * parseInt(inputM2.value) * baseCost;
            console.log("Resultado de la Póliza: $ " + insurancePrice);
        } else {
            console.warn("Hubo un error en los datos ingresados.");
        }
    }

    selectPropertyType();
    selectLocation();
});