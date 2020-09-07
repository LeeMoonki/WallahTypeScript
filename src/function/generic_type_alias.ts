type MyEvent<T> = {
  target: T
  type: string
}

type ButtonEvent = MyEvent<HTMLButtonElement>

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
