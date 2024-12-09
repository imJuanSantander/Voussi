import { Component } from "../types/interfaces"
import { useState, useEffect } from "react"

interface Props {
  timeline: Component[]
}

const Timeline = ({ timeline }: Props) => {

  const [activeComponents, setActiveComponents] = useState<string[]>([])

  useEffect(() => {
    // Add a component to the timeline 
    timeline.forEach(({ name, input }) => {
      const timeoutId = setTimeout(() => {
        setActiveComponents((prevActive) => [...prevActive, name])
      }, input * 1000)

      return () => clearTimeout(timeoutId)
    })
  }, [])

  return (
    <>
      {
        activeComponents.map((name, index) => {
          const Component = timeline.find((comp) => comp.name === name)?.component

          if(Component) {
            return <Component key={`${name}-${index}`} />
          }

          return null
        })
      }
    </>
  )
}

export default Timeline