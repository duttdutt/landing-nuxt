<script setup lang="ts">
import ContactButton from './ContactButton.vue'

const emit = defineEmits(['close'])
</script>

<template>
	<div :class="$style.modalOverlay">
		<div :class="$style.modalContent">
			<h2>Успешно!</h2>
			<p>Ваше сообщение отправлено. Мы скоро свяжемся с вами.</p>
			<ContactButton
				type="button"
				@click="emit('close')"
			>
				ОК
			</ContactButton>
		</div>
	</div>
</template>

<style lang="scss" module>
.modalOverlay {
	display: flex;
	justify-content: center;
	align-items: center;

	position: fixed;
	inset: 0;
	z-index: 1000;
	backdrop-filter: blur(5px);

	color: var(--text-primary);
	background: rgba(0, 0, 0, 0.4);

	.modalContent {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		width: 100%;
		max-width: 600px;
		padding: 2rem;

		background: var(--bg-primary);
		border-radius: 12px;
		text-align: center;
	}
}
</style>
