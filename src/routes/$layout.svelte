<script>
  import './_global.pcss';
</script>

<main>
  <slot />
</main>

<style>
  :root {
    /* Tailwind's creator recommends against @apply.
		This is all just proof that it works in your Svelte style blocks. */
    @apply font-sans;
  }

  main {
    @apply text-center;
    @apply p-4;
    @apply mx-auto;
  }
</style>
