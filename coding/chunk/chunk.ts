// Chunk: Implement a function that creates an array of elements split into smaller groups of a specified size.
// https://www.greatfrontend.com/questions/javascript/chunk

export default function chunk<T>(array: Array<T>, size = 1): Array<Array<T>> {
  const chunks: Array<Array<T>> = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}
