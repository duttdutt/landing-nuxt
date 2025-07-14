<script setup lang="ts">
import IconArrowLink from '../ui/icons/IconArrowLink.vue'
import UnderlineText from '../ui/UnderlineText.vue'
</script>

<template>
	<section :class="$style.heroRoot">
		<div :class="$style.wrapper">
			<div :class="$style.innerWrapper">
				<div :class="$style.grid">
					<h1 :class="$style.heading">
						<mark>{{ $t('hero.primary_heading') }}</mark>
						<span>
							<i18n-t keypath="hero.secondary_heading">
								<UnderlineText>{{ $t('hero.secondary_heading_underline_part1') }}</UnderlineText>
								<UnderlineText>{{ $t('hero.secondary_heading_underline_part2') }}</UnderlineText>
							</i18n-t>
						</span>
					</h1>
					<p :class="$style.description">
						<span>{{ $t('hero.description_part1') }}</span>
						<span>{{ $t('hero.description_part2') }}</span>
					</p>
					<div :class="$style.buttons">
						<nuxt-link :class="$style.buttonLink" to="#contact">
							<span>{{ $t('button.toOrder') }}</span>
							<IconArrowLink />
						</nuxt-link>
						<nuxt-link :class="$style.buttonLink" to="#goods">
							<span>{{ $t('button.goods') }}</span>
							<IconArrowLink />
						</nuxt-link>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" module>
.heroRoot {
	word-wrap: break-word;
	overflow-wrap: break-word;
	hyphens: auto;
	width: 100%;

	.wrapper {
		max-width: 1680px;
		padding-inline: var(--space-2xs);
		width: 100%;
		margin-bottom: var(--space-2xs);
		margin-inline: auto;

		position: relative;

		.innerWrapper {
			padding-inline: var(--space-3xl);
			padding-block: var(--space-l);

			background-color: var(--bg-blue);

			@media (max-width: 768px) {
				padding-inline: var(--space-l);
			}

			@media (max-width: 480px) {
				padding-inline: var(--space-s); // или даже 0.5rem
				padding-block: var(--space-s);
			}
		}
	}
}

.grid {
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: var(--space-m);

	@media (min-width: 768px) {
		align-items: start;
		grid-template-columns: auto 1fr;
	}

	.heading {
		display: flex;
		flex-direction: column;
		gap: var(--space-l);

		max-width: 20ch;

		font-weight: 700;
		font-size: var(--step-4);
		text-wrap: balance;

		mark {
			background-color: var(--bg-mark);
			color: var(--text-hero-primary);
		}

		span {
			font-size: var(--step-2);
			color: var(--text-hero-secondary);
		}
	}

	.description {
		display: flex;
		flex-direction: column;

		gap: var(--space-xs);
		font-weight: 600;

		text-wrap: balance;
		font-style: italic;
		font-size: var(--step-1);
		color: var(--text-hero-secondary);
	}

	.buttons {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: flex-start;
		gap: var(--space-xs);

		.buttonLink {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			gap: var(--space-2xs);
			flex: 1 1 auto;

			min-width: 120px;
			padding: var(--space-xs) var(--space-xs-s);

			cursor: pointer;
			transition: all 0.2s;

			border: 1px solid var(--color-white);
			text-decoration: none;
			color: #fff;
			font-size: var(--step--1);
			font-weight: 800;
			text-transform: uppercase;
			letter-spacing: 1px;
			user-select: none;

			@media (max-width: 480px) {
				font-size: 0.75rem;
				padding: 0.5rem;
			}

			&:active > svg {
				transform: scale(1.3);
			}

			&:first-child {
				background-color: var(--color-white);
				color: #000;

				&:hover {
					background-color: transparent;
					color: var(--color-white);
				}
			}

			&:last-child {
				background-color: transparent;
				color: var(--color-white);

				&:hover {
					background-color: var(--color-white);
					color: var(--color-black);
				}
			}
		}
	}
}
</style>
