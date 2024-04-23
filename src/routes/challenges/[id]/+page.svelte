<script lang="ts">
  import { page } from '$app/stores';
  import Layout from "$lib/components/Layout.svelte";
  import { api } from '$lib/scripts/config/api';
  import { capitalize } from '$lib/scripts/tools/utils';
  import { onMount } from 'svelte';
  let { params } = $page;

  let challenge: Challenge;
  let selectedTool: string;
  

  onMount(async () => {
    challenge = await api.get(`/api/challenges/${params.id}`);
    selectedTool = challenge.challengeContent[0].tools[0];
  });
</script>


<Layout title={challenge && challenge.title}>
  {#if challenge}
    <h3 class={`challenge__difficulty challenge__difficulty--${challenge.difficulty}`}>{ capitalize(challenge.difficulty) }</h3>
    <h1 class="challenge__title">{ challenge.title } <span>{ challenge.platform }</span></h1>
    <img class="challenge__cover-img" src={challenge.image} alt={challenge.image} loading="lazy" draggable="false" />
    <div class="challenge__tool-btn-container">
      {#each challenge.challengeContent as content}
        {#each content.tools as tool}
          <button class="challenge__tool-btn">
            <img src={`/images/${tool.toLowerCase()}.svg`} alt="Icon" />{ tool }
          </button>
        {/each}
      {/each}
    </div>
    <p class="challenge__desc">{ challenge.desc }</p>

    {#each challenge.challengeContent.filter((c) => c.tools.includes(selectedTool)) as content}
      <h3>Acceptance Criteria</h3>
      <ul>
        {#each content.acceptanceCriteria as criteria }
          <li>{ criteria }</li>
        {/each}
      </ul>

      {#if content.instructions.length > 0}
        <h3>Instructions</h3>
        <ul>
          {#each content.instructions as instruction }
            <li>{ instruction }</li>
          {/each}
        </ul>
      {/if}

      {#if content.stretchGoals.length > 0}
        <h3>Stretch Goals</h3>
        <ul>
          {#each content.stretchGoals as goal }
            <li>{ goal }</li>
          {/each}
        </ul>
      {/if}
    {/each}
  {/if}
</Layout>


<style lang="scss">
  h1 {
    font-size: var(--font-xl);
  }
</style>
