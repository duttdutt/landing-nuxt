<script setup lang="ts">
import { computed } from 'vue'
import IconEn from '@/components/ui/icons/IconEn.vue'
import IconRu from '@/components/ui/icons/IconRu.vue'

const { locale } = useI18n()

const switchLocalePath = useSwitchLocalePath()

const isRu = computed(() => locale.value.startsWith('ru'))
const currentIcon = computed(() => (isRu.value ? IconRu : IconEn))
const nextCode = computed(() => (isRu.value ? 'en' : 'ru'))

function toggleLocale() {
	navigateTo(switchLocalePath(nextCode.value))
}
</script>

<template>
	<button
		:class="$style.languageToggle"
		type="button"
		aria-label="Переключение языка"
		@click="toggleLocale"
	>
		<component :is="currentIcon" />
	</button>
</template>

<style module lang="scss">
@use '@/assets/scss/_variables' as *;

.languageToggle {
	display: inline-flex;
	align-items: center;
	justify-content: center;

	width: 2.3rem;
	height: 2.3rem;

	cursor: pointer;

	transition: background-color 0.3s ease;

	background-color: var(--bg-primary);
	border: 1px solid var(--border-primary);
	border-radius: 8px;

	&:hover {
		background-color: var(--border-primary);
	}

	&:focus-visible {
		outline: 2px solid var(--color-primary);
		outline-offset: 2px;
	}

	& svg {
		width: 1.5rem;
	}
}
</style>
