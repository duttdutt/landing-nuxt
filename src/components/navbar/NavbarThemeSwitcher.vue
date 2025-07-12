<script setup lang="ts">
import { computed } from 'vue'
import IconDark from '../ui/icons/IconDark.vue'
import IconLight from '../ui/icons/IconLight.vue'

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

function toggleTheme() {
	colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>

<template>
	<button
		:class="[
			$style.themeToggle,
			{ [$style.themeToggleDark]: isDark },
		]"
		aria-label="Переключение темы"
		@click="toggleTheme"
	>
		<span :class="$style.themeToggleIcon">
			<component :is="isDark ? IconLight : IconDark" />
		</span>
	</button>
</template>

<style module lang="scss">
@use '@/assets/scss/_variables' as *;

.themeToggle {
	display: inline-flex;
	align-items: center;
	justify-content: center;

	width: 2.3rem;
	height: 2.3rem;

	background-color: var(--bg-primary);
	color: var(--text-primary);
	border: 2px solid transparent;
	cursor: pointer;

	transition: background 0.3s ease;

	&:hover {
		background-color: var(--bg-primary-hover);
	}

	&:focus-visible {
		outline: none;
		border-color: var(--color-primary);
		box-shadow: 0 0 0 3px rgba(11, 109, 255, 0.4);
	}

	&Icon {
		display: flex;
	}

	&Dark &Icon {
		transform: rotate(180deg);
	}
}
</style>
