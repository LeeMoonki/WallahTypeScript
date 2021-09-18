// generic 타입의 값을 받을 때 해당 타입에 제한(constraint)을 걸고 싶다면 다음과 같이 한다.

// 만약 전달한 값을 그대로 받환하는데,
// 전달한 값의 length 속성을 로깅하는 기능을 넣고자 한다면
// generic이 아무 타입이나 다 받으면 안 되고 length 속성을 갖는 타입을 받아야 한다.

interface Lengthwise {
  length: number;
}

function identityWithLoggingLength<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}

// Pick의 경우 다음과 같이 정의하면 문제가 발생한다.
// type Pick1<T, K> = {
//   // Type 'K' is not assignable to type 'string | number | symbol'.
//   // Type 'K' is not assignable to type 'symbol'.
//   [k in K]: T[k];
// };

// 따라서 다음과 같이 정의해야 한다.
type Pick1<T, K extends keyof T> = {
  [k in K]: T[k];
};
