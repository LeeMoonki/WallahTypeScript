// T의 범위를 개별 시그니처로 한정한 전체 호출 시그니처.
// T를 한 시그니처 범위로 한정했으므로 타입스크립트는 filter 타입의 함수를 호출할 때 이 시그니처의 T를 구체 타입으로 한정한다.
// 각각의 filter 호출을 자신만의 T 한정 값을 갖는다.
// type Filter = {
//   <T>(array: T[], f: (item: T) => boolean): T[]
// }
// let filter: Filter = // ...

// 위와 달리 전체 시그니처가 아닌 단축 호출 시그니처
// type Filter = <T>(array: T[], f: (item: T) => boolean) => T[]
// let filter: Filter = // ...


// T의 범위를 모든 시그니처로 한정한 전체 호출 시그니처
// T를 Filter 타입의 일부로(특정 시그니처 타입이 아니라) 선언했으므로 타입스크립트는 Filter 타입의 함수를 선언할 때 T를 한정한다.
// type Filter<T> = {
//   (array: T[], f: (item: T) => boolean): T[]
// }
// let filter: Filter<number> = // ...

// 위와 달리 전체 시그니처가 아닌 단축 호출 시그니처
// type Filter<T> = (array: T[], f: (item: T) => boolean) => T[]
// let filter: Filter<string> = // ...


// T를 시그니처 범위로 한정한, 이름을 갖는 함수 호출 시그니처.
// filter를 호출할 때 T를 타입으로 한정하므로 각 filter 호출은 자신만의 T 한정 값을 갖는다.
// function filter<T>(array: T[], f: (item: T) => boolean): T[] {
//   // ...
// }

