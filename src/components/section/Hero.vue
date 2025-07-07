<script setup lang="ts"></script>

<template>
	<section id="we" :class="$style.heroSection">
		<div :class="$style.heroContainer">
			<div :class="$style.textContent">
				<h1 :class="$style.heroTitle">
					<span>Спортивное оборудование</span>
					<span>для любого клиента</span>
					<span>с качеством и заботой</span>
				</h1>
				<div :class="$style.heroDescription">
					Инвентарь и экипировка для любых целей — от домашних тренировок до профессиональных соревнований.
					Надёжное качество и широкий ассортимент для любого уровня подготовки.
				</div>
			</div>
		</div>
	</section>
</template>

<style module lang="scss">
.heroSection {
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	margin-top: 2rem;

	user-select: none;

	.heroContainer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		width: 70vw;

		@media (max-width: 992px) {
			width: 100vw;
			padding: var(--space-xs);
		}
	}
}

.textContent {
	display: flex;
	flex-direction: row;
	gap: var(--space-2xl);

	padding: 0rem;

	@media (max-width: 992px) {
		gap: var(--space-s);
	}

	@media (max-width: 576px) {
		flex-direction: column;
	}

	.heroTitle {
		display: flex;
		flex-direction: column;
		flex: 0 1 30%;

		cursor: default;

		color: var(--p-slate-0);
		font-size: var(--step-2);
		font-weight: 600;
		line-height: 1.2;
		white-space: nowrap;

		span {
			display: block;

			padding-left: var(--space-xs);

			transition: all 0.3s ease;

			border-left: 10px solid transparent;

			&:nth-child(1),
			&:nth-child(3) {
				color: var(--color-primary);
				border-left-color: var(--color-secondary);
			}

			&:nth-child(2) {
				color: var(--color-secondary);
				border-left-color: var(--color-primary);
			}
		}

		&:hover span {
			&:nth-child(1),
			&:nth-child(3) {
				color: var(--color-secondary);
				border-left-color: var(--color-primary);
			}

			&:nth-child(2) {
				color: var(--color-primary);
				border-left-color: var(--color-secondary);
			}
		}
	}

	.heroDescription {
		flex: 0 0 40%;

		color: var(--text-primary-muted);
		font-size: var(--step-0);
		line-height: 1.2;
		hyphens: auto;
	}
}
</style>
