<script lang="ts">
  import { ExternalLink } from "lucide-svelte";
  import { Button } from "$lib/components/ui/button";

  let props = $props();
</script>

<div
  class="flex flex-col items-start justify-between max-w-screen-md lg:mx-auto md:mx-auto sm:mx-3 xs:mx-3 h-auto px-4 border border-gray-300 rounded-lg mb-3 py-4 space-y-3 mx-3"
>
  <h3 class="text-xl font-semibold">🚀 &nbsp Projects</h3>

  {#each props.projects as project}
    <div class="space-y-4">
      <h4 class="text-lg font-semibold">{project.title}</h4>
      <p class="text-sm text-gray-600">{project.description}</p>
      <p class="text-sm text-gray-500">Completed on: {project.dateCompleted}</p>
      <div class="flex flex-wrap gap-2">
        {#each project.techStack as tech}
          <span class="px-3 py-1 border border-gray-300 rounded-full text-sm"
            >{tech}</span
          >
        {/each}
      </div>
      <Button
        class="mt-4"
        on:click={() => window.open(project.link, "_blank")}
        variant="outline"
        size="sm"
      >
        Link &nbsp
        <ExternalLink class="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </div>
  {/each}
</div>
