const assert = require('assert');
const sumar = require('./app.js');

assert.strictEqual(sumar(2, 3), 5, 'la suma de 2 + 3 debe ser 5');
console.log("todas las pruebas pasaron exitosamente");