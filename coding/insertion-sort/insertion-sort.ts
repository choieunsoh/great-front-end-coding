// Insertion Sort: Implement a function that performs an insertion sort
// https://www.greatfrontend.com/questions/javascript/insertion-sort

export default function insertionSort(arr: Array<number>): Array<number> {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}
