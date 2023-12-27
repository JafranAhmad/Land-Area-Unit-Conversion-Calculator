let jerib = document.querySelector("#jerib");
let kanal = document.querySelector("#kanal");
let marlas = document.querySelector("#marlas");
let feet = document.querySelector("#feet");
let inch = document.querySelector("#inches");

jerib.addEventListener("input", updateJerib);
kanal.addEventListener("input", updateKanal);
marlas.addEventListener("input", updateMarlas);
feet.addEventListener("input", updateFeet);
inch.addEventListener("input", updateInches);

let errorjerib =  document.querySelector("#errorjerib");
let errorkanal =  document.querySelector("#errorkanal");
let errormarla =  document.querySelector("#errormarla");
let errorfeet =  document.querySelector("#errorfeet");
let errorinches =  document.querySelector("#errorinches");

function updateJerib (e) {
    let jeribValue = jerib.value;
    if (!isNaN(jeribValue)) {

        kanal.value = (e.target.value * 4);
        marlas.value = (e.target.value * 80);
        feet.value = (e.target.value * 21760);
        inch.value = (e.target.value * 261120);
        errorjerib.textContent = "";
    }else {
       errorjerib.textContent = "Please Enter Numeric Value Only!";
    }


}

function updateKanal (e) {
    let kanalValue = kanal.value;
    if (!isNaN(kanalValue)) {
        jerib.value = (e.target.value / 4);
        marlas.value = (e.target.value * 20);
        feet.value = (e.target.value * 5440);
        inch.value = (e.target.value * 65280);
        errorkanal.textContent = "";
    }else {
       errorkanal.textContent = "Please Enter Numeric Value Only!";
    }
 
}

function updateMarlas (e) {
    let marlasValue = marlas.value;
    if (!isNaN(marlasValue)) {
        jerib.value = (e.target.value / 80);
        kanal.value = (e.target.value / 20);
        feet.value = (e.target.value * 272);
        inch.value = (e.target.value * 3264);
        errormarla.textContent = "";
    }else {
       errormarla.textContent = "Please Enter Numeric Value Only!";
    }

}

function updateFeet (e) {
    let feetValue = feet.value;
    if (!isNaN(feetValue)) {
        jerib.value = (e.target.value / 21760);
        kanal.value = (e.target.value / 5440);
        marlas.value = (e.target.value / 272);
        inch.value = (e.target.value * 12);
        errorfeet.textContent = "";
    }else {
       errorfeet.textContent = "Please Enter Numeric Value Only!";
    }

}

function updateInches (e) {
    let inchValue = inch.value;
    if (!isNaN(inchValue)) {
        jerib.value = (e.target.value / 261120);
        kanal.value = (e.target.value / 65280);
        marlas.value = (e.target.value / 3264);
        feet.value = (e.target.value / 12);
        errorinches.textContent = "";
    }else {
       errorinches.textContent = "Please Enter Numeric Value Only!";
    }
}


let inp = document.querySelectorAll("input");

let btn = document.querySelector(".btn button");
btn.addEventListener("click", resetValues);

function resetValues () {
    inp.forEach(input => {
        input.value = "";
    });

    errorjerib.textContent = "";
    errorkanal.textContent = "";
    errormarla.textContent = "";
    errorfeet.textContent = "";
    errorinches.textContent = "";
}