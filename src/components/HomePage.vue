<template>
	<div class="background">
		<Menu />
	</div>
</template>

<script>
	import Menu from "./Menu.vue";
	export default {
		components: {
			Menu,
		},
		data() {
			return {};
		},
		mounted() {},
		methods: {},
	};
</script>

<style scoped>
	.background {
		background-image: url("@/assets/Home/0.png");
		background-size: cover;
		background-position: center;
		width: 100vw;
		height: 100vh;
		display: flex;
		position: relative;
	}
</style>
