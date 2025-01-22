const inputNovaTarefa = document.querySelector(".input-nova-tarefa");
const btnAddTarefa = document.querySelector(".btn-add-tarefa");
const tarefas = document.querySelector(".tarefas");

btnAddTarefa.addEventListener("click", function () {
  if (!inputNovaTarefa.value) return;
  criaTarefa(inputNovaTarefa.value);
});

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

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerHTML = textoInput;
  tarefas.appendChild(li);
}
