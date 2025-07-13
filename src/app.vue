<script setup lang="ts">
import { APP_DESCRIPTION, APP_NAME } from './constants/head'

const { locale } = useI18n()

useSeoMeta({
	title: APP_NAME,
	description: APP_DESCRIPTION,
	ogTitle: APP_NAME,
	ogDescription: APP_DESCRIPTION,
	ogUrl: 'https://landing-gloves.com',
	ogLocale: () => locale.value,
})

useHead({
	htmlAttrs: {
		lang: locale.value,
	},
	link: [
		{ rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/Montserrat.woff2', crossorigin: 'anonymous' },
		{ rel: 'manifest', type: 'application/json', href: '/manifest.webmanifest' },
		{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
		{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
		{ rel: 'shortcut icon', href: '/favicon.ico' },
		{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
	],
})
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<style lang="scss">
@use '~/assets/scss/_main.scss' as *;
</style>
