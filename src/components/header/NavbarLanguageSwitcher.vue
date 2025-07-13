<script setup lang="ts">
import { computed } from 'vue'
import IconEn from '@/components/ui/icons/IconEn.vue'
import IconRu from '@/components/ui/icons/IconRu.vue'
import LanguageLabelEn from '../ui/text/LanguageLabelEn.vue'
import LanguageLabelRu from '../ui/text/LanguageLabelRu.vue'

const { locale } = useI18n()

const switchLocalePath = useSwitchLocalePath()

const isRu = computed(() => locale.value.startsWith('ru'))
const currentLanguage = computed(() => (isRu.value ? LanguageLabelEn : LanguageLabelRu))
const currentIcon = computed(() => (isRu.value ? IconEn : IconRu))
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
		<component :is="currentLanguage" />
		<component :is="currentIcon" />
	</button>
</template>

<style module lang="scss">
@use '@/assets/scss/_variables' as *;

.languageToggle {
	display: inline-flex;
	align-items: center;
	justify-content: center;

	padding: 0 0.75rem;
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

	span {
		color: var(--text-primary-muted);
	}

	&:hover span {
		color: var(--text-primary);
	}
}
</style>
