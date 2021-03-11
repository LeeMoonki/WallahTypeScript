// unknown 타입은 any 처럼 모든 타입의 super 타입이지만 any와 달리 그냥 사용할 수 없다.
// unknown 타입의 경우 사용하기 전에 어떤 타입인지 특정해줘야 사용할 수 있다.

function addAny(num1: any, num2: any) {
  return num1 + num2;
}

function add(num1: unknown, num2: unknown) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  }
}

export const temp = '';
