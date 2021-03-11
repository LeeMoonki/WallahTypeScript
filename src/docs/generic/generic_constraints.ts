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
