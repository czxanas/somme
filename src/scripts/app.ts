import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// export const initSmoothScroll = () => {
const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
// }

if (import.meta.env.MODE === 'development') {
    // Dynamically import the grid-helper only in development mode
    import('@locomotivemtl/grid-helper')
        .then(({ default: GridHelper }) => {
            new GridHelper({
                columns: 12,
                gutterWidth: '10px',
                marginWidth: '10px',
                // columns: 'var(--grid-columns)',
                // gutterWidth: `var(--spacing-gutter)`,
                // marginWidth: `var(--spacing-gutter)`,
                color: 'black',
                // opacity: 0.2,
                key: 'g',
                // breakpoints: {
                //     '700': { columns: 8, gutterWidth: `var(--spacing-gutter)` },
                //     '1000': { columns: 12, gutterWidth: `var(--spacing-gutter)` }
                // }
            });
        })
        .catch((error) => {
            console.error('Failed to load the grid helper:', error);
        });
}
