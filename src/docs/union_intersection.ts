type A = {
  a: number;
  b: string;
  c: boolean;
};

type B = {
  foo: string;
  bar: string;
};

type AandB = A & B;

// A 와 B의 모든 타입을 다 가져야 한다.
const aandb: AandB = {
  a: 10,
  b: '20',
  c: true,
  foo: '30',
  bar: '40',
};

type AorB = A | B;

// A or B에서 다음과 같이 어느 한 쪽의 타입 중 하나만 갖고 있으면 에러가 발생한다.
// const aorb: AorB = {
//   foo: 'foo',
// };

// 다음 처럼 두 타입에 속하지 않은 값을 가지면 에러가 발생한다.
// const aorb: AorB = {
//   foo: 'foo',
//   bar: 'bar',
//   d: 10,
// };

// 다음 처럼 한 타입을 온전히 갖는다면 다른 타입의 일부 속성을 가져도 좋다.
const aorb1: AorB = {
  foo: 'foo',
  bar: 'bar',
  a: 10,
};

const aorb2: AorB = {
  a: 10,
  b: 'b',
  c: true,
  foo: 'foo'
}

export {};
