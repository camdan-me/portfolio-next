// detect if browser prefers reduced motion
export default function prefersReducedMotion(w) {
	return !!(
		w.matchMedia('(prefers-reduced-motion: reduce)') === true ||
		w.matchMedia('(prefers-reduced-motion: reduce)').matches === true
	);
}
