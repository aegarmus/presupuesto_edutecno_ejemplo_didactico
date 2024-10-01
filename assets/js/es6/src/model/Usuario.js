import { Validacion } from './Validacion.js'
import {
    REGEX_NOMBRES,
    REGEX_RUT,
    REGEX_TELEFONO
} from '../util/constantes.js'



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
            this.#nombre = Validacion.nombre(nombre, REGEX_NOMBRES)
            this.#apellidoP = Validacion.nombre(apellidoP, REGEX_NOMBRES)
            this.#apellidoM = Validacion.nombre(apellidoM, REGEX_NOMBRES)
            this.#rutNumero = Validacion.rut(rutNumero, REGEX_RUT)
            this.#rutDV = rutDv
            this.#telefono = Validacion.telefono(telefono, REGEX_TELEFONO)
            this.#email = email
            this.#presupuesto = presupuesto
            this.#gastos = gastos
    }

    get nombreCompleto() {
        return `${this.#nombre} ${this.#apellidoP} ${this.#apellidoM}`;
    }


    validarNombres() {

    }
}