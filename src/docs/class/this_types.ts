// class에서 this는 현재 클래스의 타입에 따라 동적으로 참조된다.

export class Foo {
  public foo = '';

  public set(value: string) { //(method) Foo.set(value: string): this
    // this가 Foo가 아니라 this다.
    this.foo = value;

    return this;
  }

  public sameAs(other: this) {
    return other.foo === this.foo;
  }
}

const f = new Foo();
const b = f.set('foo'); // b: Foo

export class DerivedFromFoo extends Foo {
  public clear() {
    this.foo = '';
  }
}

const dff = new DerivedFromFoo();
const dff1 = dff.set('foo'); // dff1: DerivedFromFoo


const baseFoo = new Foo();
const derivedFoo = new DerivedFromFoo();

// Foo.sameAs의 other 타입이 this라면 아래와 같은 에러 발생
// 즉, this를 호출하는 인스턴스가 DerivedFromFoo의 인스턴스이기 때문에 other의 타입인 this는 DerivedFromFoo로 동적으로 참조된다.
// 따라서 Foo에는 clear가 없기 때문에 에러가 발생한다.
/**
Argument of type 'Foo' is not assignable to parameter of type 'DerivedFromFoo'.
  Property 'clear' is missing in type 'Foo' but required in type 'DerivedFromFoo'
*/
// derivedFoo.sameAs(baseFoo);

// 이 문제를 해결하기 위해선 other의 타입을 Foo로 지정하면 된다.
