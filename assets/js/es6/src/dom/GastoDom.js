import { InterfaceDom } from "./InterfaceDom.js";

export class GastoDom extends InterfaceDom {
  static actualizarGastos(usuario, contenedor, region, divisa) {
    contenedor.innerHTML = "";

    if (!usuario) return;
    if (usuario.calcularSaldoTotal() < 0) return;

    usuario.gastos.forEach((gasto, index) => {
      const filaTabla = document.createElement("tr");

      filaTabla.innerHTML = `
          <td>${index + 1}</td>
          <td>${gasto.nombre}</td>
          <td>${this.formatearDivisaDom(gasto.monto, region, divisa)}</td>
          <td>
            <button data-index="${index}" class="btn-editar">Editar</button>
            <button data-index="${index}" class="btn-eliminar">Eliminar</button>
          </td>
        `;

      contenedor.appendChild(filaTabla);
    });

    document.querySelectorAll(".btn-editar").forEach((button) => {
      button.addEventListener("click", (event) => {

        console.log('me ejecuto')
        const index = event.target.dataset.index;
        this.abrirModalEditarGasto(usuario, index);
      });
    });
  }

  static actualizarTotalGastos(usuario, contenedor, region, divisa) {
    if(usuario.calcularSaldoTotal() < 0) return
    const totalGastos = this.formatearDivisaDom(usuario.calcularGastoTotal(), region, divisa)
    this.actualizarContenidoHTML(contenedor, totalGastos)
    
  }

  static abrirModalEditarGasto(usuario, index) {
    const gasto = usuario.gastos[index]
    if(!gasto) return

    const modal = document.querySelector("#modal-editar-gasto");
    const nombreInput = document.querySelector("#editar-nombre-gasto");
    const montoInput = document.querySelector('#editar-monto-gasto');

    nombreInput.value = gasto.nombre
    montoInput.value = gasto.monto

    modal.style.display = 'block'
  }
}
