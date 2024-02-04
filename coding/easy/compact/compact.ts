// Compact: Implement a function that creates an array with all falsy values removed
// https://www.greatfrontend.com/questions/javascript/compact

export default function compact<T>(array: Array<T | null | undefined | false | 0 | ''>): Array<T> {
  const filtered: Array<T> = [];
  for (const value of array) {
    if (!value) continue;
    filtered.push(value);
  }
  return filtered;
}
