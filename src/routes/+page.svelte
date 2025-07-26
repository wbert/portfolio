<script lang="ts">
  import techStack from "../data/data.json";
  import projects from "../data/projects.json";
  import education from "../data/education.json";
  import experience from "../data/experience.json";
  import certifications from "../data/certification.json";
  import Header from "../components/Header.svelte";
  import Socials from "../components/Socials.svelte";
  import AboutMe from "../components/AboutMe.svelte";
  import TechStack from "../components/TechStack.svelte";
  import Projects from "../components/Projects.svelte";
  import Education from "../components/Education.svelte";
  import Experience from "../components/Experience.svelte";
  import Certifications from "../components/Certifications.svelte";
  import Footer from "../components/footer.svelte";
</script>

<Header />
<AboutMe />
<TechStack {techStack} />
<Experience {experience} />
<Certifications {certifications} />
<Projects {projects} />
<Education {education} />
<Socials />
<Footer />
