const { sumar, dividir, crearUsuario } = require('../src/calculadora');

describe ('Pruebas de la calculadora y usuarios', () => {
    test('sumar 2 + 3 debe devolver 5', () => {
        expect(sumar(2 , 3)).toBe(5);
    });


    test('crear usuario devuelve el objeto esperado', () => {
        const usuario = crearUsuario('Daniel', 27);
        expect(usuario).toEqual({
            nombre: 'Daniel',
            edad: 27,
            activo: true,
        });
    });

    test('dividir por cero lanza un error', () => {
        expect(() => dividir(10, 0)).toThrow('No se puede dividir por cero');
    });
});