import Part1 from "../animations/presentation/Part1"
import Part2 from "../animations/presentation/Part2"
import Timeline from "../resources/Timeline"
import { Component } from "../types/interfaces"
import { StepComponentProps } from "../types/interfaces"

const Presentation = ({ setCurrentComponent }: StepComponentProps) => {

  const timeline: Component[]  = [
    { name: 'Part1', component: Part1, input: 0 },
    { name: 'Part2', component: Part2, input: 2.35 },
  ]
  
  return (
    <div className="flex justify-center items-center">
      <Timeline timeline={timeline} />
    </div>
  )
}

export default Presentation