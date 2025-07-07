<script setup lang="ts">
function scrollToContactSection() {
	const target = document.getElementById('contact') as HTMLElement

	if (target)
		target.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
	<article :class="$style.wrapper">
		<h3 :class="$style.mainHeading">
			<IconCircle />
		</h3>
		<div :class="$style.container">
			<div :class="$style.containerTop">
				<h4 :class="$style.secondHeading">
					90<sup>%</sup>
				</h4>
				<p :class="$style.text1">
					Более 90% наших клиентов рекомендуют нашу экипировку как надёжную основу для прогресса в тренировках.
				</p>
			</div>
			<p :class="$style.text2">
				Наша продукция помогает развивать сильных и уверенных спортсменов. Каждая модель разрабатывается с учётом реальных задач и тестируется в условиях высокой нагрузки.
			</p>
			<button
				type="button"
				:class="$style.buttonContainer"
				@click="scrollToContactSection"
			>
				Попробуй нашу экипировку
			</button>
		</div>
	</article>
</template>

<style lang="scss" module>
.wrapper {
	color: #fff;
	background-color: #3f0e0f;

	.mainHeading {
		display: flex;
		align-items: center;
		gap: var(--space-2xs);

		height: var(--space-xl);

		background-color: #ed1c29;
		font-size: var(--step-1);

		svg {
			margin-left: 1rem;
			height: 1rem;
		}
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		padding: var(--space-m);

		.containerTop {
			.secondHeading {
				display: flex;
				align-items: center;

				font-size: var(--step-6);
				font-weight: 800;

				sup {
					font-size: var(--step-4);
				}
			}

			.text1 {
				font-size: var(--step-3);
				text-wrap: balance;
				font-weight: 700;
				line-height: 1.4;
			}
		}

		.buttonContainer {
			padding: var(--space-3xs) var(--space-2xs);
			margin-top: var(--space-l);

			transition: border-color 0.3s;
			cursor: pointer;

			font-family: 'Montserrat', sans-serif;
			font-size: 1.5rem;
			font-weight: 700;
			border: 1px solid #ed1b2a;
			color: #fff;
			background-color: #ed1b2a;

			&:hover {
				border-color: #fff;
			}
		}
	}
}
</style>
