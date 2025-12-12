type ButtonProps = {
  text: string
  subtitle?: string
  color?: string
}

/* 
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button>
      {text}
    </button>
  )
}
*/

function Button(props: ButtonProps) {
  const { text, subtitle, color } = props

  return (
    <button>
      {text}
      <br />
      {subtitle}
      <br />
    </button>
  )
}

const Page = () => {
  return (
    <div>
      <Button text="Hello" subtitle="second text" color="red" />
    </div>
  )
}

export default Page
