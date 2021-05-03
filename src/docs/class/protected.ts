// protected는 본인과 본인의 파생 클래스에만 노출되는 속성, 메서드를 지정한다.
export class Base {
  protected b = 10;
  protected logB() {
    console.log(this.b);
  }
}

class Derived extends Base {
  log() {
    console.log('mine ? ', this.b);
    this.logB();
  }
}

const d = new Derived();
d.log(); // mine ? 10, 10
// d.b; // Property 'b' is protected and only accessible within class 'Base' and its subclasses.

// 만약 특정 파생 클래스의 인스턴스에선 접근하고 싶다면 다음과 같이 속성을 오버라이드 한다.
class DerivedAndOverriding extends Base {
  public b = 20;
  log() {
    console.log(this.b);
  }
}

const dao = new DerivedAndOverriding();
dao.b = 30;
dao.log(); // 30
