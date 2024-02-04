// Type Utilities II: Implement utilities to determine non-primitive variable types in JavaScript
// https://www.greatfrontend.com/questions/javascript/type-utilities-ii

export function isArray(value: unknown): boolean {
  return Array.isArray(value);
}

export function isFunction(value: unknown): boolean {
  return value instanceof Function;
}

export function isObject(value: unknown): boolean {
  if (value === null || value === undefined) return false;
  return typeof value === 'object' || value instanceof Function;
}

export function isPlainObject(value: unknown): boolean {
  if (value === null || value === undefined) return false;

  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}
