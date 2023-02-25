import { PacienteController } from "../controllers/paciente-controller.js";

const controller = new PacienteController();
const formulario = document.querySelector('.form');

// escuchar eventos del formulario en este caso especificamente
//  submit declarada en iron function
// no precisa declarar nombre para la variable event
// formulario.addEventListener('submit', (e) => {
//     e.preventDefault();
//     controller.criarPaciente();
// });

formulario.addEventListener('submit', () => {
    event.preventDefault();
    controller.criarPaciente();

});

// const tituloPrincipal = document.getElementById("titulo-principal");
// tituloPrincipal.textContent = 'Aparecida Nutricionista';

// node -v                             | version del node
// npm -v                              | version deç npm (node package mode (instalacion de dependencias))
// npm init                            | crear package.json
// npm install lite-server --save-dev  | instala y actualiza  biblioteca lite-server al proyecto
// npm start                           | corre los script declarados en package.json

//moment || dependencia manipulacion de fechas
