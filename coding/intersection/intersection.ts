// Intersection: Implement a function that computes the intersection of arrays, returning a new array containing unique values present in all given arrays
// https://www.greatfrontend.com/questions/javascript/intersection

export default function intersection<T>(...arrays: Array<Array<T>>): Array<T> {
  if (arrays.length === 0) return [];
  const result = new Set<T>(arrays[0]);
  for (let i = 1; i < arrays.length; i++) {
    const curr = new Set<T>(arrays[i]);
    result.forEach((value) => {
      if (!curr.has(value)) {
        result.delete(value);
      }
    });
  }
  return Array.from(result);
}
