'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { CustomEase } from 'gsap/CustomEase'
import { useRef } from 'react'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(CustomEase)

const Part2 = () => {

  const container = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline()

      tl.fromTo('.we', { x: 25 }, { x: 0, opacity: 1, ease: 'power4.out', duration: 1 })

    },
    { scope: container }
  )

  return ( 
    <div ref={container} className='absolute'>
      <div className="flex justify-center items-center gap-[3px] text-white font-bold">
        <span className='opacity-0 we'>We</span>
        <span className='opacity-0 are'>are</span>
        <span className='opacity-0 a'>a</span>
      </div>
    </div>
  )
}

export default Part2