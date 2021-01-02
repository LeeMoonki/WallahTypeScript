// 지금까지 generic들과 달리 promise는 타입 추론보단 명시적으로 타입을 알려주는 게 좋을 때가 있다
// let p1 = new Promise(resolve => resolve(12));
// p1.then(result => result * 10); // result의 타입이 적절하지 않음

let p2 = new Promise<number>(resolve => resolve(12));
p2.then(result => result * 10);
