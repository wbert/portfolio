<script lang="ts">
  let props = $props();
</script>

<div
  class="flex flex-col items-start justify-between max-w-screen-md lg:mx-auto md:mx-auto sm:mx-3 xs:mx-3 h-auto px-4 border border-gray-300 rounded-lg mb-3 py-4 space-y-3 mx-3"
>
  <h3 class="text-xl font-semibold">🏛️ &nbsp Education</h3>
  {#each props.education as edu}
    <div class="space-y-2">
      <h4 class="text-lg font-semibold">{edu.institution}</h4>
      <p class="text-sm font-medium">{edu.degree} in {edu.fieldOfStudy}</p>
      <p class="text-sm text-gray-500">{edu.dates}</p>
      <p class="text-sm text-gray-600">{edu.description}</p>
    </div>
  {/each}
</div>
