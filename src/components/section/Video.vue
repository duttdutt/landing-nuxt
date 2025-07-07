<script>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'VideoBackground',
})
</script>

<template>
	<section>
		<div class="video-background">
			<video autoplay loop muted class="video">
				<source src="~/assets/video/Video.mp4">
				Your browser does not support the video tag.
			</video>
			<div class="overlay" @click="test">
				<div class="overlay-title">
					Лучшие используют,<br>исключительно лучшее.
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
section {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5rem;
	background-color: var(--c-black);

	@media (max-width: 480px) {
		padding: 1.5rem;
	}
}

.video-background {
	height: 100vh;
	width: 90vw;

	position: relative;
	overflow: hidden;

	border-radius: 8px;
}

.video {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 100%;
	height: 100%;

	object-fit: cover;
	transform: translate(-50%, -50%);
	z-index: 1;
}

.overlay {
	position: relative;
	z-index: 2;
	color: white;
	text-align: center;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #00000000;
	backdrop-filter: blur(8px);
	padding: 2rem 0rem;
	width: 100%;
	height: fit-content;

	@media (max-width: 768px) {
		left: 50%;
		transform: translate(-50%, -50%);
	}

	@media (max-width: 480px) {
		left: 50%;
		transform: translate(-50%, -50%);
	}
}

.overlay-title {
	color: var(--color-primary);
	font-size: var(--step-5);
	font-weight: 700;
	// white-space: nowrap;
}

h1 {
	margin: 0;
	font-size: 3rem;
	font-weight: 600;
}
</style>
