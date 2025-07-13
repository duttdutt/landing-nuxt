<script setup lang="ts">
const props = defineProps<{
	modelValue: string
	error: string
	id?: string
	label?: string
}>()

defineEmits(['update:modelValue'])
</script>

<template>
	<label for="message">
		{{ props.label }}
	</label>
	<textarea
		id="message" rows="5" :value="props.modelValue" :class="{ [$style.error]: props.error }"
		@input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
	/>
	<p v-if="props.error" :class="$style.errorText">
		{{ props.error }}
	</p>
</template>

<style lang="scss" module>
label {
	margin-bottom: calc(var(--space-2xs) * -1);

	font-size: var(--step--1);
	font-weight: 500;
}

textarea {
	padding-block: var(--space-2xs);
	padding-inline: var(--space-xs);

	resize: none;
	transition: all 0.4s ease;

	font-family: inherit;
	font-size: var(--step--1);
	color: var(--text-primary);
	background: var(--bg-input);
	border: 1px solid var(--border-input);
	border-radius: 4px;

	&:hover {
		border-color: var(--border-input-hover);
	}

	&:focus,
	&:focus-visible {
		outline: none;

		border-color: var(--border-input-focus);
		caret-color: var(--caret-color);
	}
}

.errorInput {
	border-color: var(--color-red);
}

.errorText {
	margin-top: calc(var(--space-2xs) * -1);

	font-size: var(--step--2);
	color: var(--color-red);
}
</style>
