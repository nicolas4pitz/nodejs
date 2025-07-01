<script lang="ts">

let name = $state("")
let price = $state("")
let image = $state("")
let cehck = $state(false)


$effect(() => {
    name = name.trim()
    image = image.trim()
    console.log(name)
})


</script>


<label for="productname">Product Name:</label>
<input type="text" name="productname" id="productname" bind:value={name}> <br>
<p>{name}</p>

<label for="productprice">Product Price:</label>
<input type="number" name="productprice" id="productprice" bind:value={price}> <br>
<p>{price}</p>

<label for="productimage">Product Image:</label>
<input type="text" name="productimage" id="productimage" bind:value={image}> <br>
<p>{image}</p>

<label for="productstock"></label>
<input type="checkbox" name="productstock" id="productstock" bind:checked={cehck}> <br>

<button disabled={name === ""|| price === "" || image === ""}>Cadastrar Produto</button>
<style>


</style>