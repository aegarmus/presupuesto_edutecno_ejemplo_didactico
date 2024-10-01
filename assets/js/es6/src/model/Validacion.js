export class Validacion {
    static nombre(nombre, regex) {
        if (nombre === null || nombre === undefined) return "No otorgado";
        if (!regex.test(nombre))
          throw new Error(
            "El nombre o los apellidos deben contener solo letras y espacios"
          );
        return nombre;
    }

    static telefono(telefono, regex) {
        if(!regex.test(telefono)) throw new Error('El número de telefono no es válido')
        return telefono
    } 

    static rut(rut, regex) {
        const rutNormalizado = rut.trim()
        if(!regex.test(rutNormalizado)) throw new Error('El número del rut es invalido. Ingresar número sin puntos')
        return rutNormalizado
    }



    static monto(monto) {
      const montoNormalizado = Number(monto)
      if(isNaN(montoNormalizado) || montoNormalizado < 0) {
        throw new Error('El monto debe ser un número mayor que 0')
      }

      return montoNormalizado
    }

    static gasto(gasto) {
      if(!(gasto instanceof Gasto)) throw new Error('El gasto debe ser una instancia de Gasto')
      return gasto
    }
    
}