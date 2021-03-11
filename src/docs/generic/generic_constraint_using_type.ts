// 제네릭으로 전달받은 객체의 키 값을 제네릭의 한정으로 사용하고 싶을 때
// 타입 추론을 통해 제네릭을 명시하지 않아도 유용하게 사용할 수 있다.

// 반환 값을 타입으로 지정하지 않아도 자동으로 추론한다.
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

const obj = {
  a: 10,
  b: 20
}

const a = getProperty(obj, 'a');
const b = getProperty(obj, 'b');

export const temp = '';
