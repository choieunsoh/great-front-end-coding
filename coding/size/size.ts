// Size: Implement a function that returns the size of collection
// https://www.greatfrontend.com/questions/javascript/size

export default function size(
  collection: Array<any> | Object | Map<any, any> | Set<any> | string | null | undefined
): number {
  if (collection === null || collection === undefined) {
    return 0;
  }

  if (Array.isArray(collection) || typeof collection === 'string') {
    return collection.length;
  }

  if (collection instanceof Set || collection instanceof Map) {
    return collection.size;
  }

  if (typeof collection === 'object') {
    return Object.keys(collection).length;
  }

  return 0;
}
