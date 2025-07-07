<!-- Link.vue -->
<script setup lang="ts">
defineProps<{
	// TODO: добавить флаг для 'active'
	href: string
}>()
</script>

<template>
	<a :href="href" :class="$style.link">
		<slot />
	</a>
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
