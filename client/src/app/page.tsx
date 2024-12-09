'use client'
import { useRef, useState } from 'react' 
import Intro from './components/Intro'
import Presentation from './components/Presentation'
import Clickme from './components/Clickme'
import Timeline from './resources/Timeline'
import Steplist from './resources/Steplist'
import { StepComponent } from './types/interfaces'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const page = () => {

  const container = useRef(null)

  const components: StepComponent[] = [
    // { name: 'Intro', component: Intro },
    // { name: 'Clickme', component: Clickme },
    { name: 'Presentation', component: Presentation },
  ]

  useGSAP(() => {
    gsap.fromTo('.task', { y: '3em' }, { opacity: 1, duration: 2, y: 0, ease: 'power4.out' })
    
  }, [container])

  return (
    <div ref={container} className='w-full h-screen flex justify-center items-center'>
      <div className='w-[320px] h-screen text-[1rem] flex justify-center items-center relative '>
        <Steplist steplist={components} />
      </div>
    </div>
  )
}

export default page