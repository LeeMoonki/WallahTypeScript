// 객체 형태의 타입 혹은 인터페이스의 속성 타입에 접근해서 타입을 가져올 수 있다.
// indexing type
type Obj1 = { num: number; str: string; bool: boolean };
interface Obj2 { num: number; str: string; bool: boolean; };

type Num1 = Obj1['num'];
type Num2 = Obj2['num'];

// indexing type은 그 자체로 타입이기 때문에 타입에 적용할 수 있는 연산자들을 사용할 수 있다.
type NOrS = Obj1['num' | 'str'];
type Types = Obj1[keyof Obj2];

type NOrB = 'num' | 'bool';
type NOrB1 = Obj2[NOrB];
