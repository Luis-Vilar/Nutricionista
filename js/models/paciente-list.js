export class PacienteList {
  // #pacientes;

  // constructor() {
  //     this.#pacientes = [];
  // }
  // mismo que lo que esta arriba
  #pacientes = [];

  adicionar(paciente) {
    this.#pacientes.push(paciente);
  }
  get pacientes() {
    // para proteger el array original return una copia (programacion defenciva)
    let novaLista = [].concat(this.#pacientes);
    return  novaLista;
  }


  remove(paciente) {
    for (let contador = 0; contador < this.#pacientes.length; contador++) {
      const pacienteDaLista = this.#pacientes[contador];
      if (pacienteDaLista.equals(paciente)) {
        this.#pacientes.splice(contador, 1);
      }
    }
  }

}
