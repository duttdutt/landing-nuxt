<script setup lang="ts">
const props = defineProps<{
	src: string
	alt: string
	title: string
	description: string
}>()
</script>

<template>
	<li :class="$style.cardWrapper">
		<div :class="$style.imageWrapper">
			<img :class="$style.cardImage" :src="props.src" :alt="props.alt">
		</div>
		<div :class="$style.cardInfo">
			<h3 :class="$style.cardTitle">
				{{ props.title }}
			</h3>
			<p :class="$style.cardDescription">
				{{ props.description }}
			</p>
		</div>
	</li>
</template>

<style module lang="scss">
.cardWrapper {
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	width: 100%;

	overflow: hidden;

	transition: transform 0.3s ease;
	user-select: none;

	background-color: #fff;
	border: 5px solid #000;
	box-shadow: 10px 10px 0 #000;

	@media (max-width: 480px) {
		border-width: 3px;
		box-shadow: 4px 4px 0 #000;
	}

	@media (max-width: 360px) {
		border-width: 2px;
		box-shadow: 3px 3px 0 #000;
	}

	&:hover {
		transform: translateY(-4px);
	}

	.imageWrapper {
		overflow: hidden;

		&::before {
			width: 100%;

			overflow: hidden;
			aspect-ratio: 4/3;
		}

		.cardImage {
			width: 100%;
			height: 100%;

			object-fit: cover;
		}
	}

	.cardInfo {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--space-2xs);

		padding: var(--space-xs);

		.cardTitle {
			padding-inline: var(--space-3xs);

			background-color: var(--c-black);
			color: var(--c-white);

			text-transform: uppercase;
			font-size: var(--step-0);
			word-break: break-word;
			font-weight: 800;
		}

		.cardDescription {
			overflow-wrap: anywhere;

			font-size: var(--step--1);
			line-height: 1.2;
			font-weight: 600;
			text-wrap: balance;
			color: var(--c-black);
		}
	}
}
</style>
