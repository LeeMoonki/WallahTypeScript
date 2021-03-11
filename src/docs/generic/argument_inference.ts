function identity<Type>(arg: Type): Type {
  return arg;
}

const str = identity<string>('foo'); // str: string
const inference = identity('bar'); // inference: string
