function sumar(a, b) {
    return a + b;
}

function dividir(a, b) {
    if (b == 0) throw new Error('No se puede dividir por cero');
    return a/b;
}

function crearUsuario(nombre, edad) {
    return {nombre, edad, activo: true};
}

module.exports = { sumar, dividir, crearUsuario };
