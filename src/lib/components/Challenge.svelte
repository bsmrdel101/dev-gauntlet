<script lang="ts">
  import { capitalize } from "$lib/scripts/tools/utils";

  export let challenge: Challenge;
</script>


<a class="challenge" href={`/challenges/${challenge.id}`}>
  <h2 class="challenge__title">{ challenge.title } <span>{ challenge.platform }</span></h2>
  <h3 class={`challenge__difficulty challenge__difficulty--${challenge.difficulty}`}>{ capitalize(challenge.difficulty) }</h3>
  <img src={challenge.image} alt={challenge.image} loading="lazy" draggable="false" width="260rem" />
</a>
