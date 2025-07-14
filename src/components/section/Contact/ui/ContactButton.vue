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

	position: relative;
	overflow: hidden;
	z-index: 1;

	background-color: transparent;
	color: var(--text-primary);
	border: 2px solid var(--color-primary);
	font-size: var(--step--1);
	font-family: inherit;
	font-weight: bold;
	text-align: center;
	text-transform: uppercase;
	transition: color 0.3s ease;

	&::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(45deg) scaleX(0);
		transform-origin: center;
		width: 100%;
		height: 1000%;
		background: var(--color-primary);
		z-index: -1;
		transition: transform 0.5s ease;
	}

	&:hover {
		cursor: pointer;
		color: var(--color-white);

		&::before {
			transform: translate(-50%, -50%) rotate(45deg) scaleX(2.5);
		}
	}

	&:active {
		background-color: #ff0;
		border-color: #f00;
	}

	&:focus {
		outline: none;
		color: var(--color-white);
		border-color: var(--color-primary-darker);
		background-color: var(--color-primary-darker);
	}
}
</style>
