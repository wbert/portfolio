<script>
  import { Sun, Moon } from "lucide-svelte";
  import { Button } from "$lib/components/ui/button";
  import { toggleMode } from "mode-watcher";
</script>

<div
  class="flex items-center justify-between max-w-screen-md mx-auto h-16 px-4"
>
  <h1 class="dark:text-white text-center text-xl font-semibold">_wbert</h1>
  <Button on:click={toggleMode} variant="outline" size="icon">
    <Sun
      class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
    />
    <Moon
      class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
    />
    <span class="sr-only">Toggle theme</span>
  </Button>
</div>
