<script lang="ts">

let name = $state("")
let price = $state(0)
let image = $state("")
let check = $state(false)

let isCorrectName = $state(false)
let isCorrectImage = $state(false)
let isCorrectPrice = $state(false)

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  inStock: boolean;
}

let { products = $bindable() }: { products: Product[] } = $props();

let gerarId = () => {
  let obj = {
    id: products.length,
    name: `${name}`,
    price: price,
    imageUrl: image,
    inStock: check
  }

  products = [...products, obj]
  
  name = ""
  price = 0
  image = ""
  check = false
  
  console.log(products)
}

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

  if(price === 0){
    isCorrectPrice = true
  } else{
    isCorrectPrice = false
  }

  if(!isCorrectName && !isCorrectPrice && !isCorrectImage){
    gerarId()
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
{#if isCorrectImage}
  <p style="color: red;">Informações de Imagens são obrigatórias</p>
{/if}

<label for="productstock"></label>
<input type="checkbox" name="productstock" id="productstock" bind:checked={check}> <br>

<button onclick={verificar}>Cadastrar Produto</button>
<style>


</style>