<script setup lang="ts">
import SectionAdditionalInfo from '@/components/section/AdditionalInfo.vue'
import SectionBenefits from '@/components/section/Benefits/Benefits.vue'
import SectionChooseUs from '@/components/section/ChooseUs/ChooseUs.vue'
import SectionContact from '@/components/section/Contact/Contact.vue'
import SectionFaq from '@/components/section/Faq/Faq.vue'
import SectionGoods from '@/components/section/Goods/Goods.vue'
import SectionHero from '@/components/section/Hero.vue'
import SectionVideo from '@/components/section/Video.vue'

definePageMeta({
	layout: 'main-layout',
})
</script>

<template>
	<main id="we">
		<SectionHero />
		<SectionAdditionalInfo />
		<SectionChooseUs />
		<SectionVideo />
		<SectionGoods />
		<SectionBenefits />
		<SectionFaq />
		<SectionContact />
	</main>
</template>
