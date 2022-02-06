<script>
  import {
    SectionHeader,
    ScrollableSection,
    ScrollSpy,
  } from "@beyonk/svelte-scrollspy";

  const sections = [
    { id: "abc", title: "Some Title", content: "Lorem ipsum dolor..." },
    { id: "def", title: "Some Other Title", content: "Lorem ipsum dolor..." },
    { id: "ghi", title: "A Different Title", content: "Lorem ipsum dolor..." },
  ];
</script>

<div style="height: 10000px;">
  <ScrollSpy>
    <ul>
      {#each sections as section (section.id)}
        <li>
          <SectionHeader id={section.id}>
            {section.title}
          </SectionHeader>
        </li>
      {/each}
    </ul>
    {#each sections as section (section.id)}
      <ScrollableSection id={section.id}>
        <h2>{section.title}</h2>
        <p>{section.content}</p>
      </ScrollableSection>
    {/each}
  </ScrollSpy>
</div>

<style>
  :global(.beyonk-svelte-scrollspy .active) {
    color: red;
  }
</style>
