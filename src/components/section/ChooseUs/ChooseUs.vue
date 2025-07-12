<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const lines = [
	'СТАНЬ СИЛЬНЕЕ.',
	'СТАНЬ ВЫНОСЛИВЕЕ.',
	'СТАНЬ НЕПОБЕДИМЫМ.',
	'ПРЕОДОЛЕЙ СВОИ ГРАНИЦЫ.',
	'СДЕЛАЙ ВЫБОР — ОН В ТВОИХ РУКАХ.',
]

const lineRefs = ref([])

function updateColors() {
	const viewportCenter = window.innerHeight / 2

	lineRefs.value.forEach((lineEl) => {
		const rect = lineEl.getBoundingClientRect()
		const elementTop = rect.top
		const elementBottom = rect.bottom
		const elementHeight = rect.height

		if (elementTop <= viewportCenter && elementBottom
			>= viewportCenter) {
			const progress = (viewportCenter - elementTop)
				/ elementHeight
			const red = Math.floor(255 - 216 * progress)
			const green = Math.floor(255 - 130 * progress)
			lineEl.style.color = `rgb(${red}, ${green}, 255)`
		}
		else if (elementBottom < viewportCenter) {
			lineEl.style.color = '#277DFF'
		}
		else {
			lineEl.style.color = '#f9fafb'
		}
	})
}

function handleScroll() {
	requestAnimationFrame(updateColors)
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
	window.addEventListener('resize', handleScroll)
	handleScroll()
})

onBeforeUnmount(() => {
	window.removeEventListener('scroll', handleScroll)
	window.removeEventListener('resize', handleScroll)
})
</script>

<template>
	<section :class="$style.chooseUs">
		<div :class="$style.wrapper">
			<div
				v-for="(line, index) in lines"
				:key="index"
				ref="lineRefs"
				:class="$style.line"
			>
				{{ line }}
			</div>
		</div>
	</section>
</template>

<style lang="scss" module>
.chooseUs {
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;

	margin: 0;

	width: 100%;
	height: 55vh;

	user-select: none;

	background-color: var(--bg-primary);
}

.line {
	padding: 0 2rem;

	font-size: var(--step-5);
	font-weight: 800;
	text-align: center;
}

@media (max-width: 1024px) {
	.chooseUs {
		margin-bottom: 10rem;
		height: 40vh;
	}
}

@media (max-width: 480px) {
	.chooseUs {
		min-width: 100vw;
		height: 30vh;
		margin-bottom: 5rem;
		padding: 2rem 1rem;
	}

	.line {
		padding: 0;

		font-size: 1.5rem !important;
	}
}
</style>
