<script lang="ts">
  import { page } from '$app/stores';
  import Layout from "$lib/components/Layout.svelte";
  import { api } from '$lib/scripts/config/api';
  import { onMount } from 'svelte';
  let { params } = $page;

  let challenge: Challenge;

  onMount(async () => {
    challenge = await api.get(`/api/challenges/${params.id}`);
  });
</script>


<Layout title={challenge && challenge.title}>
  {#if challenge}
    <h1>{ challenge.title }</h1>
  {/if}
</Layout>
