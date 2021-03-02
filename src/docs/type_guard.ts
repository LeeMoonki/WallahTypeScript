// User Defined Type Guard

// boolean을 반환하는 함수를 통해 true를 반환하면 타입 가드를 통해 해당 타입임을 알릴 수 있다.
function isString(a: unknown): a is string {
  return typeof a === 'string';
}

// 따라서 다음과 같이 boolean을 반환하기만하면 정말 해당 타입임을 체크한 것인지 확실하지 않아도 된다.
function isStringFake(a: unknown): a is string {
  return typeof a === 'number';
}