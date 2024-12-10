import Part1 from "../animations/presentation/Part1"
import Part2 from "../animations/presentation/Part2"
import Part3 from "../animations/presentation/Part3"
import Part4 from "../animations/presentation/Part4"
import Timeline from "../resources/Timeline"
import { Component } from "../types/interfaces"
import { StepComponentProps } from "../types/interfaces"

const Presentation = ({ setCurrentComponent }: StepComponentProps) => {

  const timeline: Component[]  = [
    { name: 'Part1', component: Part1, input: 0 }, // 0
    { name: 'Part2', component: Part2, input: 2.35 }, // 2.35
    { name: 'Part3', component: Part3, input: 2.35 }, // 2.35
    { name: 'Part4', component: Part4, input: 4.35 }, // 4.35
  ]
  
  return (
    <div className="flex justify-center items-center">
      <Timeline timeline={timeline} />
    </div>
  )
}

export default Presentation