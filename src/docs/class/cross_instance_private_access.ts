// 같은 클래스의 서로 다른 인스턴스는 서로의 private 속성에 대해 접근 가능하다.
export class Foo {
  private foo = 10;

  public sameAs(other: Foo) {
    return other.foo === this.foo;
  }
}
