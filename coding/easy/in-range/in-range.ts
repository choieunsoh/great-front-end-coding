// In Range: Implement a function to check if a number falls between two numbers
// https://www.greatfrontend.com/questions/javascript/in-range

export default function inRange(value: number, start: number, end?: number): boolean {
  if (end === undefined) {
    [start, end] = [0, start];
  } else if (start > end) {
    [start, end] = [end, start];
  }
  return value >= start && value < end;
}
