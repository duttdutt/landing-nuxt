<script setup lang="ts">
import Heading from '@/components/ui/Heading.vue'
import { GOODS_IMAGES } from '@/constants/goods'
import Card from './Card.vue'

const { t } = useI18n()

const images = computed(() =>
	GOODS_IMAGES.map(image => ({
		src: image.src,
		alt: image.alt,
		title: t(`goods.items.${image.key}.title`),
		description: t(`goods.items.${image.key}.description`),
	})),
)
</script>

<template>
	<section id="goods" :class="$style.gallerySection">
		<Heading :title="t('goods.heading')" mode="black" />
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
			{{ t('goods.additional') }}
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

	@media (max-width: 480px) {
		--auto-grid-min-size: 12rem;
	}
	@media (max-width: 360px) {
		--auto-grid-min-size: 10rem;
	}

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
		gap: 1rem;
	}

	.autoGrid > * {
		max-width: unset;
		margin: unset;
	}
}
</style>
