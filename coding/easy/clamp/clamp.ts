// Clamp: Implement a function to clamp a number within the inclusive lower and upper bounds.
// https://www.greatfrontend.com/questions/javascript/clamp

export default function clamp(value: number, lower: number, upper: number): number {
  if (value < lower) return lower;
  if (value > upper) return upper;
  return value;
}
