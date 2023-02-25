export class PacienteView {
  atualizarTabela(nome, sobrenome, peso, altura) {
    var tabelaPacientes = document.getElementById("tabela");

    if (tabelaPacientes) {
      //crea una nueva row de 5 cels
      var row = tabelaPacientes.insertRow(0);
      var cel1 = row.insertCell(0);
      var cel2 = row.insertCell(1);
      var cel3 = row.insertCell(2);
      var cel4 = row.insertCell(3);
      var cel5 = row.insertCell(4);

      //llena las cells con los datos 
      cel1.innerHTML = nome;
      cel2.innerHTML = sobrenome;
      cel3.innerHTML = peso;
      cel4.innerHTML = altura;
      cel5.innerHTML = ;
    }
  }


}
