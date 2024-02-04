// Array.prototype.reduce: Implement the Array.prototype.reduce() method
// https://www.greatfrontend.com/questions/javascript/array-reduce

interface Array<T> {
  myReduce<U>(
    callbackFn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U,
    initialValue?: U
  ): U;
}

Array.prototype.myReduce = function (callbackFn, initialValue) {
  const noInitialValue = initialValue === undefined;
  const len = this.length;

  if (noInitialValue && len === 0) {
    throw new TypeError('Reduce of empty array with no initial value');
  }

  let result = noInitialValue ? this[0] : initialValue;
  const startingIndex = noInitialValue ? 1 : 0;
  for (let i = startingIndex; i < len; i++) {
    if (Object.hasOwn(this, i)) {
      result = callbackFn(result, this[i], i, this);
    }
  }

  return result;
};
