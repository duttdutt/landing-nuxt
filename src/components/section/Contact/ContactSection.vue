<script setup lang="ts">
import { ref } from 'vue'
import ContactBlockLeft from './blocks/ContactBlockLeft.vue'
import ContactBlockRight from './blocks/ContactBlockRight.vue'
import ContactModal from './ui/ContactModal.vue'

const isModalOpen = ref(false)

function closeModal() {
	isModalOpen.value = false
}
</script>

<template>
	<ContactModal v-if="isModalOpen" @close="closeModal" />

	<section id="contact" :class="$style.contactSection">
		<div :class="$style.container">
			<ContactBlockLeft v-model:modal="isModalOpen" />
			<ContactBlockRight />
		</div>
	</section>
</template>

<style module lang="scss">
.contactSection {
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 120vh;

	color: var(--text-primary);
	background-color: var(--bg-primary);
	font-size: var(--step--1);

	& > div {
		max-width: 70vw;
	}

	.container {
		display: flex;
		flex-direction: row;
		gap: var(--space-l);

		@media (max-width: 768px) {
			flex-direction: column-reverse;
		}
	}
}
</style>
