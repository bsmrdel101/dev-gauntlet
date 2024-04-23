<script lang="ts">
  const openEditor = () => {
    
  };
</script>

<div class="editor">
  <div style="display:flex;align-items:center;cursor:pointer" on:click={openEditor}>
    <svg style="width:24px;height:24px;margin-left:13px;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1024px" height="1024px" viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024" xml:space="preserve">
      <g id="Layer_1">
        <polyline fill="#FFFFFF" points="719.001,851 719.001,639.848 902,533.802 902,745.267 719.001,851"></polyline>
        <polyline fill="#FFFFFF" points="302.082,643.438 122.167,539.135 122.167,747.741 302.082,852.573 302.082,643.438"></polyline>
        <polyline fill="#FFFFFF" points="511.982,275.795 694.939,169.633 512.06,63 328.436,169.987 511.982,275.795"></polyline>
      </g>
      <g id="Layer_2">
        <polyline fill="none" stroke="#FFFFFF" stroke-width="80" stroke-miterlimit="10" points="899,287.833 509,513 509,963"></polyline>
        <line fill="none" stroke="#FFFFFF" stroke-width="80" stroke-miterlimit="10" x1="122.167" y1="289" x2="511.5" y2="513"></line>
        <polygon fill="none" stroke="#FFFFFF" stroke-width="80" stroke-miterlimit="10" points="121,739.083 510.917,963.042 901,738.333 901,288 511,62 121,289"></polygon>
      </g>
    </svg>
    <a href="https://codepen.io/bsmrdel101/pen/XWQObaK" target="_blank" rel="noopener noreferrer">Open in CodePen</a>
  </div>
</div>


<style lang="scss">
  .editor {
    width: fit-content;
    background-color: var(--grey-dark-1);
    border-radius: 1rem;
    transition: all 0.2s ease-in-out;
    margin: 0.5rem 0 1.3rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    &:hover {
      transform: translateY(-0.25rem);
      box-shadow: rgba(240, 46, 46, 0.4) 0px 5px;
    }

    a {
      color: var(--white);
      text-decoration: none;
      height: 100%;
      padding: 0.8rem;
    }
  }
</style>