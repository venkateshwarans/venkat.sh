<script>
  import { link } from "../styles/styles.js";
  export let title;
  export let href;
  export let target;
</script>


<a class={link} {title} {href} {target}>
  <slot></slot>
</a>
