// Cancellable Interval: Implement a function that acts like setInterview but returns a function to cancel the interval.
// https://www.greatfrontend.com/questions/javascript/cancellable-interval

export default function setCancellableInterval(callback: Function, delay?: number, ...args: Array<any>): () => void {
  const self = this;
  const intervalId = setInterval(() => {
    callback.apply(self, args);
  }, delay);

  return () => clearInterval(intervalId);
}
