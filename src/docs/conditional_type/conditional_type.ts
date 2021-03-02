// 조건부 타입

// T extends string : T는 string의 서브타입인지 확인
type IsString<T> = T extends string ? true : false

type A = IsString<string>; // true
type B = IsString<number>; // false

const a = 10;

// 조건부 타입 -  분배 법칙

// (string | number) extends T : (string extends T ? A : B) | (number extends T ? A : B) 와 같은 의미
type Distribution1<T> = (string | number) extends T ? 'foo' : 'bar'
type D11 = Distribution1<number>; // 'bar'
type D12 = Distribution1<number | string | boolean>; // 'foo'

// 마치 (string | number) 가 extends T에 분배되는 것과 같다.

export default {};
