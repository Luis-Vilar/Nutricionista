export class Paciente {
  // propriedades privadas
  #nome;
  #sobrenome;
  #peso;
  #altura;
  // constructor de clase
  constructor(nome, sobrenome, peso, altura) {
    this.#nome = nome;
    this.#sobrenome = sobrenome;
    this.#peso = peso;
    this.#altura = altura;
  }

  // métodos de classe
  equals(outroPaciente) {
    if (!outroPaciente instanceof Paciente) {
      return false;
    }
    return (
      this.#nome === outroPaciente.#nome &&
      this.#sobrenome === outroPaciente.#sobrenome
    );
  }

  // getter`s & setter`s
  get nome() {
    return this.#nome;
  }

  get sobrenome() {
    return this.#sobrenome;
  }

  get peso() {
    return this.#peso;
  }

  get altura() {
    return this.#altura;
  }

  set peso(peso) {
    this.#peso = peso;
  }
}
