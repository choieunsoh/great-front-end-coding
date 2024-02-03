// Compose: Implement a function that takes multiple functions as arguments and returns a new function that applies those functions in reverse
// https://www.greatfrontend.com/questions/javascript/compose

export default function compose(...fns: Array<Function>): Function {
  return (input: any) => {
    return fns.reduceRight((result, fn) => {
      return fn(result);
    }, input);
  };
}
