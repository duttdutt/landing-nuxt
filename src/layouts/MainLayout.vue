<template>
	<div :class="$style.wrapper">
		<Header />
		<slot />
		<Footer />
	</div>
</template>

<style lang="scss" module>
.wrapper {
	min-height: 100vh;
	width: 100%;
}
</style>
