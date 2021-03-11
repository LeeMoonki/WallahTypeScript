let s = 'hello';
let s1: typeof s; // s1: string

// 다음과 같은 에러를 확인했을 때
// - refers to a value, but is being used as a type here. -
// 값을 타입으로 변경해주는게 typeof이다.

function f() {
  return { x: 10, y: 20 };
}

type ft = typeof f;
type rt = ReturnType<typeof f>;

export const temp = '';
