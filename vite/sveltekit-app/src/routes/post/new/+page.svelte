<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>


<section class="flex justify-center">
  <div class="max-w-6xl w-full bg-white grid justify-center gap-4">
    <label for="">Title</label>
    <input type="text">
    <label for="">Body</label>
    <input type="text" class="w-2xs h-60">
  </div>
</section>


<style>

input{
  background-color: rgba(128, 128, 128, 0.692);
  border-radius: 2px;
  width: 220px;
  margin-bottom: 8px;
}

</style>