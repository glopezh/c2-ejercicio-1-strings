// Creando función que transforme la primera letra en minuscula
let palabra = "hola mundo";

function PrimeroMayuscula(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(`La primera letra de '${palabra}' en mayuscula es: '${PrimeroMayuscula(palabra)}'`);
