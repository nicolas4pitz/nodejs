<script lang="ts">

//Vai ser pedido para "alocar" uma variavel quando o componente for adicionado no pai
let { nome } = $props();

</script>

<h2>Section 6: Reatividade Universal (Universal reactivity)</h2>

<div>
  <p>{nome}</p>
</div>

<style>
  h2{
    color: black;
    font: normal small-caps bold 34px/1.5 Arial, sans-serif;
    padding: 2px;
  }

  div{
    box-sizing: border-box;
    background-color: chocolate;
    margin: 10px;
    padding: 12px;
  }
</style>