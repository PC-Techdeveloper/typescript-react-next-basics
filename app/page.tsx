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

/* 
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button>
      {text}
    </button>
  )
}
*/

function Button({}: UserAges) {
  return <button>test</button>
}

function Page() {
  return (
    <div>
      <Button
        userAges={{
          Alice: 20,
          Bob: 30,
          Jose: 40,
        }}
      />
    </div>
  )
}

export default Page
