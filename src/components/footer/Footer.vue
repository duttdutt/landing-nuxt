<script setup lang="ts"></script>

<template>
	<footer>
		<div :class="$style.container">
			GlovBox
		</div>
	</footer>
</template>

<style module lang="scss">
@use 'sass:color';

footer {
	--gap: 5em;
	--line: 1px;
	--color: rgba(255, 255, 255, 0.2);

	display: flex;
	align-items: center;
	justify-content: center;

	height: 100vh;

	user-select: none;

	color: var(--text-primary-muted);

	background: #000000;
	background-image:
		linear-gradient(
			-90deg,
			transparent calc(var(--gap) - var(--line)),
			var(--color) calc(var(--gap) - var(--line) + 1px),
			var(--color) var(--gap)
		),
		linear-gradient(
			0deg,
			transparent calc(var(--gap) - var(--line)),
			var(--color) calc(var(--gap) - var(--line) + 1px),
			var(--color) var(--gap)
		);
	background-size: var(--gap) var(--gap);

	.container {
		background: linear-gradient(
			90deg,
			rgba(10, 109, 255, 1) 0%,
			rgba(131, 58, 180, 1) 33%,
			rgba(253, 29, 29, 1) 64%,
			rgba(252, 176, 69, 1) 100%
		);
		background-clip: text;
		color: transparent;

		font-size: var(--step-7);
		font-weight: 700;
	}
}
</style>
