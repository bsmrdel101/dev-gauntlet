<script lang="ts">
  import Layout from "$lib/components/Layout.svelte";
  import { challengesData } from "$lib/scripts/index";

  let challenges: Challenge[] = [];

  $: {
    challenges = $challengesData;
  }
</script>


<Layout>
  <h1>Challenges</h1>
  {#each challenges as challenge}
    <div>
      <h2>{challenge.title}</h2>
      <p>{challenge.desc}</p>
    </div>
  {/each}
</Layout>
