<script>
  import { Github, Linkedin } from "lucide-svelte";
  import { Button } from "$lib/components/ui/button";
</script>

<div
  class="flex flex-col items-start justify-between max-w-screen-md lg:mx-auto md:mx-auto sm:mx-3 xs:mx-3 h-auto px-4 border border-gray-300 rounded-lg mb-3 py-4 space-y-3 mx-3"
>
  <h3 class="text-xl font-semibold self-start">🌐 &nbsp Socials</h3>
  <Button class="w-full" href="https://github.com/wbert" target="_blank">
    <Github /> &nbsp;Github
  </Button>
  <Button
    class="w-full"
    href="https://www.linkedin.com/in/wilbert-josh-alfornon-0582a927b/"
    target="_blank"
  >
    <Linkedin /> &nbsp;Linkedin
  </Button>
</div>
