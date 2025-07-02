<script lang="ts">

let name = $state("")
let price = $state()
let image = $state("")
let check = $state(false)

let finalname = $state("")
let finalprice = $state("")
let finalimage = $state("")
let finalcheck = $state(false)

const error = {
  name: "O nome está errado",
  price: "O preço está errado"
}

let verificar = () => {
  if(name.trim() === ""){
    error.name
  }
}

$effect(() => {
    finalname = name.trim()
    finalimage = image.trim()
    console.log(finalname)
})


</script>


<label for="productname">Product Name:</label>
<input type="text" name="productname" id="productname" bind:value={name}> <br>
{#if name.trim() === ""}
  <p>{error.name}</p>
{/if}

<label for="productprice">Product Price:</label>
<input type="number" name="productprice" id="productprice" bind:value={price}> <br>
<p>{price}</p>

<label for="productimage">Product Image:</label>
<input type="text" name="productimage" id="productimage" bind:value={image}> <br>
<p>{image}</p>

<label for="productstock"></label>
<input type="checkbox" name="productstock" id="productstock" bind:checked={check}> <br>

<button onclick={verificar}>Cadastrar Produto</button>
<style>


</style>