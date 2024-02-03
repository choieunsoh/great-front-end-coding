// Promise.race: Implement the Promise.race() function that resolves or rejects when any of the input elements are resolved or rejected
// https://www.greatfrontend.com/questions/javascript/promise-race

export default function promiseRace<T extends readonly unknown[] | []>(iterable: T): Promise<Awaited<T[number]>> {
  return new Promise<Awaited<T[number]>>((resolve, reject) => {
    if (iterable.length === 0) return;

    iterable.forEach(async (item) => {
      try {
        const result = await item;
        resolve(result as Awaited<T[number]>);
      } catch (error) {
        reject(error);
      }
    });
  });
}
