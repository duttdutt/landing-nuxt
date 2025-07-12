<script setup lang="ts">
function scrollToContactSection() {
	const target = document.getElementById('contact') as HTMLElement

	if (target)
		target.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
	<section :class="$style.addinitialSection">
		<div :class="$style.infoWrapper">
			<p :class="$style.info">
				<span
					:class="$style.firstSpan"
					tabindex="-1"
					role="link"
					@click="scrollToContactSection"
					@keyup.enter="scrollToContactSection"
				>{{ $t('additional_info.wholesale') }}</span>
				{{ $t('additional_info.connection') }}
				<span
					:class="$style.secondSpan"
					tabindex="-1"
					role="link"
					@click="scrollToContactSection"
					@keyup.enter="scrollToContactSection"
				>{{ $t('additional_info.retail') }}</span> {{ $t('additional_info.last_part') }}
			</p>
		</div>
	</section>
</template>

<style module lang="scss">
.addinitialSection {
	margin-block: var(--space-3xs);

	min-width: 100%;
	padding-inline: var(--space-xs);
	padding-block: var(--space-s);

	user-select: none;
}

.infoWrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: var(--space-m);

	padding: var(--space-s);

	transition: 0.3s all;

	border: 1px solid var(--bg-blue);
	color: var(--text-primary);

	.info {
		font-size: var(--step-0);
		line-height: 1.35;
		word-break: break-word;
		text-wrap: balance;
		font-weight: 600;

		.firstSpan,
		.secondSpan {
			transition: all 0.2s;
		}

		.firstSpan:hover,
		.secondSpan:hover {
			cursor: pointer;
		}

		.firstSpan {
			padding-inline: var(--space-3xs);
			padding-block: var(--space-3xs);

			text-transform: uppercase;

			background-color: var(--color-orange);
			color: var(--color-white);
			font-weight: 800;

			&:hover {
				background-color: var(--color-white);
				color: var(--color-orange);
			}
		}

		.secondSpan {
			padding-inline: var(--space-3xs);
			padding-block: var(--space-3xs);

			text-transform: uppercase;

			background-color: var(--color-primary);
			color: var(--color-white);
			font-weight: 800;

			&:hover {
				background-color: var(--color-white);
				color: var(--color-primary);
			}
		}
	}
}
</style>
