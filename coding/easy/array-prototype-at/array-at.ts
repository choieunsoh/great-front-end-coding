// Array.prototype.at: Implement the Array.prototype.at() method
// https://www.greatfrontend.com/questions/javascript/array-at

interface Array<T> {
  myAt(index: number): T | undefined;
}

Array.prototype.myAt = function (index: number) {
  if (index < 0) index += this.length;
  if (index < 0 || index >= this.length) return undefined;
  return this[index];
};
