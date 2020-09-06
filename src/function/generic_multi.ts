// 제네릭 타입의 추론이 자연스럽게 이뤄진다
function map<T, U>(array: T[], f: (item: T) => U): U[] {
  let result = [];
  for (let i = 0, len = array.length; i < len; i++) {
    result.push(f(array[i]));
  }
  return result;
}