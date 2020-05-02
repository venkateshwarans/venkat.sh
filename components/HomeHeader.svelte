<script>
  import { myName, para, headerText , myDescription} from "../styles/styles.js";
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import Link from './Link.svelte';
  let show = false;
  	onMount(async () => {
      setTimeout(() => show=true, 0)
    });
</script>

<div class="content">
  {#if show}
  <div class={headerText}>
    <div class={para} transition:fade>Hi, I'm</div>
    <h1 transition:fade class={myName}>Venkateshwaran <span class="underline">Selvaraj</span></h1>
    <div class={myDescription}>
Currently, Frontend Engineer at <Link target="_blank" title="StackRoute Labs" href="https://www.stackroute.in/labs.html">StackRoute Labs</Link>. <br>
Previously, Tech Debt at <Link target="_blank" title="Newslaundry.com" href="https://www.newslaundry.com">Newslaundry</Link>.
    </div>
  </div>
  {/if}
</div>
