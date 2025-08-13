<script lang="ts">
  //Antes do svelte, não era possivel detectar essas mudanças dentro de arrays ou objetos, mas agora isso é uma realidade
  let user = $state({name: "Alicia", idade: 30})

  function aniversario(){
    user.idade++
  }

  let itens =  $state(["item 1", "item 2"])

  function adicionarItem(){
    itens.push("item 3")
  }

</script>

<h2>Section 2: Estado Profundo (Deep State)</h2>

<div class="gap-7 principal">
  <div>
    <h3>Usuario</h3>
    <p>Nome: {user.name}</p>
    <p>idade: {user.idade}</p>
    <button onclick={aniversario} class="bg-purple-700 rounded-3xl p-3 text-white">
      Aniversário
    </button>
  </div>
  <div>
    <h3>Itens</h3>
    <p>Item 1: {itens[0]}</p>
    <p>Item 2: {itens[1]}</p>
    <p>Item 3: {itens[2]}</p>
    <button onclick={adicionarItem} class="bg-zinc-700 rounded-3xl p-3 text-white">
      Adicionar Item
    </button>
  </div>
</div>






<style>

  h2{
    color: black;
    font: normal small-caps bold 34px/1.5 Arial, sans-serif;
    padding: 2px;
  }

  .principal{
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    background-color: chocolate;
    margin: 10px;
    padding: 12px;
  }

</style>