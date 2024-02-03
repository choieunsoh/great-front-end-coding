// Insertion Sort: Implement a function that performs an insertion sort
// https://www.greatfrontend.com/questions/javascript/insertion-sort

export default function insertionSort(arr: Array<number>): Array<number> {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    const current = arr[i];
    let j = i - 1;
    while (j >= 0 && current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}
