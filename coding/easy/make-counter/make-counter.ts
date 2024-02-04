// Make Counter: Implements a function that accepts an integer value and
// returns a function that can be repeatedly called to return increasing values.
// https://www.greatfrontend.com/questions/javascript/make-counter

export default function makeCounter(initialValue?: number): () => number {
  let count = initialValue ?? 0;
  return () => count++;
}
