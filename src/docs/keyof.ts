type indexNumber = { [n: number]: unknown };
type n = keyof indexNumber; // type n = number

type indexString = { [s: string]: unknown };
type s = keyof indexString; // type s = string | number
// 자바스크립트의 키값은 항상 문자열로 변환되기 때문에 obj[0] -> obj['0']이다.
// 따라서 s는 문자열과 숫자 둘 다 가능하다.

type obj = {
  a: '10',
  b: '20'
};
type o = keyof obj; // type o = 'a' | 'b'

export const temp = '';
