export abstract class Base {
  abstract getName(): string;

  public printName() {
    console.log('Hello, ' + this.getName());
  }
}

class Derived extends Base {
  public getName() {
    return 'world!!';
  }
}

// 다음과 같이 추상 클래스 Base를 준수하는 클래스를 타입으로 지정하고 싶을 수 있다.
function greet(ctor: typeof Base) {
  // 하지만 다음과 같은 에러가 발생한다.

  // const instance = new ctor(); // Cannot create an instance of an abstract class.

  // instance.printName();
}

// 이렇게 하는 대신, 다음과 같이 생성자 시크니처를 전달 받도록 함수를 정의하면 된다.
function greet1(ctor: new () => Base) {
  const instance = new ctor();
  instance.printName();
}

greet(Derived);


// 하지만 다음과 같은 경우가 더 많지 않을까...
function greet2(ctor: Base) {
  ctor.printName();
}

greet2(new Derived());

