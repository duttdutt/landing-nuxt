export interface FaqItem {
	id: number
	questionKey: string
	answerKey: string
	isOpen: boolean
}

export const FAQ_ITEMS: FaqItem[] = [
	{ id: 0, questionKey: 'faq.q0', answerKey: 'faq.a0', isOpen: false },
	{ id: 1, questionKey: 'faq.q1', answerKey: 'faq.a1', isOpen: false },
	{ id: 2, questionKey: 'faq.q2', answerKey: 'faq.a2', isOpen: false },
	{ id: 3, questionKey: 'faq.q3', answerKey: 'faq.a3', isOpen: false },
	{ id: 4, questionKey: 'faq.q4', answerKey: 'faq.a4', isOpen: false },
]
