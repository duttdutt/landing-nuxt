<script setup lang="ts">
const props = defineProps<{
	title?: string
}>()
</script>

<template>
	<h3 :class="$style.sectionTitle">
		{{ props.title }}
		<slot />
	</h3>
</template>

<style module lang="scss">
.sectionTitle {
	display: flex;

	color: var(--text-primary);
	font-size: var(--step-6);
	font-weight: 700;
	user-select: none;
}
</style>
