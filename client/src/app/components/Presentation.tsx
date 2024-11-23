'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { CustomEase } from 'gsap/CustomEase'
import { useRef } from 'react'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(CustomEase)

const Presentation = (props: { showComponent: (component: string) => void }) => {
  const { showComponent } = props

  const container = useRef(null)

  CustomEase.create("shoot3", "M0,0 C0,0 0.251,0.044 0.315,0.165 0.378,0.279 0.338,0.807 0.435,0.904 0.523,0.992 1,1 1,1 ")

  useGSAP(
    () => {
      const tl = gsap.timeline()

      // "Hello" and "!" appearing
      tl.fromTo('.box3', { y: 40 }, { y: 0, opacity: 1, duration: .5, ease: 'power4.out' })
      tl.fromTo('.exclamation', { x: 40 }, { x: 0, opacity: 1, duration: .5, ease: 'power4.out' }, .1)
      tl.to('.box3', { y: -25, opacity: .25, duration: .5, ease: 'power4.out', scale: .9 }, .8)
      tl.to('.box3', { y: -40, opacity: 0, duration: 1, ease: 'power4.out' }, 1.4)
      tl.to('.box3', { display: 'none', duration: .25 })
      
      // "Welcome to" appearing
      tl.fromTo('.welcome', { y: 40 }, { y: 0, opacity: 1, duration: .5, ease: 'power4.out' }, .8)
      tl.to('.welcome', { x: 0, duration: .25 }, 1)
      tl.fromTo('.to', { y: 20 }, { y: 0, opacity: 1, duration: .25  }, 1.1)
      
      // Box of "Welcome to" moving up to get ready to disappear
      tl.to('.box2', { y: -25, opacity: .25, duration: .5, ease: 'power4.out', scale: .9 }, 1.5) 
      
      // "Voussi.com" appearing 
      tl.fromTo('.box4', { y: 25 }, { y: 0, opacity: 1, duration: .25 }, 1.5)
      tl.to('.voussi', { x: 0, duration: .25 }, 1.8)
      tl.fromTo('.dotcom', { x: 25 }, { x: 0, opacity: 1, duration: .25 }, 1.8)
      
    },
    { scope: container }
  )

  return (
    <div ref={container} className='flex justify-center items-center w-full h-full'>
      <div className='box w-full h-[10em] flex justify-center items-center relative'>
        <div className='box3 w-10 h-5 flex justify-center items-center absolute opacity-0 '>
          <span className='hello font-bold text-white'>Hello</span>
          <span className='exclamation font-bold text-white opacity-0 '>!</span>
        </div>
        <div className='box2 flex justify-center items-center w-[20em] h-[1em] gap-[3px] '>
          <span className='welcome font-bold text-white opacity-0 translate-x-[20px] '>Welcome</span>
          <span className='to font-bold text-white opacity-0 '>to</span>
        </div>
        <div className='box4 font-bold flex justify-center items-center w-[8em] h-[1em] absolute opacity-0  '>
          <span className='voussi text-white translate-x-[20px] '>Voussi</span>
          <span className='dotcom text-white/75 opacity-0'>.com</span>
        </div>
      </div>
    </div>
  )
}

export default Presentation