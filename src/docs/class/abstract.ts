// 추상 메서드 또는 필드는 아직 구현되지 않은 것들이다.
// 이런 멤버들은 만드시 추상 클래스 내부에 있어야 한다. 그리고 추상 클래스는 인스턴스화 되지 않는다.
// 추상 멤버가 없는 클래스를 견고한(concrete) 클래스라고 한다.

export abstract class Base {
  abstract getName(): string;

  public printName() {
    console.log('Hello, ' + this.getName());
  }
}

// const b = new Base(); // Cannot create an instance of an abstract class.

// 추상 클래스의 역할은 파생 클래스가 모든 추상 멤버들을 구현하도록 하는 베이스 클래스 역할을 한다.
class Derived extends Base {
  public getName() {
    return 'world!!';
  }
}

const d = new Derived();
d.printName(); // Hello, world!!
