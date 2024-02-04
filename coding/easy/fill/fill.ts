// Fill: Implement a function that fills an array with values within specified indices
// https://www.greatfrontend.com/questions/javascript/fill

export default function fill<T>(array: Array<T>, value: any, start: number = 0, end: number = array.length): Array<T> {
  const n = array.length;
  if (n === 0) {
    return array;
  }
  if (start < 0) {
    start = n + (start % n);
  }
  if (end < 0) {
    end = n + (end % n);
  }

  end = Math.min(n, end);
  for (let i = start; i < end; i++) {
    array[i] = value;
  }
  return array;
}
