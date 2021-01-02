type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[]
}

const filter: Filter = (array, f) => {
  let result = [];
  for (let i = 0, len = array.length; i < len; i++) {
    let item = array[i];
    if (f(item)) {
      result.push(item);
    }
  }

  return result;
}