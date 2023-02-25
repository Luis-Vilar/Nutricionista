import { Paciente } from "../models/paciente.js";
import { PacienteList } from "../models/paciente-list.js";
import { PacienteView } from "../view/paciente-view.js";

export class PacienteController {
  #inputNome;
  #inputSobrenome;
  #inputPeso;
  #inputAltura;
  #listaPacientes;
  #pacienteView = new PacienteView();

  constructor() {
    this.#inputNome = document.querySelector("#nome");
    this.#inputSobrenome = document.querySelector("#sobrenome");
    this.#inputPeso = document.querySelector("#peso");
    this.#inputAltura = document.querySelector("#altura");
    this.#listaPacientes = new PacienteList();
  }

  criarPaciente() {
    let nome = this.#inputNome.value;
    let sobrenome = this.#inputSobrenome.value;
    let peso = this.#inputPeso.value;
    let altura = this.#inputAltura.value;
    let paciente = new Paciente(nome, sobrenome, peso, altura);
    this.#listaPacientes.adicionar(paciente);
    // console.log(paciente);
    // para proteger el array llamamos al get pacientes 

    console.log(this.#listaPacientes.pacientes);
    
    this.#pacienteView.atualizarTabela(nome, sobrenome, peso, altura );
    

  }



}
