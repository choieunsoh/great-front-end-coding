// Sleep: Implements a function that passes for a specified duration before resuming execution.
// https://www.greatfrontend.com/questions/javascript/sleep

export default async function sleep(duration: number): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}
