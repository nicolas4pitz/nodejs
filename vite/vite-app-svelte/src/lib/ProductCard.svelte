<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    inStock: boolean;
  }

  let { product }: { product: Product } = $props();
  
  const dispatch = createEventDispatcher();

  function addToCart() {
    dispatch('addToCart', product);
  }
</script>


<div class="product-card">
  <h3>{product.name}</h3>
  <p>Preço: R$ {product.price}</p>
  <img src={product.imageUrl} alt={product.name} />
  <p>Em estoque: {product.inStock ? 'Sim' : 'Não'}</p>
  {#if product.inStock === true}
    <button onclick={addToCart}>Adicionar ao carrinho</button>
  {:else}
   <button>Esgotado</button>
  {/if}
</div>


<style>

  .product-card{
    box-sizing: border-box;
    background-color: rgb(46, 57, 61);
    border-radius: 8px;
    padding: 8px;
    margin: 8px;
    width: 250px;
    min-width: 250px;
  }

</style>