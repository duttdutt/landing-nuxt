<script setup lang="ts">
import AdditionalInfo from '@/components/section/AdditionalInfo.vue'
import Benefits from '@/components/section/Benefits/Benefits.vue'
import ChooseUs from '@/components/section/ChooseUs/ChooseUs.vue'
import ContactSection from '@/components/section/Contact/ContactSection.vue'
import Faq from '@/components/section/Faq/Faq.vue'
import Goods from '@/components/section/Goods/Goods.vue'
import Hero2 from '@/components/section/Hero2.vue'
import Video from '@/components/section/Video.vue'

definePageMeta({
	layout: 'main-layout',
})
</script>

<template>
	<div>
		<Hero2 />
		<AdditionalInfo />
		<ChooseUs />
		<Video />
		<Goods />
		<Benefits />
		<Faq />
		<ContactSection />
	</div>
</template>
