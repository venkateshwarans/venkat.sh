<script>
	import { theme, setTheme} from '../store/theme.js'
  $: {
			document.body.style.setProperty("--theme-background", $theme.background)
			document.body.style.setProperty("--theme-color", $theme.color)
	};

</script>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
