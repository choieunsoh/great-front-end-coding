// Promise.reject: Implement a function to return a Promise object rejected with a reason
// https://www.greatfrontend.com/questions/javascript/promise-reject

export default function promiseReject<T = never>(reason: any): Promise<T> {
  return new Promise<T>((_, reject) => {
    reject(reason);
  });
}
