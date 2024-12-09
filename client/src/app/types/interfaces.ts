export interface Component {
  name: string
  component: React.ComponentType
  input: number
}

export interface StepComponent {
  name: string
  component: React.FC<StepComponentProps>
}

export interface StepComponentProps {
  setCurrentComponent: (component: string) => void
}
