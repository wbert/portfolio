<script>
  let props = $props();
</script>

<div
  class="flex flex-col items-center justify-center max-w-screen-md lg:mx-auto md:mx-auto sm:mx-3 xs:mx-3 h-auto px-4 border border-gray-300 rounded-lg mb-3 py-4 overflow-hidden mx-3"
>
  <h3 class="text-lg font-semibold mb-3 self-start">
    🖥️ &nbsp Technology Stack
  </h3>
  <div class="flex flex-wrap justify-center gap-4">
    {#each props.techStack as tech}
      <img src={tech.logo} class="w-12 h-12" alt={`${tech.name} Logo`} />
    {/each}
  </div>
</div>
