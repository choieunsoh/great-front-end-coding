// Find Last Index: Implement a function that returns the index of the last element in the array that satisfies the provided testing function
// https://www.greatfrontend.com/questions/javascript/find-last-index

export default function findLastIndex<T>(
  array: Array<T>,
  predicate: (value: T, index: number, array: Array<T>) => boolean,
  fromIndex = array.length - 1
): number {
  const n = array.length;
  if (fromIndex < -n) {
    fromIndex = 0;
  } else if (fromIndex >= n) {
    fromIndex = n - 1;
  } else if (fromIndex < 0) {
    fromIndex += n;
  }
  for (let i = fromIndex; i >= 0; i--) {
    if (predicate(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}
