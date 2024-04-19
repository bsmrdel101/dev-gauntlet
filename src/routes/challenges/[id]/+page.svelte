<script lang="ts">
  import { page } from '$app/stores';
  import Layout from "$lib/components/Layout.svelte";
  import { api } from '$lib/scripts/config/api';
  import { capitalize } from '$lib/scripts/tools/utils';
  import { onMount } from 'svelte';
  let { params } = $page;

  let challenge: Challenge;

  onMount(async () => {
    challenge = await api.get(`/api/challenges/${params.id}`);
  });
</script>


<Layout title={challenge && challenge.title}>
  {#if challenge}
    <h3 class={`challenge__difficulty challenge__difficulty--${challenge.difficulty}`}>{ capitalize(challenge.difficulty) }</h3>
    <h1 class="challenge__title">{ challenge.title } <span>{ challenge.platform }</span></h1>
    <img class="challenge__cover-img" src={challenge.image} alt={challenge.image} loading="lazy" draggable="false" />
    <p class="challenge__desc">{ challenge.desc }</p>
  {/if}
</Layout>


<style lang="scss">
  h1 {
    font-size: var(--font-xl);
  }
</style>
