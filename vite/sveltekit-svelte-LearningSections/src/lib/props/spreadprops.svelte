<script lang="ts">

let { nome, idade } = $props(); 

</script>

<h2>Section 9: Espalhamento de Propriedades (Spread Props)</h2>

<div>
    <h3>Nome: {nome}</h3>
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