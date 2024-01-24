// Cancellable Timeout: Implement a function that acts like setTimeout but returns a function to cancel the pending callback.
// https://www.greatfrontend.com/questions/javascript/cancellable-timeout

export default function setCancellableTimeout(callback: Function, delay?: number, ...args: Array<any>): () => void {
  const self = this;
  const timeoutId = setTimeout(() => {
    callback.apply(self, args);
  }, delay);

  return () => clearTimeout(timeoutId);
}
