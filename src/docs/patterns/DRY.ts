// DRY
// 반복을 줄이는 방법

interface Person {
  firstName: string;
  lastName: string;
}
interface Living {
  country: string;
  city: string;
}

// 반복을 다중 상속을 통해 해결하는 방법
interface Profile extends Person, Living {
  birth: Date;
}

type OneDimension = {
  x: number;
}
type TwoDimension = OneDimension & {
  y: number;
}
type ThreeDimension = TwoDimension & {
  z: number;
}

const one: ThreeDimension = {
  x: 1,
  y: 3,
  z: 2
};

// 여기까진 상위 개념이 '먼저', '우선적'으로 존재하고 하위 개념을 상위 개념을 통해 확장하려고 할 때 유용합니다.
// 하지만 만약 먼저 하위 개념이 존재하고 그 부분집합을 추출하려고 할 땐 인덱스를 활용합니다.

type Car = {
  oilCurrent: number;
  oilCapacity: number;
  startEngine: () => void;
  stopEngine: () => void;
}

// 방법1
type Vehicle1 = {
  // [k in keyof Car]: Car[k]; // 이렇게 하지 않는 이유는 그대로 전부 가져다 사용하는 건 추출이 아니기 때문입니다.
  [k in 'startEngine' | 'stopEngine']: Car[k];
}

// 방법2
type Vehicle2 = Pick<Car, 'startEngine' | 'stopEngine'>;


export {};
