

export class Usuario {
    #nombre
    #apellidoP
    #apellidoM
    #rutNumero
    #rutDV
    #telefono
    #email
    #presupuesto
    #gastos

    constructor(
        nombre, 
        apellidoP, 
        apellidoM, 
        rutNumero, 
        rutDv, 
        telefono, 
        email, 
        presupuesto, 
        gastos) {
            this.#nombre = nombre
            this.#apellidoP = apellidoP
            this.#apellidoM = apellidoM
            this.#rutNumero = rutNumero
            this.#rutDV = rutDv
            this.#telefono = telefono
            this.#email = email
            this.#presupuesto = presupuesto
            this.#gastos = gastos
    }

    get nombreCompleto() {
        return `${this.#nombre} ${this.#apellidoP} ${this.#apellidoM}`;
    }
}