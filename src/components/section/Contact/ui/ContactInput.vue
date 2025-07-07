<script setup lang="ts">
const props = defineProps<{
	id: string
	label: string
	type: string
	modelValue: string
	error: string
}>()

defineEmits(['update:modelValue'])
</script>

<template>
	<div :class="$style.inputWrapper">
		<label :for="props.id">{{ props.label }}</label>
		<input
			:id="props.id"
			:type="props.type"
			:value="props.modelValue"
			:class="[
				$style.input,
				{ [$style.errorInput]: props.error },
			]"
			@input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
		>
		<p v-if="props.error" :class="$style.errorText">
			{{ props.error }}
		</p>
	</div>
</template>

<style lang="scss" module>
.inputWrapper {
	display: flex;
	flex-direction: column;
	gap: var(--space-xs);

	label {
		margin-bottom: calc(var(--space-2xs) * -1);

		font-size: var(--step--1);
		font-weight: 500;
	}

	.input {
		padding-block: var(--space-2xs);
		padding-inline: var(--space-xs);

		transition: all 0.4s ease;

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
