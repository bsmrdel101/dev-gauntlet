<script lang="ts">
  import { onMount } from "svelte";
  import Navbar from "./Navbar.svelte";
  import { initApp } from "$lib/scripts/index";
  import { userData } from "$lib/scripts/index";

  export let title = '';
  let user;

  $: {
    user = $userData;
  }

  onMount(async () => {
    await initApp();
  });
</script>


<svelte:head>
  <title>{ title ? `${title} | Dev Gauntlet` : 'Dev Gauntlet' }</title>
</svelte:head>

<div class="layout">
  <Navbar />
  <div class="layout__container">
    <div class="layout__main-content">
      <slot />
    </div>
  </div>
</div>


<style lang="scss">
  .layout {
    &__container {
      display: flex;
      height: 100%;
    }
  
    &__main-content {
      margin-top: 1rem;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow-y: auto;
      max-height: 90vh;
      
      @media (max-height: 875px) {
        max-height: 87vh;
      }

      @media (max-height: 681px) {
        max-height: 84vh;
      }
    }
  }
</style>
