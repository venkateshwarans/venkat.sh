<script>
	import HomeHeader from '../components/HomeHeader.svelte';
	import Tailwindcss from '../components/Tailwindcss.svelte';
	import ThemeSwitcher from '../components/ThemeSwitcher.svelte';
	  if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js');
    }
</script>

<Tailwindcss />
<main class="flex h-screen relative">
	<div class="m-auto">
		<HomeHeader></HomeHeader>
	</div>

	<div class="absolute top-0 right-0 mr-10 mt-10">
		<ThemeSwitcher></ThemeSwitcher>
	</div>
</main>
