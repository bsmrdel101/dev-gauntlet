<script>
  import { onMount } from "svelte";
  import Navbar from "./Navbar.svelte";

  let users = [];

  onMount(async () => {
    const res = await fetch('/api/users');
    users = await res.json();
    console.log(users);
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
