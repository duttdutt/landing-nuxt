<template>
	<footer :class="$style.footerRoot">
		<div :class="$style.container">
			GlovBox
		</div>
	</footer>
</template>

<style module lang="scss">
@use 'sass:color';

.footerRoot {
	--gap: 5px;
	--line: 1px;

	display: flex;
	align-items: center;
	justify-content: center;

	height: 100vh;

	user-select: none;

	background: var(--color-black);
	background-image:
		linear-gradient(
			-90deg,
			transparent calc(var(--gap) - var(--line)),
			var(--color-gray) calc(var(--gap) - var(--line) + 1px),
			var(--color-gray) var(--gap)
		),
		linear-gradient(
			0deg,
			transparent calc(var(--gap) - var(--line)),
			var(--color-gray) calc(var(--gap) - var(--line) + 1px),
			var(--color-gray) var(--gap)
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
