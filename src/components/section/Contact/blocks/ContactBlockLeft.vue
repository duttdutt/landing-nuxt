<script setup lang="ts">
import { ref } from 'vue'
import ContactButton from '../ui/ContactButton.vue'
import ContactInput from '../ui/ContactInput.vue'
import ContactTextarea from '../ui/ContactTextarea.vue'

const emit = defineEmits<{
	(e: 'update:modal', value: boolean): void
}>()
const { t } = useI18n()
const submitted = ref(false)
const form = ref({ name: '', phone: '', email: '', message: '' })
const errors = ref({ name: '', phone: '', email: '', message: '' })

function validate() {
	const { name, phone, email, message } = form.value

	errors.value.name = name.trim() ? '' : t('contact.errors.name')
	errors.value.phone = /^\+?\d{10,15}$/.test(phone) ? '' : t('contact.errors.phone')
	errors.value.email = email
		? (/^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/.test(email) ? '' : t('contact.errors.email'))
		: ''
	errors.value.message = message.trim() ? '' : t('contact.errors.message')

	return !errors.value.name && !errors.value.phone && !errors.value.email && !errors.value.message
}

async function submitInfo() {
	submitted.value = true

	if (!validate())
		return

	try {
		const { error } = await useFetch('/api/telegram', {
			method: 'POST',
			body: {
				name: form.value.name,
				phone: form.value.phone,
				message: form.value.message,
			},
		})

		if (error.value) {
			console.warn(`Ошибка отправки: ${error.value.message}`)
		}
		else {
			emit('update:modal', true)
			form.value = { name: '', phone: '', email: '', message: '' }
			submitted.value = false
		}
	}
	catch (e) {
		console.error('Ошибка сети. Попробуйте ещё раз.', e)
	}
}
</script>

<template>
	<div :class="$style.left">
		<form :class="$style.contactForm" @submit.prevent="submitInfo">
			<ContactInput
				id="name"
				v-model="form.name"
				:label="$t('contact.form.name')"
				type="text"
				:error="submitted ? errors.name : ''"
			/>
			<ContactInput
				id="phone"
				v-model="form.phone"
				:label="$t('contact.form.phone')"
				type="text"
				:error="submitted ? errors.phone : ''"
			/>
			<ContactInput
				id="email"
				v-model="form.email"
				:label="$t('contact.form.email')"
				type="email"
				:error="submitted ? errors.email : ''"
			/>
			<ContactTextarea
				id="message"
				v-model="form.message"
				:label="$t('contact.form.submit')"
				:error="submitted ? errors.message : ''"
			/>
			<div :class="$style.buttonForm">
				<ContactButton type="submit">
					{{ $t('contact.form.submit') }}
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
