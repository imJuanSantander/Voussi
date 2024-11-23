'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { CustomEase } from 'gsap/CustomEase'
import { useRef } from 'react'
import { Howl } from 'howler'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(CustomEase)

const Intro = (props: { showComponent: (component: string) => void }) => {
  const { showComponent } = props

  const container = useRef(null)

  const sound = new Howl({
    src: ['/sounds/notification.mp3']
  })

  const play = () => {
    sound.play()
  }

  // play()

  useGSAP(
    () => {
      gsap.fromTo('.box', { x: -50 }, { x: 0, duration: 7, ease: 'power4.out', delay: 1 })
      const tl = gsap.timeline()

      // Step 1
      tl.fromTo('.v',  { x: -10 },  { x: 0, duration: .6, ease: 'power4.out', opacity: 1, delay: 0 }, 1)
      tl.fromTo('.o',  { x: -15  }, { x: 2.5, duration: .8, ease: 'power4.out', opacity: 1, delay: .075 }, 1)
      tl.fromTo('.o',  { x: -15  }, { x: 5, duration: 1, ease: 'power4.out', opacity: 1, delay: .075 }, 1)
      tl.fromTo('.u',  { x: -20  }, { x: 7.5, duration: 1.2, ease: 'power4.out', opacity: 1, delay: .15 }, 1)
      tl.fromTo('.s',  { x: -25  }, { x: 10, duration: 1.4, ease: 'power4.out', opacity: 1, delay: .275 }, 1)
      tl.fromTo('.s2', { x: -30  }, { x: 12.5, duration: 1.6, ease: 'power4.out', opacity: 1, delay: .35 }, 1)
      tl.fromTo('.i',  { x: -35  }, { x: 15, duration: 1.8, ease: 'power4.out', opacity: 1, delay: .475 }, 1)
      
      // Step 2
      tl.to('.v',  { x: 50, ease: 'shoot3', duration: 2 }, 3)
      tl.to('.o',  { x: 30, ease: 'shoot3', duration: 2 }, 3)
      tl.to('.u',  { x: 10, ease: 'shoot3', duration: 2 }, 3)
      tl.to('.s',  { x: -10, ease: 'shoot3', duration: 2 }, 3)
      tl.to('.s2', { x: -30, ease: 'shoot3', duration: 2 }, 3)
      tl.to('.i',  { x: -50, ease: 'shoot3', duration: 2 }, 3)

      tl.to('.shadow', { y: 12.5, duration: 3 }, 1)
      tl.to('.shadow', { y: 30, duration: 2 }, 3.5)

      tl.to('.box', { opacity: 0, duration: 1 })
      tl.to('.box', { display: 'none' })
      tl.to('.shadow', { display: 'none' })

    },
    { scope: container }
  )

  setTimeout(() => {
    showComponent('presentation')
  }, 7000)

  return (
    <div className='flex justify-center items-center' ref={container}>
      <div className='box flex justify-center items-center w-[10em] gap-5 '>
        <h1 className='v opacity-0 font-extrabold text-[20px] text-white select-none'>v</h1>
        <h1 className='o opacity-0 font-extrabold text-[20px] text-white select-none'>o</h1>
        <h1 className='u opacity-0 font-extrabold text-[20px] text-white select-none'>u</h1>
        <h1 className='s opacity-0 font-extrabold text-[20px] text-white select-none'>s</h1>
        <h1 className='s2 opacity-0 font-extrabold text-[20px] text-white select-none'>s</h1>
        <h1 className='i opacity-0 font-extrabold text-[20px] text-white select-none'>i</h1>
      </div>
      <div className='shadow absolute w-[20em] h-[2em] bg-gradient-to-t from-black to-transparent '></div>
    </div>
  )
}

export default Intro