<script setup lang="ts">
import type { NavItem } from '@/types/navItem'

import Link from '../ui/Link.vue'

const props = defineProps<{
	items: NavItem[]
}>()
</script>

<template>
	<nav :class="$style.navLinks">
		<Link
			v-for="item in props.items"
			:key="item.href"
			:href="item.href"
			:aria-label="item.label"
		>
			{{ item.label }}
		</Link>
	</nav>
</template>

<style lang="scss" module>
.navLinks {
	display: flex;
	gap: var(--space-m);
	font-size: var(--step-0);
	padding-inline: var(--space-s);
	font-weight: 500;

	@media (max-width: 768px) {
		display: none;
	}
}
</style>
