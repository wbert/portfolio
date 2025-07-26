<script lang="ts">
  import { ExternalLink } from "lucide-svelte";
  import { Button } from "$lib/components/ui/button";
  let props = $props();
</script>

<div
  class="flex flex-col items-start justify-between max-w-screen-md lg:mx-auto md:mx-auto sm:mx-3 xs:mx-3 h-auto px-4 border border-gray-300 rounded-lg mb-3 py-4 space-y-3 mx-3"
>
  <h3 class="text-xl font-semibold">🏆 &nbsp Certifications</h3>
  {#each props.certifications as cert}
    <div
      class="flex flex-col md:flex-row justify-between items-start md:items-center w-full space-y-4 md:space-y-0"
    >
      <div class="flex items-center space-x-4">
        {#if cert.badge}
          <img
            src={cert.badge}
            alt={`${cert.title} badge`}
            class="w-32 h-32 object-contain"
          />
        {/if}
        <div class="flex flex-col space-y-2">
          <h4 class="text-lg font-semibold">{cert.title}</h4>
          <p class="text-sm font-medium">{cert.issuer}</p>
          <p class="text-sm text-gray-500">{cert.date}</p>
          <p class="text-sm text-gray-600">{cert.description}</p>
        </div>
      </div>
      <Button
        class="mt-4 md:mt-0"
        on:click={() => window.open(cert.link, "_blank")}
        variant="outline"
        size="sm"
      >
        Link &nbsp
        <ExternalLink class="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </div>
  {/each}
</div>
