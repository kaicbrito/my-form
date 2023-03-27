const form = document.querySelector("form");
form.addEventListener("submit", consultarDados);
function consultarDados(e) {
  e.preventDefault();
  const nome = document.querySelector("#nome").value;
  const cpf = document.querySelector("#cpf").value;
  const telefone = document.querySelector("#telefone").value;
  const endereco = document.querySelector("#endereco").value;
  const cidade = document.querySelector("#cidade").value;
  const estado = document.querySelector("#estado").value;
  const cep = document.querySelector("#cep").value;
  const pai = document.querySelector("#pai").value;
  const mae = document.querySelector("#mae").value;
  const nascimento = document.querySelector("#nascimento").value;
  const sexo = document.querySelector("#sexo").value;
  const email = document.querySelector("#email").value;
  const dados = {
    nome,
    cpf,
    telefone,
    endereco,
    cidade,
    estado,
    cep,
    pai,
    mae,
    nascimento,
    sexo,
    email,
  };
  console.log(dados);
}
