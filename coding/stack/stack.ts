// Stack: Implement a stack data structure containing the common stack methods
// https://www.greatfrontend.com/questions/javascript/stack

export default class Stack<T> {
  private stack: Array<T> = [];

  constructor() {
    this.stack = [];
  }

  /**
   * Pushes an item onto the top of the stack.
   */
  push(item: T): number {
    return this.stack.push(item);
  }

  /**
   * Remove an item at the top of the stack.
   */
  pop(): T | undefined {
    if (this.stack.length === 0) return undefined;
    return this.stack.pop();
  }

  /**
   * Determines if the stack is empty.
   */
  isEmpty(): boolean {
    return this.stack.length === 0;
  }

  /**
   * Returns the item at the top of the stack without removing it from the stack.
   */
  peek(): T | undefined {
    if (this.stack.length === 0) return undefined;
    return this.stack[this.stack.length - 1];
  }

  /**
   * Returns the number of items in the stack.
   */
  length(): number {
    return this.stack.length;
  }
}
