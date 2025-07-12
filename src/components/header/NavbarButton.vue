<script setup lang="ts">
import useScrollTo from '@/utils/scrollTo'

const { t } = useI18n()

function handleClick() {
	useScrollTo('#contact', { behavior: 'smooth' })
}
</script>

<template>
	<button
		:class="$style.navbarButton"
		@click="handleClick"
	>
		{{ t("button.toOrder") }}
	</button>
</template>

<style lang="scss" module>
.navbarButton {
	display: inline-flex;
	align-items: center;
	justify-content: center;

	width: 8rem;
	height: 2.25rem;
	padding: 0.5rem 1rem;

	cursor: pointer;
	transition:
		background-color 0.2s ease,
		color 0.2s ease;
	animation: smoothPulse 1.5s ease-in-out infinite;

	background-color: var(--color-primary);
	color: var(--text-button);
	font-family: 'Montserrat';
	font-size: 0.875rem;
	font-weight: 800;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	text-decoration: none;
	line-height: 1;
	border: none;
	user-select: none;

	&:hover {
		background-color: var(--color-primary-lighter);
		box-shadow: 0px 0px 15px 1px var(--color-primary-lighter);
	}

	&:active {
		background-color: var(--color-primary-darker);
	}

	@media (max-width: 768px) {
		margin-left: auto;
	}
}

@keyframes smoothPulse {
	0%,
	100% {
		box-shadow: 0 0 25px 5px var(--color-primary-lighter);
	}

	50% {
		box-shadow: 0 0 25px 1px var(--color-primary-lighter);
	}
}
</style>
