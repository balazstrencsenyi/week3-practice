console.log ("loaded");
let carBrand = "Opel";
console.log ("car brand:",carBrand);

carBrand = "BMW";
console.log (carBrand);

let doorNumber = 5;

let isDiesel = true;

let fuel = null;


let firstNames = [ "dorka" , "márió" , "bence", "edit"];
console.log(firstNames.length);
console.log (firstNames[2]);
console.log(firstNames[firstNames.length-1]);

firstNames[1] = "Ivett";
console.log(firstNames);

firstNames.push("Márió");
console.log(firstNames);

function myFirstFunction (firstname, lastname) {
  console.log("My first function");
  return firstname+lastname;
}

console.log(myFirstFunction("Márk", "AG"));