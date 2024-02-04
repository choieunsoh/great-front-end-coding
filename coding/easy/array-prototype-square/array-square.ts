// Array.prototype.square: Implements a custom Array.prototype.square() method that squares the values in an array.
// https://www.greatfrontend.com/questions/javascript/array-square
interface Array<T> {
  square(): Array<number>;
}

Array.prototype.square = function () {
  return this.map((num) => num ** 2);
};
