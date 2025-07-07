<script setup lang="ts">
import { ref } from 'vue'
import Heading from '@/components/ui/Heading.vue'
import Card from './Card.vue'

interface ImageItem { src: string, alt: string, title: string, description: string }
const images = ref<ImageItem[]>([
	{ src: new URL('@/assets/images/Gloves_Second.webp', import.meta.url).href, alt: 'Боксерские перчатки', title: 'Боксерские перчатки', description: 'Профессиональные боксерские перчатки из качественной искусственной кожи. Обеспечивают защиту рук и оптимальный уровень амортизации при ударах.' },
	{ src: new URL('@/assets/images/Punching_Bag.webp', import.meta.url).href, alt: 'Боксерская груша', title: 'Боксерская груша', description: 'Прочная настенная груша с усиленной строчкой швов. Идеальна для тренировок на силу и выносливость, выдерживает интенсивные удары.' },
	{ src: new URL('@/assets/images/Dumbbels.webp', import.meta.url).href, alt: 'Набор гантелей', title: 'Набор гантелей', description: 'Регулируемые гантели с фиксирующими замками. Отличный выбор для домашних тренировок: легко менять вес для разных упражнений.' },
	{ src: new URL('@/assets/images/Yoga.webp', import.meta.url).href, alt: 'Йога-мат', title: 'Йога-мат', description: 'Удобный нескользящий мат толщиной 6 мм для занятий йогой и фитнесом. Лёгкий и компактный, легко сворачивается и транспортируется.' },
	{ src: new URL('@/assets/images/Rope.webp', import.meta.url).href, alt: 'Скакалка', title: 'Скакалка', description: 'Регулируемая скоростная скакалка с подшипниками. Отлично подходит для кардиотренировок и разминки перед основной нагрузкой.' },
	{ src: new URL('@/assets/images/Rashguard.webp', import.meta.url).href, alt: 'Фитнес-резинка', title: 'Фитнес-резинка', description: 'Набор эспандеров разной степени сопротивления. Идеальны для растяжки, силовых и реабилитационных упражнений.' },
])
</script>

<template>
	<section id="goods" :class="$style.gallerySection">
		<Heading title="Товары" mode="black" />
		<div :class="$style.wrapper">
			<ul :class="$style.autoGrid">
				<Card
					v-for="(image, idx) in images"
					:key="idx"
					:src="image.src"
					:alt="image.alt"
					:title="image.title"
					:description="image.description"
				/>
			</ul>
		</div>
		<div :class="$style.additionalText">
			И многое другое...
		</div>
	</section>
</template>

<style module lang="scss">
.gallerySection {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: var(--space-l);

	padding: var(--space-l);

	background-color: #fff;

	h3 {
		padding-inline: var(--space-xs);

		background-color: #000;
		color: #fff;
	}

	.wrapper {
		max-width: 75vw;
		margin: 0 auto;
		padding: 0 1rem;
	}

	.additionalText {
		padding-block: var(--space-m);
		font-size: var(--step-3);
		font-weight: 800;
	}
}

.autoGrid > * {
	max-width: 25rem;
	margin-left: auto;
	margin-right: auto;
}

.autoGrid > * + * {
	margin-top: 1rem;
}

@supports (display: grid) {
	.autoGrid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size, 16rem), 1fr));
		grid-gap: 1rem;
	}

	.autoGrid > * {
		max-width: unset;
		margin: unset;
	}
}
</style>
