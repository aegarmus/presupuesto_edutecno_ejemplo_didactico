

export class Gasto {
    #nombre
    #monto

    constructor(nombre, monto) {
        this.#nombre = validarNombres(nombre, regex)
        this.#monto = monto
    }

    get nombre() {
        return this.#nombre
    }

    get monto() {
        return this.#monto
    }

    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre
    }

    set monto(nuevoMonto) {
        this.#monto = nuevoMonto
    }


    getAllProperties() {
        return {
            nombre: this.#nombre,
            monto: this.#monto
        }
    }
}