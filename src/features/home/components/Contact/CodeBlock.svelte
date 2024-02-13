<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  export let line = 'jkrzysiak13@gmail.com';
  let visible = false;

  async function handleClick() {
    await navigator.clipboard.writeText(line);
    visible = true;
  }
</script>

<div class="container">
  {#if visible}
    <p in:fly={{ y: 25, duration: 1300 }} out:fade on:introend={() => (visible = false)}>copied</p>
  {/if}
  <code
    >{line}
    <button on:click={handleClick} aria-label="Copy to clipboard">
      <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"
        ><rect
          x="128"
          y="128"
          width="336"
          height="336"
          rx="57"
          ry="57"
          fill="none"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="32"
        /><path
          d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
        /></svg
      >
    </button>
  </code>
</div>

<style>
  .container {
    position: relative;
    width: 100%;
    max-width: 20rem;
    padding: 2rem 0rem;
    font-size: clamp(var(--text-sm), 4vw, var(--text-xl));
    text-align: center;
    letter-spacing: 0.5px;
    border-radius: 0.5rem;
    background-color: var(--color-violet-300);
  }

  :global(:root.dark) .container {
    background-color: var(--color-slate-800);
  }

  button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 1.25rem;
    aspect-ratio: 1;
    color: var(--color-neutral);
  }

  p {
    z-index: -10;
    position: absolute;
    left: 50%;
    top: -2rem;
    transform: translate(-50%);
  }
</style>
