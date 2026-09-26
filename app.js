function sumar(a, b) {
  return a + b;
}

if (require.main === module) {
  console.log("aplicacion ejecutandose correctamente. resultado:", sumar(2, 3));
}

module.exports = sumar;