<script lang="ts">
  export let challenge: Challenge;
</script>


<a class="challenge" href={`/challenges/${challenge.id}`}>
  <h2>{ challenge.title }</h2>
  <img src={challenge.image} alt={challenge.image} loading="lazy" draggable="false" />
  <p class="challenge__desc">{ challenge.desc }</p>
</a>
