// Function.prototype.apply: Implement the Function.prototype.apply() function that calls the function with a given `this` value and arguments as an array
// https://www.greatfrontend.com/questions/javascript/function-apply

interface Function {
  myApply(this: any, thisArg: any, argArray?: any[]): any;
}

Function.prototype.myApply = function (thisArg, argArray = []) {
  return this.call(thisArg, ...argArray);
};
