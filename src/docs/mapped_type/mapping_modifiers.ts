type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
}

type LockedAccount = {
  readonly id: string;
  readonly name: string;
}

type UnlockedAccount = CreateMutable<LockedAccount>;
// type UnlockedAccount = {
//   id: string;
//   name: string;
// }
