// this type guard의 사용법 중 하나는 특정 필드에 대해 유효성을 검사하는 것이다.
// 예를 들어 다음과 같이 값이 있는 경우에는 undefined를 걷어낼 수 있다.

export class Foo<T> {
  public value?: T;

  hasValue(): this is { value: T } {
    return this.value !== undefined;
  }
}

const f = new Foo();
f.value = 'foo';

f.value; // (property) Foo<unknown>.value?: unknown

if (f.hasValue()) {
  // undefined가 걷어졌다.
  f.value; // (property) value: unknown
}
