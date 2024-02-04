// Find Index: Implement a function that returns the index of the first element in the array that satisfies the provided testing function
// https://www.greatfrontend.com/questions/javascript/find-index

export default function findIndex<T>(
  array: Array<T>,
  predicate: (value: T, index: number, array: Array<T>) => boolean,
  fromIndex = 0
): number {
  const n = array.length;
  if (fromIndex < -n) {
    fromIndex = 0;
  } else if (fromIndex < 0) {
    fromIndex += n;
  }
  for (let i = fromIndex; i < n; i++) {
    if (predicate(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}
