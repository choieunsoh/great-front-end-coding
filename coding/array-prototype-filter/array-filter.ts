// Array.prototype.filter: Implement the Array.prototype.filter() method
// https://www.greatfrontend.com/questions/javascript/array-filter

interface Array<T> {
  myFilter(callbackFn: (value: T, index: number, array: Array<T>) => boolean, thisArg?: any): Array<T>;
}

Array.prototype.myFilter = function (callbackFn, thisArg) {
  const len = this.length;
  const result: Array<any> = [];

  for (let i = 0; i < len; i++) {
    const value = this[i];
    // Ignore index if value is not defined for index (e.g. in sparse arrays).
    const found = Object.hasOwn(this, i);
    if (!found) continue;
    if (callbackFn.call(thisArg, value, i, this)) {
      result.push(value);
    }
  }

  return result;
};
