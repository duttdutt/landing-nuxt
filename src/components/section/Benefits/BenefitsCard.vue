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

	color: #fff;

	.header {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--space-2xs);

		svg {
			color: #fc5245;
			height: var(--step-1);
		}

		.text {
			text-wrap: balance;
			font-weight: 700;
			font-size: var(--step-2);
		}
	}

	.body {
		text-wrap: balance;
		font-size: var(--step-0);
		line-height: 1.3;
		font-weight: 500;
	}
}
</style>
