// Function.prototype.call: Implement the Function.prototype.call() function that calls the function with a given `this` value and provided arguments
// https://www.greatfrontend.com/questions/javascript/function-call

interface Function {
  myCall(this: Function, thisArg: any, ...argArray: any[]): any;
}

Function.prototype.myCall = function (thisArg, ...argArray) {
  return this.apply(thisArg, [...argArray]);
};
