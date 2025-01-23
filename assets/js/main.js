const inputNovaTarefa = document.querySelector(".input-nova-tarefa");
const btnAddTarefa = document.querySelector(".btn-add-tarefa");
const tarefas = document.querySelector(".tarefas");

function criaLi() {
  const li = document.createElement("li");
  return li;
}

inputNovaTarefa.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    if (!inputNovaTarefa.value) return;
    criaTarefa(inputNovaTarefa.value);
    inputNovaTarefa.value = "";
  }
});

function criaBotaoApagar(li) {
  li.innerText += " ";
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  botaoApagar.setAttribute("class", "apagar");
  botaoApagar.setAttribute("title", "Apagar esta tarefa");
  li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerHTML = textoInput;
  tarefas.appendChild(li);
  criaBotaoApagar(li);
  salvarTarefas();
}

btnAddTarefa.addEventListener("click", function () {
  if (!inputNovaTarefa.value) return;
  criaTarefa(inputNovaTarefa.value);
});

document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.classList.contains("apagar")) {
    el.parentElement.remove();
    salvarTarefas();
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll("li");
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
    listaDeTarefas.push(tarefaTexto);
  }
}

const tarefasJSON = JSON.stringify(listaDeTarefas);
localStorage.setItem("tarefas", tarefasJSON);
