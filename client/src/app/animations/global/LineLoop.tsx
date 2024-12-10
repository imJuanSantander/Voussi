'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { CustomEase } from 'gsap/CustomEase'
import { useRef, useState, useEffect } from 'react'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(CustomEase)

const LineLoop = () => {

  const container = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline()

      tl.to('.line', { y: '100%', duration: 2.5, ease: 'linear' }, 0)
      tl.to('.line2', { y: '100%', duration: 5, ease: 'linear' }, 0)
      tl.to('.line', { y: '-96%', duration: 0, ease: 'linear' }, 2.5)
      tl.to('.line', { y: '100%', duration: 5, ease: 'linear' }, 2.5)
      tl.to('.line2', { y: '-96%', duration: 0, ease: 'linear' }, 5)
      tl.to('.line2', { y: 0, duration: 2.5, ease: 'linear' }, 5)
      tl.repeat(-1)

    },
    { scope: container }
  ) 

  return (
    <div ref={container}>
      <div className={`relative overflow-hidden w-10 h-[10rem] flex justify-center items-center`}>
        <svg className='line absolute ' width="2.5" height="250" viewBox="0 0 2.5 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="1.5" y1="250" x2="1.5" stroke="#bbb" strokeWidth="2.5" strokeDasharray="14 8"/>
        </svg>
        <svg className='line2 absolute translate-y-[-97%] ' width="3" height="250" viewBox="0 0 3 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="1.5" y1="250" x2="1.5" stroke="#bbb" strokeWidth="3" strokeDasharray="14 8"/>
        </svg>
      </div>
    </div>
  )
}

export default LineLoop