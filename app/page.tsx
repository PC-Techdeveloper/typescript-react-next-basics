//indica que el componente es del lado del cliente
'use client';
import {
  ComponentProps,
  Dispatch,
  JSX,
  SetStateAction,
  useEffect,
  useState,
  useRef,
} from 'react';
import { ComponentPropsWithRef, MouseEvent } from 'react';
import Hello from './hello';
import Generic from './generic';

//union types
type Color = 'red' | 'blue' | 'green' | 'yellow' | 'purple';
//props
type ButtonProps = {
  text: string;
  subtitle?: string;
  color?: Color;
  backgroundColor?: Color;
};

//arrays
type ButtonArrayProps = {
  padding: [number, number, number];
};

//css properties: propiedades de CSS
type ButtonCSSProps = {
  style: React.CSSProperties;
};

//record types
type UserAges = {
  userAges: Record<'Alice' | 'Bob' | 'Jose', number>;
};

//type functions
type ButtonFunctionProps = {
  onClick: () => void; //no retorna nada
};

//reactNode vs JSX.Element
//reactNode ejecuta cualquier tipo de elemento
// JSX.Element solo ejecuta elementos de React
type ButtonChildrenProps = {
  children: JSX.Element | React.ReactNode;
};

//uso de setters
type ButtonSetterProps = {
  setCount: Dispatch<SetStateAction<number>>;
  children: React.ReactNode;
};

//default props
type ButtonDefaultProps = {
  title?: string;
  count?: number;
};

//alias vs interfaces
interface ButtonPropsInterface {
  title?: string;
  count?: number;
}

type Domain = string;
/* ❌ */
// interface Domain = string
interface MyDomain {
  domain: string;
}
//tipado de props en componentes
type ButtonPropsComponent = ComponentProps<'button'>;

//intersection y extends
interface Props extends ComponentPropsWithRef<'button'> {}

// interface ButtonPropsExtends extends Props {
//   url: string
// }

type User = {
  name: string;
  age: number;
  email: string;
  password: string;
};
//utility types
type UserWithoutPassword = Omit<User, 'password' | 'email'>;

type UpdateUser = Partial<User>;

type UserPublicData = Pick<User, 'name' | 'email'>;

type OptionalUserWithoutPassoword = Partial<Omit<User, 'password'>>;

type Status = 'active' | 'inactive' | 'pending' | 'deleted' | 'blocked';

type AllowedStatus = Exclude<Status, 'inactive' | 'pending'>;

/* spread operator */
function Button({}: Props) {
  // event handlers
  // const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {}
  // function handleClick(e: MouseEvent<HTMLElement, globalThis.MouseEvent>) {
  //   console.log(e);
  // }

  //tipado de hooks
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState('Button');
  // const [active, setActive] = useState(false);

  const [user, setUser] = useState<User | null>(null);
  const myButton = useRef<HTMLButtonElement>(null);

  const sendData = () => {
    const user: UserWithoutPassword = {
      name: 'name',
      age: 30,
    };
    return;
  };
  return <button ref={myButton}>Hola soy un botón</button>;
}

function Page() {
  // const [count, setCount] = useState<number>(0)

  return (
    <section>
      <h1 className="text-2xl font-bold text-red-300">
        Curso de Next JS + TypeScript
      </h1>
      <Generic />
    </section>
  );
}

export default Page;

/*
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button>
      {text}
    </button>
  )
}
*/
