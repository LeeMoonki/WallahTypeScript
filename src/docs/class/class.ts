// 타입스크립트는 값과 타입을 구분한다.
// 예를 들어 a는 값이고 b는 타입이다.
const a = 10;
type b = number;

// 하지만 클래스와 열거형은 값과 타입을 모두 선언한다.

class C {}
const c: C // 여기에서 C는 타입이고 C 클래스의 인스턴스를 가리킨다.
  = new C(); // 여기에서 C는 값이다.

// C 클래스 자체는 typeof를 통해 가리킨다.

class D {
  static foo() {
    return 100;
  }
  constructor(protected _num: number) {}
  get num() {
    return this._num;
  }
}


const d = new D(1); // 다음은 D의 인스턴스 타입이다.

interface DInstance {
  get(): number;
}

// 다음은 typeof D의 생성자 타입이다.
interface DTypeof {
  new(_num: number): D;
  foo(): number;
}

export {};
