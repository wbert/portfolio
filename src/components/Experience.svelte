<script lang="ts">
  let props = $props();
</script>

<div
  class="flex flex-col items-start justify-between max-w-screen-md lg:mx-auto md:mx-auto sm:mx-3 xs:mx-3 h-auto px-4 border border-gray-300 rounded-lg mb-3 py-4 space-y-3 mx-3"
>
  <h3 class="text-xl font-semibold">💼 &nnbsp;Professional &nbsp Experience</h3>
  {#each props.experience as exp}
    <div class="space-y-2">
      <h4 class="text-lg font-semibold">{exp.role} at {exp.company}</h4>
      <p class="text-sm text-gray-500">{exp.dates}</p>
      <p class="text-sm text-gray-600">{exp.description}</p>
      <div class="flex flex-wrap gap-2">
        {#each exp.techStack as tech}
          <span class="px-3 py-1 border border-gray-300 rounded-full text-sm"
            >{tech}</span
          >
        {/each}
      </div>
    </div>
  {/each}
</div>
