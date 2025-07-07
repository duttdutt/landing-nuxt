<script setup lang="ts">
import { appDescription, appName } from './constants/head'

const layout = 'main-layout'

useHead({
	title: appName,
	meta: [
		{ name: 'description', content: appDescription },
		{ name: 'apple-mobile-web-app-title', content: appName },
	],
	htmlAttrs: {
		lang: 'ru',
	},
	link: [
		{ rel: 'manifest', type: 'application/json', href: '/manifest.webmanifest' },
		{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
		{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
		{ rel: 'shortcut icon', href: '/favicon.ico' },
		{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
	],
})
</script>

<template>
	<NuxtLayout :name="layout">
		<NuxtPage />
	</NuxtLayout>
</template>

<style lang="scss">
@use '~/assets/scss/_main.scss' as *;
</style>
