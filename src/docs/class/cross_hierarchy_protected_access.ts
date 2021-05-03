// 같은 Base 클래스의 서로 다른 계층을 가진 파생 클래스는 서로의 protected 속성에 접근 불가능 하다.

export class Base {
  protected x = 1;
}

class Derived1 extends Base {
  protected x = 5;
}

class Derived2 extends Base {
  f1(other: Derived2) {
    other.x = 10;
  }
  f2(other: Base) {

    // Property 'x' is protected and only accessible through an instance of class 'Derived2'.
    // other.x = 20;

  }
}
