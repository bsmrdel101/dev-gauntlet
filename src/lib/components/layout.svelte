<script>
  import Navbar from "./Navbar.svelte";

</script>
<div class="layout">
  <Navbar />
  <div class="layout__container">
    <div class="layout__main-content">
      <slot />
    </div>
  </div>
</div>
