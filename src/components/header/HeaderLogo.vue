<script setup lang="ts">
import IconLogo from '../ui/icons/IconLogo.vue'

const localePath = useLocalePath()
</script>

<template>
	<nuxt-link
		:class="$style.logoLink"
		:to="localePath('/')"
		aria-label="Home"
		title="Home"
	>
		<IconLogo :width="120" />
	</nuxt-link>
</template>

<style lang="scss" module>
.logoLink {
	display: block;

	max-width: 120px;
	width: clamp(80px, 10vw, 120px);

	cursor: pointer;

	user-select: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;

	color: var(--text-primary);
}
</style>
