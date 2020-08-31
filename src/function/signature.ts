function sum(a: number, b: number): number {
  return a + b;
}

// 함수 sum의 호출 시크니처(call signature) 또는 타입 시크니처(type signature)
// 또는 단축형 호출 시그니처(shorthand call signature)로도 불린다.
type Sum = (a: number, b: number) => number

// 단축형이 아니라 전체 호출 시그니처는 다음과 같다.

/*
type Sum = {
  (a: number, b: number): number
}
*/