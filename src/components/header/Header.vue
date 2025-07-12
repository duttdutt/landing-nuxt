<script setup lang="ts">
import { NAV_ITEMS } from '@/constants/navItems'

import HeaderLogo from './HeaderLogo.vue'
import Navbar from './Navbar.vue'

import NavbarButton from './NavbarButton.vue'
import NavbarLanguageSwitcher from './NavbarLanguageSwitcher.vue'
import NavbarThemeSwitcher from './NavbarThemeSwitcher.vue'

const { t } = useI18n()

const navItems = computed(() =>
	NAV_ITEMS.map(item => ({
		href: item.href,
		label: t(item.i18nKey),
	})),
)
</script>

<template>
	<header role="banner" :class="$style.headerRoot">
		<div :class="$style.navbarContainer">
			<div :class="$style.navbarContent">
				<HeaderLogo />
				<Navbar :items="navItems" />
				<div :class="$style.actions">
					<NavbarLanguageSwitcher />
					<client-only>
						<NavbarThemeSwitcher />
					</client-only>
					<NavbarButton />
				</div>
			</div>
		</div>
	</header>
</template>

<style module lang="scss">
.headerRoot {
	width: 100%;
	overflow: visible;

	position: sticky;
	top: 0;
	left: 0;
	z-index: 10000;

	font-size: var(--step-0);
}

.navbarContainer {
	display: flex;
	justify-content: center;

	width: 100%;
	padding: var(--space-xs);
}

.navbarContent {
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	padding: var(--space-3xs) var(--space-xs);

	transition: border-color 0.2s;

	backdrop-filter: blur(100px);
	border: 1px solid var(--border-primary);

	@media (max-width: 768px) {
		max-width: 100%;
		padding: 10px var(--space-s);
	}

	@media (max-width: 576px) {
		max-width: 100%;
		padding: 10px var(--space-xs);
	}

	&:hover {
		border-color: var(--border-primary-hover);
	}

	.actions {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}
}
</style>
