<script lang="ts">
  export let line = 'jkrzysiak13@gmail.com';
  async function handleClick() {
    await navigator.clipboard.writeText(line);
  }
</script>

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

<style>
  code {
    position: relative;
    font-size: var(--text-lg);
    text-align: center;
    letter-spacing: 0.5px;
    background-color: var(--color-slate-950);
    padding: 2rem 3rem;
    border-radius: 0.5rem;
  }

  button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 1.25rem;
    aspect-ratio: 1;
    color: var(--color-neutral);
  }

  @media (min-width: 1024px) {
    code {
      font-size: var(--text-xl);
    }
  }
</style>
