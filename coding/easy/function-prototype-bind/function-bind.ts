// Function.prototype.bind: Implement the Function.prototype.bind() function that creates a new function with the `this` keyword set to a provided value
// https://www.greatfrontend.com/questions/javascript/function-bind

interface Function {
  myBind(this: Function, thisArg: any, ...argArray: any[]): Function;
}

Function.prototype.myBind = function (thisArg, ...argArray) {
  const originalMethod = this;
  return (...args: any[]) => {
    return originalMethod.apply(thisArg, [...argArray, ...args]);
  };
};
