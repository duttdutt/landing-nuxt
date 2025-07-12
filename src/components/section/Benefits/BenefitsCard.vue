<script setup lang="ts">
import IconCircle from '@/components/ui/icons/IconCircle.vue'

defineProps<{
	title: string
	description: string
}>()
</script>

<template>
	<li :class="$style.wrapper">
		<div :class="$style.header">
			<IconCircle />
			<div :class="$style.text">
				{{ title }}
			</div>
		</div>
		<p :class="$style.body">
			{{ description }}
		</p>
	</li>
</template>

<style lang="scss" module>
.wrapper {
	display: flex;
	flex-direction: column;
	gap: var(--space-2xs);

	padding-bottom: 20px;
	margin: var(--space-2xs);

	color: var(--text-benefits);

	.header {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--space-2xs);

		svg {
			color: var(--color-orange);
			height: var(--step-1);
		}

		.text {
			text-wrap: balance;
			font-size: var(--step-2);
			font-weight: 700;
		}
	}

	.body {
		text-wrap: balance;
		font-size: var(--step-0);
		font-weight: 500;
		line-height: 1.3;
	}
}
</style>
