<script setup lang="ts">
const props = defineProps<{
	title?: string
}>()
</script>

<template>
	<h3
		:class="[$style.sectionTitle]"
	>
		{{ props.title }}
		<slot />
	</h3>
</template>

<style module lang="scss">
.sectionTitle {
	color: var(--text-primary);
	user-select: none;
	display: flex;

	font-size: var(--step-6);
	font-weight: 600;
}
</style>
