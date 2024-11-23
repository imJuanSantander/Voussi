'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { CustomEase } from 'gsap/CustomEase'
import { useRef, useState } from 'react'
import Intro from './components/Intro'
import Presentation from './components/Presentation'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(CustomEase)

const page = () => {

  const container = useRef(null)
  const [showIntro, setShowIntro] = useState(true)
  const [showPresentation, setShowPresentation] = useState(false)

  const showComponent = (component: string) => {
    switch (component) {
      case 'intro': 
        setShowIntro(true)
        break
      case 'presentation':
        setShowIntro(false)
        setShowPresentation(true)
        break
    }
  }

  CustomEase.create("shoot3", "M0,0 C0,0 0.251,0.044 0.315,0.165 0.378,0.279 0.338,0.807 0.435,0.904 0.523,0.992 1,1 1,1 ")

  useGSAP(
    () => {
      gsap.fromTo('.ala', { y: 20 }, { y: -20, duration: 8 })
    },
    { scope: container }
  )

  return (
    <div ref={container} className='w-full h-screen flex justify-center items-center'>
      <div className='w-[320px] h-full border-x-2 border-white/10 flex justify-center items-center relative '>
        {/* { showIntro && <Intro showComponent={showComponent} /> } */}
        {/* { showPresentation && <Presentation showComponent={showComponent} /> } */}

        {/* <Intro showComponent={showComponent} /> */}
        <Presentation showComponent={showComponent} />
      </div>
    </div>
  )
}

export default page