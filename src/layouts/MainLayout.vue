<template>
	<div :class="$style.wrapper">
		<Navbar />
		<slot />
		<Footer />
	</div>
</template>

<style lang="scss" module>
.wrapper {
	width: 100vw;
	min-width: 400px;
}
</style>
