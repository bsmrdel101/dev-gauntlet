<script lang="ts">
  import ChallengeComponent from "$lib/components/Challenge.svelte";
  import Layout from "$lib/components/Layout.svelte";
  import { challengesData } from "$lib/scripts/index";

  let challenges: Challenge[] = [];

  $: {
    challenges = $challengesData;
  }
</script>


<Layout title="Challenges">
  <h1>Challenges</h1>
  <div class="challenges">
    {#each challenges as challenge}
      <ChallengeComponent challenge={challenge} />
    {/each}
  </div>
</Layout>


<style lang="scss">
  h1 {
    text-align: center;
  }
</style>
