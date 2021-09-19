// readonly는 얕게 동작한다

let nArr1: readonly number[][] = [[1], [2], [3]];
let nArr2: (readonly number[])[] = [[1], [2], [3]];

// nArr1.push([4]); // Property 'push' does not exist on type 'readonly number[][]'.
nArr2.push([4]); // 가능

nArr1[0].push(2); // 가능
// nArr2[0].push(2); // Property 'push' does not exist on type 'readonly number[]'.

function sumArr(n1: readonly number[]) {
  return n1.length > 0 ? n1.reduce((total, current) => total + current, n1[0]) : 0;
}

function foo(nArr: number[]) {
  // nArr은 sumArr의 매개변수인 n1의 서브타입이므로 아래와 같이 사용 가능
  const sumResult = sumArr(nArr);

  return sumResult;
}

export {};
