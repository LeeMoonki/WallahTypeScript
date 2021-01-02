// MyEvent<T> : 제네릭 타입 별칭 (generic type alias)
type MyEvent<T> = {
  target: T
  type: string
}

type ButtonEvent = MyEvent<HTMLButtonElement>

// MyEvent 같은 제네릭 타입을 사용할 때는 타입이 자동으로 추론되지 않으므로 타입 매개변수를 명시적으로 한정해야 한다.
let myEvent: MyEvent<HTMLButtonElement | null> = {
  target: document.querySelector('#myButton'),
  type: 'click',
}

function triggerEvent<T>(event: MyEvent<T>): void {
  // ...
}

triggerEvent({
  target: document.querySelector('#myButton'),
  type: 'mouseover'
});
