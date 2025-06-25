<script lang="ts">
  let toDoList = $state<string[]>([]);
  let newTaskText = $state('');

  function addTask() {
    if (newTaskText.trim() !== '') {
      toDoList.push(newTaskText.trim());
      newTaskText = ''; 
    }
  }

  function removeItem(indexToRemove: number) {
    toDoList = toDoList.filter((_, index) => index !== indexToRemove);
  }
</script>

<input type="text" bind:value={newTaskText} placeholder="Adicionar nova tarefa..." />
<button onclick={addTask}>Adicionar</button>

<ul>
  {#each toDoList as task, index (index)}
    <li>
      <span>{task}</span>
      <button onclick={() => removeItem(index)}>Remover</button>
    </li>
  {/each}
  {#if toDoList.length === 0}
    <p>Nenhuma tarefa pendente! 🎉</p>
  {/if}
</ul>

<style>

</style>