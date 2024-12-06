import { StepComponent } from "../types/interfaces"
import { useState } from "react"

interface Props {
  steplist: StepComponent[]
}

const Steplist = ({ steplist }: Props) => {

  const [currentComponent, setCurrentComponent] = useState(steplist[0].name)

  return (
    <>
      {
        steplist.map(({ name, component }, index) => {
          const Component = component
          if(name == currentComponent) {
            return <Component setCurrentComponent={setCurrentComponent} key={`${name}-${index}`} />
          }
        })
      }  
    </>
  )
}

export default Steplist