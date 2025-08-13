<script lang="ts">

let name = $state("Bob");

$effect(() => {
  console.log(`O nome é ${name}`)
  document.title = `Ola, ${name}`
})

</script>

<h2>Section 5: Efeitos (Effects)</h2>

<div>
  <input type="text" bind:value={name}>
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