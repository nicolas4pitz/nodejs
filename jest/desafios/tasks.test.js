const { adicionarTarefa } = require('./tasks');



describe('adicionarTarefa', () => {
    // Teste 1: Deve adicionar uma tarefa com descrição, ID e concluida: false.
    it('deve adicionar uma tarefa com a descrição correta e status inicial', () => {
        const tarefa = adicionarTarefa('Comprar pão');
        expect(tarefa).toHaveProperty('id'); // Verifica se tem a propriedade 'id'
        expect(tarefa.description).toBe('Comprar pão'); // Verifica a descrição
        expect(tarefa.checked).toBe(false); // Verifica o status inicial
    });




  })