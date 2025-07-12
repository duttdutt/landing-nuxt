function useScrollTo(target: string | HTMLElement, options: ScrollIntoViewOptions = { behavior: 'smooth' }) {
	const el = typeof target === 'string' ? document.querySelector(target) : target

	if (el) {
		el.scrollIntoView(options)
	}
	else {
		console.warn('[useScrollTo] Target not found:', target)
	}
}

export default useScrollTo
