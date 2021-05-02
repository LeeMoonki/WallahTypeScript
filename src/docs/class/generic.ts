export class Foo<Type> {
  foo: Type;
  constructor(value: Type) {
    this.foo = value;
  }
}

// 만약 제네릭 클래스가 인스턴스화 된다면 함수를 호출할 때와 마찬가지로 제네릭 타입이 추론된다.
const foo = new Foo('hi'); // 추론
const foo1 = new Foo<string>('hi');

foo.foo;
