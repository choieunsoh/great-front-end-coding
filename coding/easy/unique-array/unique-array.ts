// Unique Array: Implement a function to remove all duplicate values from an array
// https://www.greatfrontend.com/questions/javascript/unique-array

export default function uniqueArray<T extends ReadonlyArray<unknown>>(array: T): Array<T[number]> {
  const unique = new Set(array);
  return Array.from(unique);
}
