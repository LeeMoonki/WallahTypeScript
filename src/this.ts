function handleDate(this: Date) {
  return `${this.getFullYear()}-${this.getMonth() + 1}-${this.getDate()}`;
}

handleDate.call(new Date());