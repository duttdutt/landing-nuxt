<script setup lang="ts">
</script>

<template>
	<div>
		<Navbar />
		<slot />
		<Footer />
	</div>
</template>

<style lang="scss" module>
@use '~/assets/scss/_main.scss' as *;
</style>
