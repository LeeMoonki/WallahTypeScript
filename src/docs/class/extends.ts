// overriding methods

// 파생 클래스는 속성과 메서드를 덮어쓸 수 있다.
// super 구문을 사용해 부모 클래스의 메서드에 접근할 수 있다.
// 자바스크립트의 클래스는 부모클래스의 필드에 접근할 때 단순히 객체를 타고 올라가므로(prototype chain) super field라는 개념은 없다.

// 타입스크립트는 파생 클래스(자식 클래스)가 항상 베이스 클래스(부모 클래스)의 서브 타입이 되도록 강제한다.

export class Base {
  base = 'base';
  greet() {
    console.log("Hello, world!");
  }
}

export class Derived extends Base {
  derived = 'derived';
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}. ${this.base} ${this.derived}`);
    }
  }
}

const d = new Derived();
d.greet(); // Hello, world!
d.greet("reader"); // Hello, READER. base derived

// 위와 같은 규칙을 지키기 때문에 다음과 같이 파생 클래스를 참조할 때 베이스 클래스를 통해 진행하는 경우가 많다.
const b: Base = d;
b.greet();

// 만약 베이스 클래스의 규칙을 파생 클래스에서 지키지 않으면 에러가 발생한다.
export class WrongDerived extends Base {

  //Property 'greet' in type 'WrongDerived' is not assignable to the same property in base type 'Base'.
  // Type '(name: string) => void' is not assignable to type '() => void'.

  // greet(name: string) {
  //
  // }
}
