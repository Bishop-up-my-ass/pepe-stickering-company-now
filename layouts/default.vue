<!-- Layouts are what always wraps the entire page. We always have the navigation bar at the top and the footer at the bottom.
So in order to not have to rewrite it for every page in the /pages folder, we use the 'default' layout, and put those in here,
to be displayed on every page -->

<template>
	<div class="flex flex-col min-h-screen" id="top">
		<!-- This is the Navbar -->
		<div class="flex-grow relative">
			<nav class="bg-primary dark:bg-primary-dark text-white dark:text-text-dark w-full flex items-center space-x-[1em] py-2 md:rounded-b-3xl shadow-lg md:static fixed bottom-0 z-10">
				<div class="flex items-center space-x-[1em] flex-grow">
					<nuxt-link to="/"
						><img src="~/assets/images/horsey.webp" width="50" height="50" class="ms-5 rounded hover:scale-110 transition-all pr-2" draggable="false" alt="horsey nav icon" />
					</nuxt-link>

					<div class="flex space-x-5" v-for="(page, index) in pages" :key="index">
						<nuxt-link :to="page.url" class="p-1 bg-[#ED1824] dark:bg-[#a00b0b] rounded-lg hover:bg-indigo-900 hover:scale-110 transition-all py-0.5 shadow-lg">
							<p class="md:mb-1">{{ page.title }}</p>
						</nuxt-link>
					</div>
				</div>
				<div class="flex space-x-[2em] justify-end px-10">
					<client-only>
						<faIcon id="settings-btn" :icon="icon" @click="toggleSettings" class="cursor-pointer w-4 h-4"></faIcon>
					</client-only>
				</div>
			</nav>

			<!-- Here, the content of the current page is automatically inserted -->
			<NuxtPage class="mx-2"></NuxtPage>
		</div>

		<!-- the footer -->
		<footer class="bg-primary dark:bg-primary-dark text-white p-2 text-center rounded-t-3xl">
			Brought to you by the
			<nuxt-link to="/about" class="text-accent dark:text-accent-dark underline">r/anarchychess team</nuxt-link>
		</footer>
	</div>
</template>

<script setup>
	const settings = useState("settings", () => false);
	const icon = ref("gear")

	watch(settings, (newValue, oldValue) => {
		setTimeout(() => {
			icon.value = icon.value	== "x" ? "gear" : "x"
		}, 500);
		document.getElementById("settings-btn").animate(
			[
				{ transform: "rotate(0deg)", opacity: 1 },
				{ transform: "rotate(360deg)", opacity: 0 },
				{ transform: "rotate(0deg)", opacity: 1 },
			],
			{
				duration: 700,
				easing: "ease-in-out",
				iterations: 1,
				fill: "forwards",
			}
		);
    });

	function toggleSettings() {
		settings.value = !settings.value;
	}
	const pages = [
		{
			title: "Our Mission",
			url: "/puzzles",
		},
		{
			title: "Submit",
			url: "/lore",
		},
		{
			title: "Registry Set",
			url: "/history",
		},
		/* {
			title: "Census",
			url: "/merch",
		}, */
	];
</script>
