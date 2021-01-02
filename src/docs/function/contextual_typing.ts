type Add = (a: number, b: number) => number

function operation(a: number, b: number, add: Add): number {
  return add(a, b);
}

operation(10, 20, (a, b) => a + b); // 인라인으로 함수를 선언하면 인수로 전달하는 함수의 타입을 명시할 필요가 없다.

// 다음처럼 선언하면 func의 a와 b의 타입을 추론할 수 없어 에러가 발생한다.
// function func(a, b) {
//   return a + b;
// }

// operation(10, 20, func);
