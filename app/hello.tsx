'use client';

//uso de as (valor como un tipo de dato especifico)
let someValue: unknown = 'Hello string';

type User = {
  id: number;
  name: string;
};

let user: unknown = {
  id: 1,
  name: 'John',
};

const newUser = user as User;

let stringValue = (someValue as string).length;

const colors = ['red', 'green', 'blue'] as const;

let num: number = 123;
let str = num as unknown as string;

const Hello = () => {
  const inputElement = document.getElementById('username') as HTMLInputElement;
  return (
    <div>
      <h1>Hello</h1>
      <input type="text" id="username" />
    </div>
  );
};

export default Hello;
