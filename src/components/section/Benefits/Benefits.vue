<script setup lang="ts">
import BenefitsBlock from './BenefitsBlock.vue'
import BenefitsCard from './BenefitsCard.vue'

const { t } = useI18n()

const benefitsItems = computed(() =>
	Array.from({ length: 6 }, (_, index) => {
		const id = index + 1
		return {
			id,
			title: t(`benefits.items.${id}.title`),
			description: t(`benefits.items.${id}.description`),
		}
	}),
)
</script>

<template>
	<section id="benefits" :class="$style.benefitsSection">
		<div :class="$style.benefitsTop">
			<div :class="$style.benefintsBadge">
				<span>{{ $t("benefits.badge") }}</span>
			</div>
			<span :class="$style.benefintsPreHeading">
				{{ $t("benefits.heading") }}
			</span>
			<h1 :class="$style.benefitsHeading">
				{{ $t("benefits.motivation.part1") }}<em>{{ $t("benefits.motivation.part2") }}</em>{{
					$t("benefits.motivation.part3") }}<br><em>{{ $t("benefits.motivation.part4") }}</em>{{
					$t("benefits.motivation.part5") }}
			</h1>
		</div>
		<div :class="$style.benefits">
			<ol :class="$style.benefitsList">
				<BenefitsCard
					v-for="item of benefitsItems"
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

	background-color: var(--bg-benefits);

	& *::selection {
		background-color: var(--color-orange);
		color: var(--color-white);
	}

	@media (max-width: 480px) {
		padding: var(--space-xs);
		gap: var(--space-xs);
		min-height: 80vh;
		padding: 0;
	}

	.benefitsTop {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;

		.benefintsBadge {
			display: inline-block;
			padding: 0.25em 1em;
			margin-bottom: 1em;

			user-select: none;

			color: var(--color-white);
			background-color: var(--color-orange);
			font-weight: 700;
			font-size: var(--step--1);
			text-transform: uppercase;
			border-radius: 1em;
		}

		.benefintsPreHeading {
			padding-bottom: var(--space-xs);

			color: var(--color-orange);
			font-weight: 600;
			font-size: var(--step-3);
		}

		.benefitsHeading {
			color: var(--text-benefits);
			font-size: var(--step-5);
		}
	}

	.benefitsList {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 18rem), 1fr));
		gap: var(--space-m);

		@media (max-width: 360px) {
			gap: var(--space-s);
		}
	}

	.benefitsBlock {
		gap: var(--space-m);

		grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem), 1fr));

		@media (max-width: 360px) {
			gap: var(--space-s);
		}
	}
}

em {
	font-style: italic;
}
</style>
