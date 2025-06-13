

let lista_de_tarefas = [
  {
    id: 1,
    description: "Fazer Exercício",
    checked: false
  }
]

function adicionarTarefa(description){
  if(typeof description !== 'string' || description.trim() === ''){
    throw new Error('A descrição da tarefa não pode ser vazia ou inválida.');
  }
  
  const obj = {
    id: lista_de_tarefas.length + 1,
    description: description.trim(),
    checked: false
  }

  lista_de_tarefas.push(obj)

  return (obj)
}

function listarTarefas(){
  let copy = lista_de_tarefas
  return copy
}

function limparTarefa(){
  lista_de_tarefas = []
}

function marcarTarefaConcluida(id){
  lista_de_tarefas.forEach( (param) => {
    if(param.id === id){
      param.checked = true
      return true
    }
  })
  return false
}

function removerTarefa(id){
  const tamanhoAntes = lista_de_tarefas.length;
  lista_de_tarefas = lista_de_tarefas.filter(tarefa => tarefa.id !== id);
  return lista_de_tarefas.length < tamanhoAntes;
}


module.exports = { adicionarTarefa, limparTarefa, marcarTarefaConcluida, removerTarefa, listarTarefas };