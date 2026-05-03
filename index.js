const usuarios = [
  { nombre: "Juan", edad: 17 },
  { nombre: "Ana", edad: 22 },
  { nombre: "Pedro", edad: 30 }
];

let mayoresdeEdad = usuarios.filter(u=>u.edad>=18).map(u=>u.nombre.toUpperCase());
console.log(mayoresdeEdad);

const texto = "hola hola mundo mundo mundo";
function contarPalabras(texto) {
  return texto
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .reduce((acc, palabra) => {
      acc[palabra] = (acc[palabra] || 0) + 1;
      return acc;
    }, {});
}
console.log(contarPalabras(texto));