import type { NavConfigItem } from '@/types/navConfigItem'

export const NAV_ITEMS = [
	{ href: '#we', i18nKey: 'navbar.link1' },
	{ href: '#goods', i18nKey: 'navbar.link2' },
	{ href: '#benefits', i18nKey: 'navbar.link3' },
	{ href: '#contact', i18nKey: 'navbar.link4' },
] as const as NavConfigItem[]
