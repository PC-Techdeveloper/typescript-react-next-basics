//introducción a los genéricos
//generic types: Define un tipo genérico que puede ser utilizado para cualquier tipo

// function identity<T>(value: T) {
//   return value;
// }

type ApiResponse<T> = {
  status: number;
  data: T;
};

const response1: ApiResponse<{ name: string; age: number }> = {
  status: 200,
  data: { name: 'John', age: 30 },
};

console.log(response1);

const response2: ApiResponse<string> = {
  status: 200,
  data: 'Hello 1',
};

const response3: ApiResponse<string[]> = {
  status: 200,
  data: ['item 1', 'item 2'],
};

function getFirstElement<T>(arr: T[]) {
  return arr[0];
}

console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(['a', 'b', 'c']));

interface Box<T> {
  content: T;
}

const box1: Box<string> = { content: 'hello' };
const box2: Box<number> = { content: 123 };

function Generic() {
  // identity<string>('hello 1');
  // identity<number>(456);
  // identity<boolean>(true);

  return <div>Generic</div>;
}

export default Generic;
