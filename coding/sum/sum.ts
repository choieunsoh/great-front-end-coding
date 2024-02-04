// Sum: Implement a function that sums numbers by accepting a number and allows for repeated calling with more numbers until it is not called with any number
// https://www.greatfrontend.com/questions/javascript/sum

type SumResult = (value?: number) => number | SumResult;

export default function sum(value: number): SumResult {
  return function curriedSum(num) {
    if (num === undefined) return value;
    return sum(value + num);
  };
}
