// Selection Sort: Implement a function that performs a selection sort
// https://www.greatfrontend.com/questions/javascript/selection-sort

export default function selectionSort(arr: Array<number>): Array<number> {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}
