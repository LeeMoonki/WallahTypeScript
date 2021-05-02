export class Foo {
  _foo = 10;

  get foo() {
    return this._foo;
  }
}

const foo1 = new Foo();
foo1._foo // 접근 가능
foo1._foo = 100; // 가능
// foo1.foo = 100; // setter가 없으면 getter 속성은 readonly이다.

export class Bar {
  _bar = 10;

  get bar() {
    return this._bar;
  }
  set bar(value) {
    // setter의 파라미터 타입은 getter의 반환 타입으로 추론된다.
    // setter의 파라미터 타입이 설정되어있다면 getter의 반환 타입과 같아야 한다.
    // getter와 setter는 반드시 같은 Member visibility를 가져야 한다.
    this._bar = value;
  }
}
