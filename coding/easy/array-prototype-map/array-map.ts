// Array.prototype.map: Implement the Array.prototype.map() method
// https://www.greatfrontend.com/questions/javascript/array-map

interface Array<T> {
  myMap<U>(callbackFn: (value: T, index: number, array: Array<T>) => U, thisArg?: any): Array<U>;
}

Array.prototype.myMap = function (callbackFn, thisArg) {
  const len = this.length;
  const result: Array<any> = [];

  for (let i = 0; i < len; i++) {
    const value = this[i];
    // Ignore index if value is not defined for index (e.g. in sparse arrays).
    const found = Object.hasOwn(this, i);
    if (!found) {
      result.push(value);
      continue;
    }

    const mapValue = callbackFn.call(thisArg, value, i, this);
    result.push(mapValue);
  }

  return result;
};
