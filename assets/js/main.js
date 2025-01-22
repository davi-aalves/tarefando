const inputNovaTarefa = document.querySelector(".input-nova-tarefa");
const btnAddTarefa = document.querySelector(".btn-add-tarefa");
const tarefas = document.querySelector(".tarefas");

btnAddTarefa.addEventListener("click", function () {
  if (!inputNovaTarefa.value) return;
  criaTarefa(inputNovaTarefa.value);
});
