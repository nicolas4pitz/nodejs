<script lang="ts">

    // Desestruturação para declarar as props
    let { nome, idade } = $props();
    //São reativas por padrão




</script>

<h2>Section 7: Declaração de Props (Declaration Props)</h2>

<div>
    <h3>nome: {nome}</h3>
    <p>Idade: {idade}</p>
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