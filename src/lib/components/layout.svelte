<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import Navbar from "./Navbar.svelte";

  export const users = writable([]);

  onMount(async () => {
    const res = await fetch('/api/users');
    const userData = await res.json();
    users.set(userData);
    console.log(userData);
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
