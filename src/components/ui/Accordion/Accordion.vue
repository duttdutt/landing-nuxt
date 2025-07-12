<script setup lang="ts">
interface AccordionProps {
	question: string
	isOpen: boolean
	id: number
}

const props = defineProps<AccordionProps>()
const emit = defineEmits<{
	(e: 'toggleAnswer', id: number): void
}>()

function handleClick() {
	emit('toggleAnswer', props.id)
}
</script>

<template>
	<div :class="$style.accordionWrapper">
		<div :class="$style.accordionHeader" role="button" tabindex="0" @click="handleClick" @keyup.enter="handleClick">
			<div :class="$style.accordionHeaderRight">
				<div :class="$style.accordionNumber">
					0{{ props.id + 1 }}
				</div>
				<div :class="$style.accordionQuestion">
					{{ props.question }}
				</div>
			</div>
			<div :class="[$style.accordionIcon, props.isOpen ? $style.open : '']" />
		</div>
		<div :class="[$style.accordionBody, props.isOpen ? $style.open : '']">
			<div :class="$style.accordionAnswer">
				<slot />
			</div>
		</div>
	</div>
</template>

<style lang="scss" module>
.accordionWrapper {
	.accordionHeader {
		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: var(--step--2);

		cursor: pointer;

		font-size: var(--step-0);
		font-weight: 700;
		border-top: 1px solid var(--border-faq);

		&:hover > .accordionIcon {
			background-color: var(--bg-faq-hover);
		}

		&:hover > .accordionHeaderRight > .accordionNumber {
			color: var(--color-white);
		}

		.accordionHeaderRight {
			display: flex;
			flex: 1;
			justify-content: flex-start;
			align-items: center;
			gap: var(--step--1);

			.accordionNumber {
				display: flex;
				justify-content: center;
				align-items: center;

				height: var(--space-l);
				width: var(--space-l);
				min-width: var(--space-l);

				transition: color 0.25s ease;

				background-color: var(--text-faq-number);
				color: var(--bg-faq);
			}

			.accordionQuestion {
				transition: all 0.75s ease;
			}
		}

		.accordionIcon {
			display: flex;
			justify-content: center;
			align-items: center;

			width: var(--space-m);
			height: var(--space-m);

			position: relative;
			transition: background-color 0.25s ease;

			border: 1px solid var(--text-faq-number);
			border-radius: 50%;

			&::before {
				position: absolute;
				content: '';

				height: var(--step--1);
				width: 0.1rem;

				transition: all 0.2s ease;
				transform: rotate(180deg);
				opacity: 1;

				background-color: var(--text-faq-number);
			}

			&::after {
				position: absolute;
				content: '';

				height: 0.09rem;
				width: var(--step--1);

				background-color: var(--text-faq-number);
			}

			&.open::before {
				opacity: 0;
			}
		}
	}

	.accordionBody {
		max-height: 0;

		overflow-y: hidden;
		transition:
			max-height 0.5s ease,
			opacity 0.2s ease;
		opacity: 0;

		line-height: 1.5;
		background-color: var(--bg-faq);

		.accordionAnswer {
			padding-inline: var(--step-2);
			padding-block: var(--step--2);

			color: var(--text-faq);
			font-size: var(--step--1);
		}

		&.open {
			max-height: var(--space-3xl) + 100px;

			opacity: 1;
		}
	}
}
</style>
