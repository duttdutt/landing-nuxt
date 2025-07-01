<script setup lang="ts">
const layout = 'main-layout'
</script>

<template>
	<NuxtLayout :name="layout">
		<NuxtPage />
	</NuxtLayout>
</template>

<style lang="scss" module>
@use '~/assets/scss/_main.scss' as *;
</style>
