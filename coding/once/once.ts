// Once: Implement a function that accepts a callback and restricts its invocation to at most once
// https://www.greatfrontend.com/questions/javascript/once

type Fn<T> = (this: any, ...args: Array<any>) => T;

export default function once<T>(func: Fn<T>): Fn<T> {
  let invoked = false;
  let result: T;
  return function (args: Array<any>): T {
    if (invoked) return result;

    invoked = true;
    return (result = func.apply(this, args));
  };
}
