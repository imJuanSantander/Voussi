'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { CustomEase } from 'gsap/CustomEase'
import { useRef, useEffect } from 'react'
import { Howl } from 'howler'
import Logotype from '../svg/Voussi/Logotype'
import Glitch1 from '../svg/Voussi/Glitches/Glitch1'
import Glitch2 from '../svg/Voussi/Glitches/Glitch2'
import Glitch3 from '../svg/Voussi/Glitches/Glitch3'
import { StepComponentProps } from '../types/interfaces'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(CustomEase)

const Intro = ({ setCurrentComponent }: StepComponentProps) => {

  const container = useRef(null)

  const sound = new Howl({
    src: ['/sounds/notification.mp3']
  })

  CustomEase.create("shoot3", "M0,0 C0,0 0.251,0.044 0.315,0.165 0.378,0.279 0.338,0.807 0.435,0.904 0.523,0.992 1,1 1,1 ")

  useGSAP(
    () => {
      const tl = gsap.timeline()

      // Appear
      tl.to('.logotype', { duration: 5, opacity: 1, ease: 'power4.out' }, .5)

      // Glitch 1
      tl.to('.logotype', { opacity: 0, duration: .05 }, 1.5)
      tl.to('.glitch1', { opacity: 1, duration: .05 }, 1.5)
      
      tl.to('.glitch1', { opacity: 0, duration: .05 }, 1.6)
      tl.to('.logotype', { opacity: 1, duration: .05 }, 1.6)

      // Glitch 2
      tl.to('.logotype', { opacity: 0, duration: .05 }, 2.6)
      tl.to('.glitch2', { opacity: 1, duration: .05 }, 2.6)

      tl.to('.glitch2', { opacity: 0, duration: .05 }, 2.7)
      tl.to('.logotype', { opacity: 1, duration: .05 }, 2.7)

      // Glitch 3
      tl.to('.logotype', { opacity: 0, duration: .05 }, 3.1)
      tl.to('.glitch3', { opacity: 1, duration: .05 }, 3.1)
      
      tl.to('.glitch3', { opacity: 0, duration: .05 }, 3.2)
      tl.to('.logotype', { opacity: 1, duration: .05 }, 3.2)

      // Glitch 4
      tl.to('.logotype', { opacity: 0, duration: .05 }, 3.5)
      tl.to('.glitch2', { opacity: 1, duration: .05 }, 3.5)

      tl.to('.glitch2', { opacity: 0, duration: .05 }, 3.6)
      tl.to('.logotype', { opacity: 1, duration: .05 }, 3.6)

      // Glitch 5
      tl.to('.logotype', { opacity: 0, display: 'none', duration: .05 }, 3.7)
      tl.to('.glitch2', { opacity: 1, duration: .05 }, 3.7)

      tl.to('.glitch2', { opacity: 0, duration: .05 }, 3.8)
      tl.to('.glitch3', { opacity: 1, duration: .05 }, 3.8)
      
      tl.to('.glitch3', { opacity: 0, duration: .05 }, 3.85)
      tl.to('.glitch1', { opacity: 1, duration: .05 }, 3.85)

      tl.to('.glitch1', { opacity: 0, duration: .05 }, 3.9)
      tl.to('.glitch2', { opacity: 1, duration: .05 }, 3.9)

      tl.to('.glitch2', { opacity: 0, duration: .05 }, 3.95)
      tl.to('.glitch3', { opacity: 1, duration: .05 }, 3.95)      
      
      tl.to('.glitch3', { opacity: 0, duration: .05 }, 4)

    },
    { scope: container }
  )

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentComponent('Clickme')
    }, 6000)

    return () => clearTimeout(timeoutId)
  }, [])
  

  return (
    <div className='flex justify-center items-center' ref={container}>
      <Logotype className='logotype opacity-0 absolute ' />
      <Glitch1 className='glitch1 opacity-0 absolute ' />
      <Glitch2 className='glitch2 opacity-0 absolute ' />
      <Glitch3 className='glitch3 opacity-0 absolute ' />
    </div>
  )
}

export default Intro