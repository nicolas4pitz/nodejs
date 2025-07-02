<script lang="ts">

let name = $state("")
let price = $state()
let image = $state("")
let check = $state(false)

let isCorrectName = $state(false)
let isCorrectImage = $state(false)
let isCorrectPrice = $state(false)


let verificar = () => {
  if(name.trim() === ""){
    isCorrectName = true
  }else{
    isCorrectName = false
  }

  if(image.trim() === ""){
    isCorrectImage = true
  }else{
    isCorrectImage = false
  }

}

</script>


<label for="productname">Product Name:</label>
<input type="text" name="productname" id="productname" bind:value={name}> <br>
{#if isCorrectName}
  <p style="color: red;">Informações de Nome são obrigatórias</p>
{/if}


<label for="productprice">Product Price:</label>
<input type="number" name="productprice" id="productprice" bind:value={price}> <br>
{#if isCorrectPrice}
  <p style="color: red;">Informações de Preço são obrigatórias</p>
{/if}


<label for="productimage">Product Image:</label>
<input type="text" name="productimage" id="productimage" bind:value={image}> <br>
<p>{image}</p>
{#if isCorrectImage}
  <p style="color: red;">Informações de Imagens são obrigatórias</p>
{/if}

<label for="productstock"></label>
<input type="checkbox" name="productstock" id="productstock" bind:checked={check}> <br>

<button onclick={verificar}>Cadastrar Produto</button>
<style>


</style>