//Aquí irian las funciones de validación en una formulación de hibrido entre POO y Programación funcional


export const validarNombres = (nombre, regex) => {
    if (nombre === null ||  nombre === undefined) return 'No otorgado'
    if (!regex.test(nombre)) throw new Error('El nombre o los apellidos deben contener solo letras y espacios')
    return nombre
}


