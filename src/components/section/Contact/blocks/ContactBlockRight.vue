<script setup lang="ts">
import IconEmail from '@/components/ui/icons/IconEmail.vue'
import IconPhone from '@/components/ui/icons/IconPhone.vue'
</script>

<template>
	<div :class="$style.right">
		<div :class="$style.rightInfo">
			<h3>{{ $t('contact.heading') }}</h3>
			<div>{{ $t('contact.description.part1') }}</div>
			<div>{{ $t('contact.description.part2') }}</div>
			<div>{{ $t('contact.description.part3') }}</div>
		</div>
		<ul :class="$style.rightContacts">
			<li>
				<IconPhone />
				<span :class="$style.phone">+7 978 432 83 82</span>
			</li>
			<li>
				<IconEmail />
				<span :class="$style.email">glovbox@inbox.ru</span>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" module>
.right {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: var(--space-l);

	@media (max-width: 768px) {
		gap: var(--space-s);
	}

	.rightInfo {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);

		min-width: clamp(220px, 30vw, 400px);

		user-select: none;

		h3 {
			color: var(--text-primary);
			font-size: var(--step-4);
			font-weight: 700;
			word-break: break-word;
			hyphens: auto;

			@media (max-width: 600px) {
				font-size: var(--step-6);
			}
		}

		div {
			color: var(--text-primary-muted);
			font-size: var(--step--1);
			line-height: 1.2;
			word-break: break-word;
			hyphens: auto;
		}
	}

	.rightContacts {
		padding-bottom: var(--space-xl);

		@media (max-width: 768px) {
			padding-bottom: 0;
		}

		li {
			display: flex;
			align-items: center;

			margin-bottom: var(--space-xs);

			@media (max-width: 768px) {
				margin-bottom: var(--space-2xs);
			}

			&::selection {
				background-color: var(--selection-color);
				color: var(--color-white);
			}

			svg {
				margin-right: var(--space-2xs);

				height: var(--step-1);
				width: var(--step-1);
				color: var(--color-primary-lighter);
			}

			.phone,
			.email {
				font-size: var(--step--0);
				font-weight: 500;
			}
		}
	}
}
</style>
