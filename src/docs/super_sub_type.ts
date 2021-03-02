// 두 타입 Sup와 Sub가 있을 때 Sub가 Sup의 서브타입이면 Sup가 필요한 곳 어디든 Sub를 안전하게 사용할 수 있다.

// 배열은 객체의 서브타입이다.
const obj: object = [1, 2, 3];

// 튜플은 배열의 서브타입이다.
const tuple: [number, string] = [10, 'foo'];
const arr: (number | string)[] = tuple;

// 모든 타입은 any의 서브타입이다.
const a: any = tuple;
const b: any = arr;

// never는 모든 타입의 서브타입이다.
const n = (nvr: never) => {
  const num: number = nvr;
  return num;
};


// Vehicle을 상속받는 Car 클래스가 있을 때 Car는 Vehicle의 서브타입이다.
class Vehicle {}
class Car extends Vehicle {}

const v: Vehicle = Car;
