<script setup lang="ts">
import { BENEFITS_ITEMS } from '@/constants/section_benefits'
import BenefitsBlock from './BenefitsBlock.vue'
import BenefitsCard from './BenefitsCard.vue'
</script>

<template>
	<section
		id="benefits"
		:class="$style.benefitsSection"
	>
		<div :class="$style.benefitsTop">
			<div :class="$style.benefintsBadge">
				<span>Путь создания</span>
			</div>
			<span :class="$style.benefintsPreHeading">
				Шаг за шагом
			</span>
			<h1 :class="$style.benefitsHeading">
				Знай, <em>что</em> ты получишь и<br><em>как</em> мы это сделаем.
			</h1>
		</div>
		<div :class="$style.benefits">
			<ol
				:class="$style.benefitsList"
			>
				<BenefitsCard
					v-for="item of BENEFITS_ITEMS"
					:key="item.id"
					:title="item.title"
					:description="item.description"
				/>
			</ol>
		</div>
		<div :class="$style.benefitsBlock">
			<BenefitsBlock />
			<BenefitsBlock />
		</div>
	</section>
</template>

<style module lang="scss">
.benefitsSection {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: var(--space-l);

	min-height: 100vh;
	padding: var(--space-m);

	background-color: #0b0b0b;

	& *::selection {
		background-color: #fc5245;
		color: #fff;
	}

	@media (max-width: 480px) {
		gap: var(--space-xs);
		min-height: 80vh;
	}

	.benefitsTop {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;

		margin-block: var(--space-m);

		.benefintsBadge {
			display: inline-block;
			padding: 0.25em 1em;
			margin-bottom: 1em;

			user-select: none;

			text-transform: uppercase;
			background-color: #fc5245;
			border-radius: 1em;
			font-weight: 700;
			font-size: var(--step--1);
		}

		.benefintsPreHeading {
			color: #fc5245;
			font-weight: 600;
			font-size: var(--step-3);
			padding-bottom: var(--space-xs);
		}

		.benefitsHeading {
			color: var(--c-white);
			font-size: var(--step-5);
		}
	}

	.benefitsList {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
		grid-gap: 2rem;
	}

	.benefitsBlock {
		--gutter: var(--space-m);
		--grid-placement: auto-fit;
		--grid-min-item-size: clamp(20rem, 30vw, 33rem);

		display: grid;
		grid-template-columns: repeat(var(--grid-placement, auto-fill), minmax(var(--grid-min-item-size, 16rem), 1fr));
		grid-gap: var(--space-m);
	}
}
</style>
