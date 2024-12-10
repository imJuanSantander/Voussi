'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { CustomEase } from 'gsap/CustomEase'
import { useRef, useState, useEffect } from 'react'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(CustomEase)

const Part4 = () => {

  const container = useRef(null)

  CustomEase.create("shoot3", "M0,0 C0,0 0.251,0.044 0.315,0.165 0.378,0.279 0.338,0.807 0.435,0.904 0.523,0.992 1,1 1,1 ")

  useGSAP(
    () => {
      const tl = gsap.timeline()

      // Everything appearing
      tl.to(container.current, { y: 0, opacity: 1, duration: .5, ease: 'power4.inOut' }, 0)

      // Text animation
      tl.to('.text1', { opacity: 1, duration: 1, x: 0, ease: 'power4.out' }, 0)
      tl.to('.text1', { opacity: .25, duration: 1 }, .8)
      tl.to('.text1', { x: '2rem', duration: 3 }, .6)

      tl.to('.text2', { opacity: 1, duration: 1, x: 10, ease: 'power4.out' }, .8)
      tl.to('.text2', { opacity: .25, duration: 1 }, 1.5)
      tl.to('.text2', { x: '2rem', duration: 3 }, 1)

      // Green line animation
      tl.fromTo('.path', { strokeDasharray: 300, strokeDashoffset: 300 }, { strokeDashoffset: 0, duration: 2, ease: 'power4' }, .2)

      // Everything moving to up constantly
      tl.to('.box2', { y: '-40%', duration: 8 }, 0)
      
      // Graphic white lines appearing
      tl.to('.shadow2', { y: '-220%', duration: 2.5, ease: 'power4.out' }, 0)
      tl.to('.shadow3', { x: '110%', duration: 2.75, ease: 'power4.out' }, 0)
      
      // Everything disappearing
      tl.to(container.current, { opacity: .5, y: '-8rem', duration: .5, ease: 'power4.inOut' }, 1.4)
      tl.to(container.current, { opacity: 0, duration: .5, y: '-14rem', ease: 'power4.inOut' }, 2.5)
    },
    { scope: container }
  )

  return (
    <div ref={container} className='translate-y-[10rem] flex justify-center items-center absolute ' >
      <div className='box2 translate-y-[40%] overflow-hidden opacity-1 '>
        {/* Line 1: vertical */}
        <div className='translate-y-[1px] '>
          <div className='line'>
            {/* Line */}
            <svg width="1" height="106" viewBox="0 0 1 106" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0.5" y1="106" x2="0.5" stroke="#555"/>
            </svg>
          </div>
          {/* shadow22: vertical line end overshadow */}
          <div className='bg-gradient-to-b from-black w-10 h-20 absolute translate-y-[-6.7rem] translate-x-[-50%] '></div>
          {/* shadow2: vertical line appearing effect */}
          <div className='shadow2 flex flex-col w-3 h-[6.5rem] absolute translate-x-[-50%] translate-y-[-105%] '>
            <div className='bg-black w-full h-full'></div>
            <div className='bg-gradient-to-b h-[1.5rem] from-black translate-y-[-.1px] w-full'></div>
          </div>
        </div>
        {/* Line 2: horizontal */}
        <div>
          {/* Line */}
          <div className='line'>
            <svg width="187" height="2" viewBox="0 0 187 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="-0.000305176" y1="0.75" x2="187.002" y2="0.75" stroke="#555"/>
            </svg>
          </div>
          {/* shadow3: shadow for horizontal line appearing effect  */}
          <div className='shadow3 bg-black flex w-[13rem] h-3 translate-y-[-50%] translate-x-[.5rem] absolute '>
            <div className='bg-gradient-to-l from-black translate-x-[5px] w-[1.5rem] h-full '></div>
            <div className='bg-black w-full h-full z-10 '></div>
          </div>
          {/* shadow33: horizontal line end overshadow */}
          <div className='bg-gradient-to-l from-black via-black w-[7rem] h-20 absolute translate-y-[-25%] translate-x-[7.5rem] '></div>
        </div>

        {/* Text1 */}
        <div className='translate-x-[.2rem] translate-y-[-5.5rem] flex flex-col justify-center items-center w-[6.5rem] h-[1.5rem] absolute'>
          <div className="w-full h-full overflow-hidden absolute ">
            <span className='text1 opacity-0 font-bold text-white/90 translate-x-[-2em] absolute '>exponentially</span>
          </div>
          <div className="absolute w-full h-full flex">
            <div className='bg-gradient-to-r z-20 from-black w-2 h-full translate-x-[-.1rem] '></div>
            <div className='bg-gradient-to-l z-20 from-black w-2 h-full translate-x-[5.56rem] '></div>
          </div>
        </div>

        {/* Text2 */}
        <div className='translate-x-[5rem] translate-y-[-2.5rem] flex flex-col justify-center items-center w-[6.5rem] h-[1.5rem] absolute'>
          <div className="w-full h-full overflow-hidden absolute ">
            <span className='text2 opacity-0 font-bold text-white/90 translate-x-[-2em] absolute '>increasing</span>
          </div>
          <div className="absolute w-full h-full flex">
            <div className='bg-gradient-to-r z-20 from-black w-4 h-full translate-x-[-.1rem] '></div>
            <div className='bg-gradient-to-l z-20 from-black w-4 h-full translate-x-[4.56rem] '></div>
          </div>
        </div>
        

        {/* Shadows */}

        {/* Green line */}
        <div className='absolute translate-y-[-8.25rem] '>
          <svg width="180" height="151" viewBox="0 0 239 151" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_0_1)">
            <path className='path' d="M11 140.176L27.8191 123.276L35.6158 131.036L57.8364 108.709L65.9875 116.821L95.6149 87.0518L105.184 96.5749L130.579 71.0584L140.856 81.2869L173.658 48.328L182.872 57.4984L225.197 14.9707" stroke="#00BB29" strokeWidth="2"/>
            </g>
            <rect width="20.042" height="24.4598" transform="translate(20.2471 117.441) rotate(46.1956)" fill="url(#paint0_linear_0_1)"/>
            <rect width="26.5786" height="60.6785" transform="translate(194.795 61.6372) rotate(-134.456)" fill="url(#paint1_linear_0_1)"/>
            <defs>
            <filter id="filter0_d_0_1" x="0.291199" y="4.26526" width="235.615" height="146.616" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.733333 0 0 0 0 0.160784 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_0_1" x1="10.021" y1="24.4598" x2="10.021" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0.406667"/>
            <stop offset="1" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_0_1" x1="13.2893" y1="60.6785" x2="13.2893" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0.116667"/>
            <stop offset="1" stopOpacity="0"/>
            </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Part4