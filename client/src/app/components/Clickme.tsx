'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { CustomEase } from 'gsap/CustomEase'
import { useRef, useEffect, useState } from 'react'
import { StepComponentProps } from '../types/interfaces'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(CustomEase)

const Clickme = ({ setCurrentComponent }: StepComponentProps) => {

  const container = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline()

      gsap.to(container.current, { opacity: 1, duration: 2 })

      tl.to('.text', { opacity: .5, duration: .9, })
      tl.to('.text', { opacity: .25, duration: .9, }) 
      tl.repeat(-1)
    },
    { scope: container }
  )

  const handleClick = () => { 
    gsap.to(container.current, { opacity: 0, duration: .5 })
    const timeoutId = setTimeout(() => {
      setCurrentComponent('Presentation')
    }, 2000)

    return () => clearTimeout(timeoutId)
  }

  const [screenWidth, setScreenWidth] = useState(1280) 
  const screen = useRef(null)
  
  useEffect(() => {
    // @ts-ignore
    setScreenWidth(screen.current.offsetWidth)
  }, [])
  
  return (
    <div ref={container} onClick={handleClick} className=" opacity-0 absolute w-screen h-full">
      <div ref={screen} className='w-full h-full flex justify-center items-center'>
        <span className='text select-none text-white opacity-25 font-normal text-[14px]'>{`${screenWidth > 320 ? 'Click' : 'Touch'} here to start`}</span>
      </div>
    </div>
  )
}

export default Clickme