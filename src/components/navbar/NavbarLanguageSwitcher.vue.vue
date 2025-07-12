<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import IconEn from '@/components/ui/icons/IconEn.vue'
import IconRu from '@/components/ui/icons/IconRu.vue'

const { locale } = useI18n()

const router = useRouter()
const switchLocalePath = useSwitchLocalePath()

const isRu = computed(() => locale.value.startsWith('ru'))
const currentIcon = computed(() => (isRu.value ? IconRu : IconEn))
const nextCode = computed(() => (isRu.value ? 'en' : 'ru'))

function toggleLocale() {
	router.push(switchLocalePath(nextCode.value))
}
</script>

<template>
	<button :class="$style.languageToggle" @click="toggleLocale">
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

	& svg {
		width: 1.5rem;
	}

	&:hover {
		background-color: var(--border-primary);
	}
}
</style>
