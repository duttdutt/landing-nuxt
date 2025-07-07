<script setup lang="ts">
import { computed, useCssModule } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps<{
	variant?: 'solid' | 'outline' | 'ghost'
	size?: 'sm' | 'md' | 'lg'
	icon?: boolean
	to?: string
	color?: string
}>()

const $style = useCssModule()

const Component = computed(() => (props.to ? RouterLink : 'button'))

const variantClass = computed(() => {
	switch (props.variant) {
		case 'outline':
			return $style.outline
		case 'ghost':
			return $style.ghost
		default:
			return $style.solid
	}
})

const sizeClass = computed(() => {
	switch (props.size) {
		case 'lg':
			return $style.lg
		case 'md':
			return $style.md
		default:
			return $style.sm
	}
})

function handleClick() {
	const id = props.to!.slice(1)
	const target = document.getElementById(id)
	if (target) {
		target.scrollIntoView({ behavior: 'smooth' })
	}
}
</script>

<template>
	<Component
		:is="Component" :to="to" :class="[$style.button, variantClass, sizeClass]" :style="{ backgroundColor: props.color }"
		@click="handleClick"
	>
		<i v-if="icon" class="pi" :class="$style.icon" />
		<span v-else :class="$style.label">
			<slot />
		</span>
	</Component>
</template>

<style lang="scss" module>
.button {
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	// border-radius: 6px;
	transition:
		background-color 0.2s ease,
		color 0.2s ease;
	border: none;
	cursor: pointer;
	line-height: 1;
	user-select: none;
	text-decoration: none;
	letter-spacing: 0.5px;
	font-weight: 800;
	transition: all 0.45s ease;

	animation: smoothPulse 1.5s ease-in-out infinite;
}

.solid {
	background-color: var(--color-primary);
	color: var(--text-primary);

	&:hover {
		background-color: var(--color-primary-lighter);
		box-shadow: 0px 0px 15px 1px var(--color-primary-lighter);
	}

	&:active {
		background-color: var(--color-primary-darker);
	}
}

.outline {
	background-color: var(--text-primary);
	border: 1.5px solid var(--color-primary);
	color: var(--color-primary);

	&:hover {
		background-color: var(--text-primary);
	}

	&:active {
		background-color: var(--text-primary-muted);
	}
}

.ghost {
	background-color: transparent;
	color: #666;

	&:hover {
		background-color: #efefef;
	}
}

.sm {
	font-size: 0.875rem;
	padding: 0.5rem 1rem;
	height: 2.25rem;
}

.md {
	font-size: 1rem;
	padding: 0.625rem 1.25rem;
	height: 2.75rem;
}

.lg {
	font-size: 1.125rem;
	padding: 0.75rem 1.5rem;
	height: 3.25rem;
}

.icon {
	font-size: 1em;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	line-height: 1;
}

.label {
	line-height: 1;
	display: inline-block;
	text-transform: uppercase;
}

.icon + .label,
.label + .icon {
	margin-left: 0.5rem;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}

@keyframes smoothPulse {
	0%,
	100% {
		box-shadow: 0 0 25px 5px var(--color-primary-lighter);
	}

	50% {
		box-shadow: 0 0 25px 1px var(--color-primary-lighter);
	}
}
</style>
