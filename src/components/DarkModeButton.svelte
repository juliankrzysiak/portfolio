<script lang="ts">
  import { onMount } from 'svelte';

  let darkMode = false;

  onMount(() => {
    darkMode = document.documentElement.classList.contains('dark');
  });

  function handleClick() {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      darkMode = false;
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      darkMode = true;
    }
  }
</script>

<button
  class="dark-mode-button"
  aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
  on:click={handleClick}
>
</button>

<style>
  .dark-mode-button {
    height: 1.5rem;
    aspect-ratio: 1;
    background-image: url('../assets/moon.svg');
  }

  :root.dark {
    & .dark-mode-button {
      background-image: url('../assets/sun.svg');
    }
  }
</style>
