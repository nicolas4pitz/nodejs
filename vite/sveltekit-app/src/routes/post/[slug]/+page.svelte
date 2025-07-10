<script lang="ts">
    import type { PageData } from './$types';

    //QUANDO USA O PAGE SERVER.TS ELE CHEGA USANDO O PAGEDATA TYPE, USANDO OS DADOS VIA PROPS
    let { data }: { data: PageData } = $props();

    interface Post {
      userId: number;
      id: number;
      title: string;
      body: string;
    }

    let post = $state<Post | undefined>();
    post = data.post
    $inspect(post)
</script>


<main class="max-w-4xl w-full flex flex-col mx-auto py-4">
  <header class="mb-8">
    <h1 class="font-bold text-gray-500 text-4xl mb-4">{post?.title}</h1>
    <div class="flex items-center text-sm text-gray-500">
        <span>Post #{post?.id}</span>
        <span class="mx-2">•</span>
        <span>Por usuário #{post?.userId}</span>
      </div>
  </header>
  <section class="bg-blue-200 rounded-sm p-4">
    <p class="text-gray-700 leading-relaxed">{post?.body}</p>

  </section>
  <footer class="mt-12 pt-8 border-t border-gray-200">
      <a href="/post" 
          class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
          ← Voltar para todos os posts
      </a>
  </footer>
</main>

<p></p>