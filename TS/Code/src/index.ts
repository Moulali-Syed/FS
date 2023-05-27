class Queue<T> {
  data: T[] = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.shift();
  }
}

let que1 = new Queue<number>();
que1.data = [1, 2, 3];
que1.push(100);
console.log(que1.pop());
//below gives compile time error
// Argument of type 'string' is not assignable to parameter of type 'number'
// que1.push('apple');
