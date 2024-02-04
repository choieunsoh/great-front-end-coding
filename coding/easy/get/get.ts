// Get: Implement a function to safely access deeply-nested properties in JavaScript objects.
// https://www.greatfrontend.com/questions/javascript/get

export default function get<T>(
  objectParam: Record<string, any>,
  pathParam: string | Array<string>,
  defaultValue?: T
): T | undefined | null {
  let object = objectParam;
  const paths = !Array.isArray(pathParam) ? pathParam.split('.') : pathParam;
  for (const path of paths) {
    if (object === undefined) return defaultValue;
    if (!isObject(object)) return defaultValue;
    object = object[path];
  }

  if (object === undefined) return defaultValue;
  return object as T;
}

function isObject(val: any): boolean {
  return val instanceof Object;
}
/*

const john = {
  profile: {
    name: { firstName: 'John', lastName: 'Doe' },
    age: 20,
    gender: 'Male',
  },
};

const jane = {
  profile: {
    age: 19,
    gender: 'Female',
  },
};

type StringOptional = string | undefined | null;

var expected: StringOptional;
var result: StringOptional;

expected = 'John';
result = get<StringOptional>(john, 'profile.name.firstName'); // 'John'
console.log(result, result === expected);

expected = 'Male';
result = get<StringOptional>(john, 'profile.gender'); // 'Male'
console.log(result, result === expected);

expected = undefined;
result = get<StringOptional>(jane, 'profile.name.firstName'); // undefined
console.log(result, result === expected);

var expected1 = 19;
var result1 = get<number>(jane, 'profile.age'); // 19
console.log(result1, result1 === expected1);

expected1 = 3;
result1 = get<number>({ a: [{ b: { c: 3 } }] }, 'a.0.b.c'); // 3
console.log(result1, result1 === expected1);

console.log(get({ b: null }, 'b'));

console.log(get({ b: null }, 'b.c'));

*/
