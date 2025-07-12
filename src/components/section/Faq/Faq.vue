<script setup lang="ts">
import type { FaqItem } from '@/constants/section_faq.ts'
import { ref } from 'vue'
import Accordion from '@/components/ui/Accordion/Accordion.vue'
import Heading from '@/components/ui/Heading.vue'
import { FAQ_ITEMS } from '@/constants/section_faq'

const faqItems = ref<FaqItem[]>(FAQ_ITEMS)

function toggleAnswer(id: number) {
	faqItems.value = faqItems.value.map(faq => ({
		...faq,
		isOpen: faq.id === id ? !faq.isOpen : false,
	}))
}
</script>

<template>
	<section :class="$style.faqSection">
		<Heading title="Частые вопросы" />
		<div :class="$style.wrapper">
			<Accordion
				v-for="item of faqItems" :id="item.id" :key="item.id" :question="item.question" :is-open="item.isOpen"
				@toggle-answer="toggleAnswer"
			>
				{{ item.answer }}
			</Accordion>
		</div>
	</section>
</template>

<style lang="scss" module>
.faqSection {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: var(--space-xs);

	width: 100%;
	padding-block: var(--space-l);

	background-color: var(--bg-faq);
	color: var(--text-faq);

	h3 {
		color: var(--text-faq);
	}

	.wrapper {
		max-width: 80vw;
		border-bottom: 1px solid var(--border-faq);
	}
}
</style>
