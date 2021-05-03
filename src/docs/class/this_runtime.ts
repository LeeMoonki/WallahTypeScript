// 아무리 타입스크립트라지만 자바스크립트를 거역할 순 없다.

export class Foo {
  public foo = 'foooo!';
  public sayFoo() {
    console.log(this.foo);
  }
}

const f = new Foo();
const obj = {
  foo: 'bar!',
  sayFoo: f.sayFoo,
};

obj.sayFoo(); // bar!


// 이렇게하면 this를 유지할 수 있다.
class Bar {
  public bar = 'bar!!!';
  public sayBar = () => {
    console.log(this.bar);
  }
}
const b = new Bar();
const global = b.sayBar;

global(); // bar!!!

// 하지만 이렇게 하면 다음과 같은 특징이 있다.
// 1. this가 실행 컨텍스트가 아닌 인스턴스임을 보장한다.
// 2. 메모리를 더 사용한다. 왜냐하면 Bar의 모든 인스턴스는 Bar에서 정의한 모든 함수를 복사해서 가져야 하기 때문이다.
// 3. Bar를 상속한 파생 클래스에서 super.sayBar를 호출할 수 없다.


// 이 때 다음과 같이 this의 타입을 설정해주면 된다.
class Baz {
  public baz = 'baz?';
  public sayBaz(this: Baz) {
    console.log(this.baz);
  }
}

const bazInstance = new Baz();
bazInstance.sayBaz(); // baz?

const global1 = bazInstance.sayBaz;

// The 'this' context of type 'void' is not assignable to method's 'this' of type 'Baz'.
// global1();


// 이 방법은 화살표 함수를 통해 해결한 것과 반대의 특징들을 갖는다.
// 1. 잘못된 this 컨텍스트에서 실행 될 수 있다.
// 2. 하나의 클래스 정의에 대해서만 함수가 메모리에 할당된다. 인스턴스 하나에 한 함수가 복사되지 않는다.
// 3. Baz를 상속한 파생 클래스에서 super를 통해 호출할 수 있다.
