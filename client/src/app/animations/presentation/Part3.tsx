'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { CustomEase } from 'gsap/CustomEase'
import { useRef, useState, useEffect } from 'react'
import LineLoop from '../global/LineLoop'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(CustomEase)

const Part3 = () => {

  const container = useRef(null)
  CustomEase.create("shoot3", "M0,0 C0,0 0.251,0.044 0.315,0.165 0.378,0.279 0.338,0.807 0.435,0.904 0.523,0.992 1,1 1,1 ")

  useGSAP(
    () => {
      const tl = gsap.timeline()

      // Move everything to up
      tl.to('.box', { y: '.95rem', duration: 4, opacity: 1, ease: 'shoot3' }, 0)

      // text appearing 
      tl.to('.text', { y: 0, opacity: 1, duration: 2.5, ease: 'power4.inOut' }, .35)
      
      // over-shadow effect
      tl.to('.capa', { y: '100%', duration: 8, ease: 'power4.out' }, .7)

      // Move everything to up for disappear
      tl.to(container.current, { y: '-9rem', duration: 1, opacity: .5, ease: 'power4.inOut' }, 1.8)
      tl.to(container.current, { y: '-15rem', duration: 1, opacity: 0, ease: 'power4.inOut' }, 3.1)
      
    },
    { scope: container }
  )

  return (
    <div ref={container}>
      <div className="box opacity-0 flex justify-center items-center w-[8rem] translate-y-[9rem] ">
        <div className='capa translate-y-[-20%] flex flex-col justify-center items-center absolute z-20 w-24 h-[20rem] '>
          <div className="bg-gradient-to-t from-black w-full h-[5rem] "></div>
          <div className='bg-black w-full h-full '></div>
        </div>

        <div className="text opacity-0 translate-y-[2rem] bg-black z-30 flex justify-center items-center text-white/75 font-bold absolute ">
          <div className='bg-gradient-to-t from-black z-10 to-transparent w-10 h-9 absolute translate-y-[-1.8rem] '></div>
          <span>dedicated to</span>
          <div className='bg-gradient-to-b from-black z-10 to-transparent w-10 h-9 absolute translate-y-[1.8rem] '></div>
        </div>

        <div className='relative'>
          <div className='bg-gradient-to-b from-black z-10 to-transparent w-10 h-16 absolute translate-y-[-8px] '></div>
            <LineLoop />
          <div className='bg-gradient-to-t from-black z-10 to-transparent w-10 h-16 absolute translate-y-[-60px] '></div>
        </div>
      </div>
    </div>
  )
}

export default Part3