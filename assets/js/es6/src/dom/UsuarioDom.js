class UsuarioDom extends InterfaceDom {
  static actualizarUsuarioDom(usuarioSelecionado, usuarios) {
    usuarioSelecionado.innerHTML = "";

    usuarios.forEach((usuario, index) => {
      const optionSelect = document.createElement("option");
      optionSelect.value = index;
      optionSelect.textContent = usuario.nombreCompleto;

      usuarioSelecionado.appendChild(optionSelect);
    });
  }

  static actualizarPresupuesto(usuario, contenedor, region, divisa) {
    const montoPresupuesto = this.formatearDivisaDom(
      usuario.presupuesto,
      region,
      divisa
    );
    this.actualizarContenidoHTML(contenedor, montoPresupuesto);
  }
}
