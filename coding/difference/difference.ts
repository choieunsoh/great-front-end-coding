// Difference: Implement a function that finds the difference in values between arrays
// https://www.greatfrontend.com/questions/javascript/difference

export default function difference<T>(array: Array<T>, values: Array<T>): Array<T> {
  const excludedSet = new Set(values);
  const result: Array<T> = [];
  for (const value of array) {
    if (value === undefined || excludedSet.has(value)) continue;
    result.push(value);
  }
  return result;
}
