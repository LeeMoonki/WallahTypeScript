// implements는 class가 특정 interface를 만족하도록 한다.
// 주의해야 할 것은 implements 절은 class가 interface type으로 다뤄질 수 있는지만 체크한다는 것이다.
// 따라서 implements 절과 interface는 class의 타입과 메서드의 타입을 변경하지 않는다.

interface IFoo {
  foo(str: string): void;
}

export class Foo implements IFoo {

  // 아래의 str은 string 타입일 것이라고 생각하지만 그렇지 않다.
  // implements 절은 class의 내용이 어떻게 체크되는지 또는 타입이 어떻게 추론되는지 변경하지 않는다.

  // foo(str) { // Parameter 'str' implicitly has an 'any' type
  //   console.log(str.length);
  // }

  // 따라서 다음과 같이 작성해야 한다.
  foo(str: string) {
    console.log(str.length);
  }
}

// 또한 interface의 optional property는 implements 절을 사용한다고 생성되지 않는다.

interface IBar {
  a: number;
  b?: number;
}

export class Bar implements IBar {
  a = 10;
}

const bar = new Bar();

// bar.b; // Property 'b' does not exist on type 'Bar'