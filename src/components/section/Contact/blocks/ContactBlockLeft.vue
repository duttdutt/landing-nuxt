<script setup lang="ts">
import { ref } from 'vue'
import ContactButton from '../ui/ContactButton.vue'
import ContactInput from '../ui/ContactInput.vue'
import ContactTextarea from '../ui/ContactTextarea.vue'

const emit = defineEmits<{
	(e: 'update:modal', value: boolean): void
}>()

const submitted = ref(false)
const form = ref({ name: '', phone: '', email: '', message: '' })
const errors = ref({ name: '', phone: '', email: '', message: '' })

function validate() {
	const { name, phone, email, message } = form.value

	errors.value.name = name.trim() ? '' : 'Введите имя'
	errors.value.phone = /^\+?\d{10,15}$/.test(phone) ? '' : 'Неверный формат телефона'
	errors.value.email = email
		? (/^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/.test(email) ? '' : 'Неверный email')
		: ''
	errors.value.message = message.trim() ? '' : 'Введите сообщение'

	return !errors.value.name && !errors.value.phone && !errors.value.email && !errors.value.message
}

function submitInfo() {
	submitted.value = true
	if (validate()) {
		emit('update:modal', true)
	}
}
</script>

<template>
	<div :class="$style.left">
		<form :class="$style.contactForm" @submit.prevent="submitInfo">
			<ContactInput id="name" v-model="form.name" label="Как Вас зовут" type="text" :error="submitted ? errors.name : ''" />
			<ContactInput id="phone" v-model="form.phone" label="Телефон" type="text" :error="submitted ? errors.phone : ''" />
			<ContactInput id="email" v-model="form.email" label="Электронная почта" type="email" :error="submitted ? errors.email : ''" />
			<ContactTextarea id="message" v-model="form.message" label="Сообщение" :error="submitted ? errors.message : ''" />
			<div :class="$style.buttonForm">
				<ContactButton label="Связаться" size="lg" variant="outline" type="submit">
					Связаться
				</ContactButton>
			</div>
		</form>
	</div>
</template>

<style lang="scss" module>
.left {
	display: flex;
	flex-direction: column;
	gap: var(--space-xs);
	flex: 1;

	min-width: clamp(220px, 30vw, 400px);
	width: 100%;

	user-select: none;

	&::selection {
		background-color: var(--selection-color-input);
		color: var(--selection-bg-color-input);
	}

	.contactForm {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}
}
</style>
