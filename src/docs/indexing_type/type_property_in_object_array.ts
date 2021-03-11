const people = [
  { name: 'foo', age: 10 },
  { name: 'bar', age: 42 },
  { name: 'baz', age: 57 },
];

type Person = typeof people[1];
type Name = typeof people[0]['name'];
type Age = Person['age'];


export const temp = '';
