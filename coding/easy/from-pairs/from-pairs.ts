// From Pairs:Implement a function that returns an object composed from key-value pairs
// https://www.greatfrontend.com/questions/javascript/from-pairs

export default function fromPairs<T>(pairs: Array<[string | number, T]>): Record<string | number, T> {
  return pairs.reduce((result, [key, value]) => ({ ...result, [key]: value }), {});
}
