<script setup lang="ts">
</script>

<template>
	<div class="wrapper">
		<Navbar />
		<slot />
		<Footer />
	</div>
</template>

<style lang="scss" scoped>
.wrapper {
	height: 100vh;
	width: 100vw;
}
</style>
