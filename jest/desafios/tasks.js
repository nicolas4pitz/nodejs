

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

function limparTarefa(){
  lista_de_tarefas = []
}

module.exports = { adicionarTarefa, limparTarefa };