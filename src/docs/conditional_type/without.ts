type Without<T, U> = T extends U ? never : T

type A = Without<
  boolean | number | string,
  boolean
>

// type A = Without<boolean | number | string, boolean>
// type A = Without<boolean, boolean> | Without<number, boolean> | Without<string, boolean>
// type A = (boolean extends boolean) ? never : boolean) | ((number extends boolean) ? never | number) | ((string extends boolean) ? never | string)
// type A = never | number | string
// type A = number | string