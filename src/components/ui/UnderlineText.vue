<template>
	<em :class="$style.underlineWrapper">
		<slot />
	</em>
</template>

<style module lang="scss">
.underlineWrapper {
	text-decoration: underline;
	text-decoration-color: var(--color-orange);
	text-decoration-thickness: 0.2rem;
	text-underline-offset: 0.2rem;
}
</style>
