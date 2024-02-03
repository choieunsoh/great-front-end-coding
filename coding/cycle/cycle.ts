// Cycle: Implement a function that takes one or more values and returns a function that cycles through those values each time it is called
// https://www.greatfrontend.com/questions/javascript/cycle

export default function cycle<T>(...values: Array<T>): () => T {
  let index = 0;
  return (): T => values[index++ % values.length];
}
