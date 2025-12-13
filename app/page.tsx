//indica que el componente es del lado del cliente
'use client'
import { ComponentProps, Dispatch, JSX, SetStateAction, useState } from 'react'

//union types
type Color = 'red' | 'blue' | 'green' | 'yellow' | 'purple'
//props
type ButtonProps = {
  text: string
  subtitle?: string
  color?: Color
  backgroundColor?: Color
}

//arrays
type ButtonArrayProps = {
  padding: [number, number, number]
}

//css properties: propiedades de CSS
type ButtonCSSProps = {
  style: React.CSSProperties
}

//record types
type UserAges = {
  userAges: Record<'Alice' | 'Bob' | 'Jose', number>
}

//type functions
type ButtonFunctionProps = {
  onClick: () => void //no retorna nada
}

//reactNode vs JSX.Element
//reactNode ejecuta cualquier tipo de elemento
// JSX.Element solo ejecuta elementos de React
type ButtonChildrenProps = {
  children: JSX.Element | React.ReactNode
}

//uso de setters
type ButtonSetterProps = {
  setCount: Dispatch<SetStateAction<number>>
  children: React.ReactNode
}

//default props
type ButtonDefaultProps = {
  title?: string
  count?: number
}

//alias vs interfaces
interface ButtonPropsInterface {
  title?: string
  count?: number
}

type Domain = string
/* ❌ */
// interface Domain = string
interface MyDomain {
  domain: string
}
//tipado de props en componentes
type ButtonPropsComponent = ComponentProps<'button'>

//intersection y extends 🟡

/* spread operator */
function Button({ onClick, ...rest }: ButtonPropsComponent) {
  // manejador de eventos
  const handleClick = () => {
    if (onClick) {
      alert('clicked')
    }
  }

  return (
    <button onClick={handleClick} {...rest}>
      Button
    </button>
  )
}

function Page() {
  // const [count, setCount] = useState<number>(0)

  return (
    <div>
      <Button onClick={() => console.log('Alert')}>Button</Button>
    </div>
  )
}

export default Page

/* 
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button>
      {text}
    </button>
  )
}
*/
