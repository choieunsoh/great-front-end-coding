// Number of Arguments: Implement a function that returns the number of parameters expected by a function.
// https://www.greatfrontend.com/questions/javascript/number-of-arguments

export default function numberOfArguments(...args: Array<any>): number {
  return arguments.length;
}
