import Dumbbels from '@/assets/images/Dumbbels.webp'
import GlovesSecond from '@/assets/images/Gloves_Second.webp'
import PunchingBag from '@/assets/images/Punching_Bag.webp'
import Rashguard from '@/assets/images/Rashguard.webp'
import Rope from '@/assets/images/Rope.webp'
import Yoga from '@/assets/images/Yoga.webp'

export const GOODS_IMAGE_KEYS = [
	'gloves',
	'punching_bag',
	'dumbbells',
	'yoga_mat',
	'rope',
	'resistance_band',
] as const

export type GoodsImageKey = typeof GOODS_IMAGE_KEYS[number]

export interface GoodsImageItem {
	key: GoodsImageKey
	src: string
	alt: string
}

export const GOODS_IMAGES: GoodsImageItem[] = [
	{ key: 'gloves', src: GlovesSecond, alt: 'gloves' },
	{ key: 'punching_bag', src: PunchingBag, alt: 'punching_bag' },
	{ key: 'dumbbells', src: Dumbbels, alt: 'dumbbells' },
	{ key: 'yoga_mat', src: Yoga, alt: 'yoga_mat' },
	{ key: 'rope', src: Rope, alt: 'rope' },
	{ key: 'resistance_band', src: Rashguard, alt: 'resistance_band' },
]
