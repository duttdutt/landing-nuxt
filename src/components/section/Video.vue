<script>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'VideoBackground',
})
</script>

<template>
	<section :class="$style.videoRoot">
		<div :class="$style.videoBackground">
			<video :class="$style.video" autoplay loop muted>
				<source src="~/assets/video/Video.mp4">
				Your browser does not support the video tag.
			</video>
			<div :class="$style.overlay" @click="test">
				<div :class="$style.overlayTitle">
					{{ $t("video.line1") }}<br>{{ $t("video.line2") }}
				</div>
			</div>
		</div>
	</section>
</template>

<style module lang="scss">
.videoRoot {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5rem;
	background-color: var(--c-black);

	@media (max-width: 480px) {
		padding: 0;
		margin: 0 0 2rem 0;
	}

	@media (max-width: 768px) {
		padding: 0;
		margin-top: var(--space-l);
	}
}

.videoBackground {
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

.overlayTitle {
	color: var(--color-primary);
	font-size: var(--step-5);
	font-weight: 700;
}
</style>
