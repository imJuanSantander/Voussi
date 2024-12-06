// Part1: "Hello! Welcome to Voussi.com"
'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { CustomEase } from 'gsap/CustomEase'
import { useRef } from 'react'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(CustomEase)

const Part1 = () => {

  const container = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline()

      // "Hello!" gets displayed
      tl.fromTo('.box2', { y: 40 }, { y: 0, opacity: 1, duration: .5, ease: 'power4.out' })
      tl.fromTo('.exclamation', { x: 40 }, { x: 0, opacity: 1, duration: .5, ease: 'power4.out' }, .1)

      // "Hello!" gets hidden
      tl.to('.box2', { y: -25, opacity: .25, duration: .5, ease: 'power4.out', scale: .9 }, .8)
      tl.to('.box2', { y: -40, opacity: 0, duration: .75, ease: 'power4.out' }, 1.4)
      tl.to('.box2', { display: 'none', duration: .25 })

      // "Welcome to" gets displayed
      tl.fromTo('.welcome', { y: 40 }, { y: 0, opacity: 1, duration: .5, ease: 'power4.out' }, .8)
      tl.to('.welcome', { x: 0, duration: .25 }, 1)
      tl.fromTo('.to', { y: 20 }, { y: 0, opacity: 1, duration: .25  }, 1.1)
      
      // "Welcome to" gets hidden
      tl.to('.box3', { y: -25, opacity: .25, duration: .5, ease: 'power4.out', scale: .9 }, 1.5) 
      tl.to('.box3', { y: -40, opacity: 0, duration: .75, ease: 'power4.out' }, 2.5)
      tl.to('.box3', { display: 'none', duration: .25 }, 2.8)
      
      // "Voussi.com" gets displayed
      tl.fromTo('.box4', { y: 25 }, { y: 0, opacity: 1, duration: .5, ease: 'power4.out' }, 1.5)
      tl.to('.voussi', { x: 0, duration: .25 }, 1.8)
      tl.fromTo('.dotcom', { x: 25, opacity: 0 }, { x: 0, opacity: 1, duration: .25 }, 1.8)
      
      tl.to('.box4', { y: -25, opacity: .25, duration: .5, ease: 'power4.out', scale: .9 }, 2.5)
      tl.to('.box4', { opacity: 0, duration: .25 }, 2.6)
      tl.to('.box4', { display: 'none', opacity: 0, duration: .25 }, 2.8)
    },
    { scope: container }
  )

  return (
    <div ref={container} className='absolute'>
      <div className='flex justify-center items-center'>
        <div className='box2 w-10 h-5 flex justify-center items-center absolute opacity-0 '>
          <span className='hello font-bold text-white'>Hello</span>
          <span className='exclamation font-bold text-white opacity-0 '>!</span>
        </div>
        <div className='box3 flex justify-center items-center w-[20em] h-[1em] gap-[3px] '>
          <span className='welcome font-bold text-white opacity-0 translate-x-[20px] '>Welcome</span>
          <span className='to font-bold text-white opacity-0 '>to</span>
        </div>
        <div className='box4 font-bold flex justify-center items-center w-[8em] h-[1em] absolute opacity-0 '>
          <span className='voussi text-white translate-x-[20px] '>Voussi</span>
          <span className='dotcom text-white/75'>.com</span>
        </div>
      </div>
    </div>
  )
}

export default Part1