<template>
	<span :class="$style.languageWrapper">
		English (US)
	</span>
</template>

<style lang="scss" module>
.languageWrapper {
	margin-right: 0.35rem;

	font-size: 0.85rem;

	@media (max-width: 1000px) {
		display: none;
	}
}
</style>
