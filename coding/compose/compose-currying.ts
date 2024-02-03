// Compose: Implement a function that takes multiple functions as arguments and returns a new function that applies those functions in reverse
// https://www.greatfrontend.com/questions/javascript/compose

export function compose1(...fns: Array<Function>): Function {
  return (input: any) => {
    return fns.reduceRight((result, fn) => {
      return fn(result);
    }, input);
  };
}

export default function compose(...fns: Array<Function>): Function {
  return function (x: any): any {
    function apply(fn: Function, ...rest: Array<any>): any {
      if (rest.length === 0) {
        return fn instanceof Function ? fn(x) : x;
      }

      const [firstFn, ...restFns] = rest;
      return fn(apply(firstFn, ...restFns));
    }

    const [firstFn, ...restFns] = fns;
    return apply(firstFn, ...restFns);
  };
}
