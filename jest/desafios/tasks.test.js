const { adicionarTarefa, limparTarefa } = require('./tasks');

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