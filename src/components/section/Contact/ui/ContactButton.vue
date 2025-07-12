<script setup lang="ts">
const props = defineProps<{
	type: 'button' | 'submit'
}>()
</script>

<template>
	<button
		:class="$style.buttonContact"
		:type="props.type"
	>
		<slot />
	</button>
</template>

<style module lang="scss">
.buttonContact {
	padding-block: var(--space-xs);
	padding-inline: var(--space-s);
	border: 2px solid var(--color-primary);

	position: relative;
	transition: all 0.3s ease;
	overflow: hidden;
	z-index: 1;

	font-size: var(--step--1);
	font-family: inherit;
	background-color: transparent;
	color: var(--text-primary);
	text-align: center;
	text-transform: uppercase;

	&::before {
		display: block;
		content: '';

		width: 0;
		height: 300%;

		position: absolute;
		top: 50%;
		left: 50%;
		z-index: -1;

		transform: translate(-50%, -50%) rotate(45deg);
		transition: 0.5s ease;

		background: var(--color-primary);
	}

	&:hover {
		cursor: pointer;

		color: var(--color-white);

		&::before {
			width: 125%;
		}
	}

	&:active {
		background-color: var(--color-primary-darker);
	}

	&:focus {
		outline: none;
		border-color: var(--border-input-focus);
	}
}
</style>
