// Object Map: Implement a function to transform values within an object
// https://www.greatfrontend.com/questions/javascript/object-map

export default function objectMap<V, R>(obj: Record<string, V>, fn: (val: V) => R): Record<string, R> {
  const result: Record<string, R> = {};
  for (const key in obj) {
    result[key] = fn.call(obj, obj[key]);
  }
  return result;
}
