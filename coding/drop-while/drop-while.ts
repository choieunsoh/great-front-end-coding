// Drop While: Implement a function that excludes elements from the beginning of an array until the predicate returns false
// https://www.greatfrontend.com/questions/javascript/drop-while

export default function dropWhile<T>(
  array: Array<T>,
  predicate: (value: T, index: number, array: Array<T>) => boolean
): Array<T> {
  let index = 0;
  while (index < array.length && predicate(array[index], index, array)) {
    index++;
  }
  return array.slice(index);
}
