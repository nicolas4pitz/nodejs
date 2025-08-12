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

<section class="gap-7">
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
</section>






<style>

  section{
    display: flex;
  }

</style>