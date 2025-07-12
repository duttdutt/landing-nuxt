<script setup lang="ts">
import Link from '../ui/Link.vue'
import NavbarButton from './NavbarButton.vue'

const { t } = useI18n()
</script>

<template>
	<div :class="$style.navbarWrapper">
		<div :class="$style.navbarContainer">
			<div :class="$style.navbarContent">
				<a :class="$style.logoLink" href="/">
					<img
						src="@/assets/images/Logo.svg"
						alt="Logo Image"
						width="150"
						height="40"
					>
				</a>
				<nav :class="$style.navLinks">
					<Link href="#we">
						{{ t("navbar.link1") }}
					</Link>
					<Link href="#goods">
						{{ t('navbar.link2') }}
					</Link>
					<Link href="#benefits">
						{{ t('navbar.link3') }}
					</Link>
					<Link href="#contact">
						{{ t('navbar.link4') }}
					</Link>
				</nav>
				<div :class="$style.buttons">
					<NavbarLanguageSwitcherVue />
					<NavbarThemeSwitcher />
					<NavbarButton
						variant="solid"
						to="#contact"
					>
						{{ t('button.toOrder') }}
					</NavbarButton>
				</div>
			</div>
		</div>
	</div>
</template>

<style module lang="scss">
.navbarWrapper {
	width: 100%;

	position: sticky;
	top: 0;
	z-index: 100;

	font-size: var(--step-0);

	.navbarContainer {
		display: flex;
		justify-content: center;

		padding: var(--space-xs);
		width: 100%;

		.navbarContent {
			display: flex;
			align-items: center;
			justify-content: space-between;

			width: 100%;
			// max-width: 1024px;
			padding: var(--space-3xs) var(--space-xs);

			transition: border-color 0.7s ease;
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

			.logoLink {
				display: block;

				cursor: pointer;
				user-select: none;
				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;

				height: 40px;
			}

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

			.buttons {
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 0.5rem;

				&.navbarButton {
					@media (max-width: 768px) {
						margin-left: auto;
					}
				}
			}
		}
	}
}
</style>
