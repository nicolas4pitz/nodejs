<script lang="ts">
  import Counter from "./lib/Counter.svelte";
  import ListaDeTarefas from "./lib/ListaDeTarefas.svelte";
  import Requisicao from "./lib/Requisicao.svelte";
  import ProductCard from "./lib/ProductCard.svelte";
  import FormsCadastroProdutos from "./lib/FormsCadastroProdutos.svelte";

  interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    inStock: boolean;
  }

  let products: Product[] = [
    { id: 1, name: "Sapato", price: 200, imageUrl: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Sapato", inStock: true},
    { id: 2, name: "Chuveiro", price: 1000, imageUrl: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Chuveiro", inStock: false},
    { id: 3, name: "Toalha", price: 10, imageUrl: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Toalha", inStock: true},
    { id: 4, name: "Roupa", price: 100, imageUrl: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Roupa", inStock: true},
    { id: 5, name: "Bone", price: 20, imageUrl: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Bone", inStock: true},
    { id: 6, name: "Relogio", price: 160, imageUrl: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Relogio", inStock: false},
  ]

  let cart: Product[] = [];

  function handleAddToCart(event: CustomEvent<Product>) {
    cart = [...cart, event.detail];
  }


</script>

<main >
  <FormsCadastroProdutos/>


  <section id="product-card">
    {#each products as product}
      <ProductCard product={product} on:addToCart={handleAddToCart}/>
    {/each}

    <div class="cart">
      <h3>Carrinho ({cart.length} itens)</h3>
      {#each cart as item}
        <p>{item.name}</p>
      {/each}
    </div>
  </section>

</main>

<style>
  #product-card{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    max-width: 850px;
  }
</style>
