import { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)


/**
* Hook to init Locomotive Scroll and wire it to GSAP ScrollTrigger.
* Applies to any element with `[data-scroll-container]`.
*/
export default function useLocoScroll() {
const locoRef = useRef(null)


useEffect(() => {
const container = document.querySelector('[data-scroll-container]')
if (!container) return


const loco = new LocomotiveScroll({
el: container,
smooth: true,
lerp: 0.09,
multiplier: 1,
smartphone: { smooth: true },
tablet: { smooth: true },
})
locoRef.current = loco


// tell ScrollTrigger to use this proxy
ScrollTrigger.scrollerProxy(container, {
scrollTop(value) {
return arguments.length ? loco.scrollTo(value, { duration: 0, disableLerp: true }) : loco.scroll.instance.scroll.y
},
getBoundingClientRect() {
return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
},
pinType: container.style.transform ? 'transform' : 'fixed',
})


// each time Locomotive Scroll updates, tell ScrollTrigger
loco.on('scroll', ScrollTrigger.update)


// refresh ScrollTrigger & update Locomotive on window update
ScrollTrigger.addEventListener('refresh', () => loco.update())
ScrollTrigger.refresh()


return () => {
if (loco) {
loco.destroy()
ScrollTrigger.removeEventListener('refresh', () => loco.update())
}
}
}, [])


return locoRef
}