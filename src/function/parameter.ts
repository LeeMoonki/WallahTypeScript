type C = {
  foo?: string
  bar?: number
};

function log(a: string, b?: string, c: C = {}) {
  console.log(a, b, c);
}

log('hello');
log('hello', 'type');
log('hello', 'type', { foo: 'script', bar: 100 });
