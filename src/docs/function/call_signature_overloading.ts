type Reservation = {
  // ...
}

// Reserve라는 예약 API를 설계
type Reserve = {
  (from: Date, to: Date, destination: string): Reservation
  (from: Date, destination: string): Reservation // 편도
}

// 구현
// 편도 타입이 없다면 다음 코드는 자동 추론으로 인해 문제가 없는 코드가 된다.
// 하지만 위에서 처럼 함수 타입을 정의하면 Reserve 내의 타입들은 유니온 연산이 되지만
// 구현부에선 특정 타입을 나타내야 하므로 오류가 발생한다.

/*
let reserve: Reserve = (from, to, destination) => {
  return {
    // ...
  };
}
*/

// 따라서 다음과 같이 구현해야 한다.
let reserve: Reserve = (
  from: Date,
  toOrDestination: Date | string,
  destination?: string
) => {
  if (toOrDestination instanceof Date && destination !== undefined) {
    // 왕복
  } else if (typeof toOrDestination === 'string') {
    // 편도
  }

  return {
    // ...
  };
}

// 함수 선언식 오버로드
/*
function reserve(from: Date, to: Date, destination: string): Reservation
function reserve(from: Date, to: string, destination?: string): Reservation
function reserve(from: any, to: any, destination: any): Reservation {
  if (typeof to === 'string') {
    // 편도
  } else {
    // 왕복
  }

  return {
    // ...
  };
}
*/