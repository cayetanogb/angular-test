import { usuarioIngresado } from "./booleanos"

describe('Pruebas de Booleanos', () => {
    it('Debe de regresar true', () => {
        const res = usuarioIngresado();
        expect(res).toBeTruthy();
    })
})