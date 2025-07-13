<template>
	<div :class="$style.wrapper">
		<div id="we" />
		<Header />
		<slot />
		<Footer />
	</div>
</template>

<style lang="scss" module>
.wrapper {
	min-height: 100vh;
	width: 100%;

	#we {
		position: absolute;
		top: 0;
	}
}
</style>
