const { adicionarTarefa, limparTarefa, listarTarefas, marcarTarefaConcluida, removerTarefa } = require('./tasks');

beforeEach( () => {
    limparTarefa();
})

describe('adicionarTarefa', () => {
    // Teste 1: Deve adicionar uma tarefa com descrição, ID e concluida: false.
    it('deve adicionar uma tarefa com a descrição correta e status inicial', () => {
        const tarefa = adicionarTarefa('Comprar pão');
        expect(tarefa).toHaveProperty('id'); // Verifica se tem a propriedade 'id'
        expect(tarefa.description).toBe('Comprar pão'); // Verifica a descrição
        expect(tarefa.checked).toBe(false); // Verifica o status inicial
    });

    it("Deve ter o id diferente do anterior", () => {
        
        const tarefa1 = adicionarTarefa("tarefa1")
        const tarefa2 = adicionarTarefa("tarefa2")
        const tarefa3 = adicionarTarefa("tarefa3")

        expect(tarefa1.id).not.toBe(tarefa2.id)
        expect(tarefa2.id).not.toBe(tarefa3.id)
        expect(tarefa2.id).toBe(tarefa1.id + 1)
    })

    it("Deve retornar o objeto da tarefa adicionada", () => {
        let desc = "Estudar Jest"
        const tarefaAdicionada = adicionarTarefa(desc)

        expect(tarefaAdicionada).toEqual({
            id: expect.any(Number),
            description: desc,
            checked: false
        })
    })

    it("Deve lançar um erro se a descrição não for uma string", () => {
        expect(() => adicionarTarefa(null)).toThrow("A descrição da tarefa não pode ser vazia ou inválida.")
        expect(() => adicionarTarefa(undefined)).toThrow("A descrição da tarefa não pode ser vazia ou inválida.")
        expect(() => adicionarTarefa(123)).toThrow("A descrição da tarefa não pode ser vazia ou inválida.")
        expect(() => adicionarTarefa()).toThrow("A descrição da tarefa não pode ser vazia ou inválida.")
    })

  })

describe("listarTarefa", () => {

  //Deve retornar um array vazio se não houver tarefas.
  //Deve retornar todas as tarefas adicionadas.
  //Deve retornar uma cópia do array (para evitar modificações externas acidentais).

  it("Deve retornar um array vazio se não houver tarefas", () => {
    const lista = listarTarefas()
    expect(lista).toEqual([])
  })

  it("Deve retornar todas as tarefas adicionadas", () => {
    const tarefa = adicionarTarefa('Comprar pão');
    const tarefa2 = adicionarTarefa("Jogar")
    const lista = listarTarefas()
    expect(lista[0].description).toBe("Comprar pão")
    expect(lista[1].description).toBe("Jogar")

    expect(lista).toEqual([
      {id: 1, description: "Comprar pão", checked: false},
      {id: 2, description: "Jogar", checked: false}
    ])

  })

})

describe("marcarTarefaConcluida", () => {

  it("Deve marcar uma tarefa existente como concluida", () => {
    const tarefa1 = adicionarTarefa("tarefa1")
    const tarefa2 = {}
    const checkTarefa1 = marcarTarefaConcluida(tarefa1.id)
    const checkTarefa2 = marcarTarefaConcluida(tarefa2.id)
    expect(tarefa1.checked).toBe(true)
    expect(tarefa2.checked).toBe(undefined)
    
  })

})

describe("removerTarefa", () => {

  it("Deve remover uma tarefa existente", () => {
    const tarefa1 = adicionarTarefa("tarefa1")
    const rmTarefa1 = removerTarefa(tarefa1.id)
    console.log(tarefa1)
    expect(rmTarefa1).toBe(true)
    
  })

})