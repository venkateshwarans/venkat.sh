<script>
  import { link } from "../styles/styles.js";
  export let title;
  export let href;
  export let target;
  export let rel = "noopener";
</script>


<a class={link} {title} {href} {target} {rel}>
  <slot></slot>
</a>
