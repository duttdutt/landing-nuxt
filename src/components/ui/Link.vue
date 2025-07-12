<script setup lang="ts">
const props = defineProps<{
	href: string
	active?: boolean
}>()
</script>

<template>
	<nuxt-link
		:to="props.href"
		:class="[$style.link, props.active && $style.active]"
	>
		<slot />
	</nuxt-link>
</template>

<style lang="scss" module>
.link {
	position: relative;
	cursor: pointer;

	transition: color 0.2s ease-in-out;

	font-size: 0.9rem;
	font-weight: 500;
	color: var(--link);
	text-decoration: none;
	background: none;
	border: none;

	&:hover {
		color: var(--link-hover);
	}

	&:active {
		color: var(--link-active);
	}

	&.active {
		color: var(--link-active);

		&::after {
			width: 100%;
		}
	}

	&::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -4px;
		width: 0%;
		height: 1px;

		transition: width 0.5s ease-in-out;

		background-color: var(--link-hover);
	}

	&:hover::after,
	&:focus::after {
		width: 100%;
	}
}
</style>
