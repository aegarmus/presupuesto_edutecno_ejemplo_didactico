import { Usuario } from './src/model/Usuario.js'
import { Gasto } from './src/model/Gastos.js'

const usuario = new Usuario(
    'Dino', 
    'Alvarez', 
    'Lopez', 
    '1236547', 
    '5', 
    '+56998906683', 
    'mail@erxample.com', 
    150000, 
    []
)

const gasto = new Gasto('sopaipa', 500)

console.log(gasto.getAllProperties())

console.log(usuario.nombreCompleto)