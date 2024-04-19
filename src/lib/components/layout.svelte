<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import Navbar from "./Navbar.svelte";
  import { api } from "$lib/scripts/config/api";
  import { initApp } from "$lib/scripts/index";
  import { usersData } from "$lib/scripts/index";

  let users;

  $: {
    users = $usersData;
  }

  onMount(async () => {
    await initApp();
  });
</script>


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
    }
  }
</style>
