const baseCost = 1.16;
let M2;
let mf = 1.07;
let insurancePrice


function calculateInsurance() {

    prompt(M2);
    insurancePrice = baseCost * M2 * mf;
    alert("$"+ insurancePrice);
    
}

