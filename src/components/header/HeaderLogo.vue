<script setup lang="ts">
import IconLogo from '../ui/icons/IconLogo.vue'
</script>

<template>
	<a
		:class="$style.logoLink"
		href="/"
	>
		<IconLogo
			:class="$style.logoLink"
			:width="120"
		/>
	</a>
</template>

<style lang="scss" module>
.logoLink {
	display: block;

	cursor: pointer;

	user-select: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;

	color: var(--text-primary);
}
</style>
